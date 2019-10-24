const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
    ('error:', error);
    ('statusCode:', response);
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
  });
});











