const https = require("https");

const options =
{
  host: 'www.example.org',
  path: '/'
};

const callback = function(response)
{
  console.log('In response handler callback!');

  response.on('data', function(chunk)
    {
      console.log('[-- CHUNK OF LENGTH', chunk.length, '--]');
      console.log(chunk.toString());
    });
}

console.log('About to make request');

https.request(options, callback).end();

console.log('Request made');