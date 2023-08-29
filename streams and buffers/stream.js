const fs = require('fs');

const streamread = fs.createReadStream('./blog1.txt');

fs.ReadStream.on('data', (chunk ) => {
    console.log(' ---  NEW CHUNK  ----- ');
    console.lon(chunk)

});