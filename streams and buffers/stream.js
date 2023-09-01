const fs = require('fs');

const readStream = fs.createReadStream('./blog1.txt', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('./blog3.txt');

readStream.on('data', (chunk ) => {
    console.log(' ---  NEW CHUNK  ----- ');
    console.log(chunk);
    writeStream.write('\n NEW  CHUNK \n');
    writeStream.write(chunk);

});  

//readStream.pipe(writeStream);