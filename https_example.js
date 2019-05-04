const https = require("https");

const options =
{
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
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