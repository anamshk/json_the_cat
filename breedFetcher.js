const request = require('request');

let url = " https://api.thecatapi.com/v1/breeds/search?q=";

url += process.argv[2];

request(url, (error, response, body)=> {
  if (error) {
    console.error(error);
    return;
  }
    
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(undefined);
    return;
  }

  console.log(data[0]['description']);
  console.log(typeof data);
  JSON.stringify(data);
  
});
