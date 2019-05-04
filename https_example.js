const https = require("https");

const options =
{
  host: 'www.example.org',
  path: '/'
};

const callback = function(response)
{
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

console.log('About to make request');

https.request(options, callback).end();

console.log('Request made');