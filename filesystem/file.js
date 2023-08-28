// reading to files 
const { error } = require('console');
const fs= require('fs');

fs.readFile('./text.txt','utf8', (err ,data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// write to files
fs.writeFile('./text.txt', 'Hello World ', ()  => 
{
    console.log("file was written");

} );

fs.writeFile('./text2.txt', "Hello Again ", ()  => 
{
    console.log("file was written");

} );

// directories 
fs.mkdir('./assets' ,(err) => {
    if(err){
        console.log(err);
    }
    console.log("Folder Created "); 
});