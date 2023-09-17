// reading to files 
require('console');
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
if(!fs.existsSync('./assets')) {


fs.mkdir('./assets' ,(err) => {
    if(err){
        console.log(err);
    }
    console.log("Folder Created "); 
});
}

if(fs.existsSync('./assets')) {
  console.log("File already exists")
}
else {
    fs.rmdir('./assets',(err) => {
        if(err) {
            console.log(err);
        };
        console.log("Folder Deleted"); 
    } )
}

// deleting files 

if(fs.existsSync('./deleteme.txt' )){
    fs.unlink('./deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file was deleted ');
    } );

}
