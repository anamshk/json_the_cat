const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let url = " https://api.thecatapi.com/v1/breeds/search?q=";
  url += breedName;
  console.log(url);
  request(url, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("error", null);
      return;
    }
    callback(null, data[0]['description']);
  });
};


module.exports = { fetchBreedDescription };
    
  