const http = require('http'); 
const fs = require('fs');
var  _ = require('lodash');

const server = http.createServer((req, res) => {
    const num = _.random(0, 20);
    console.log(num);
    
    const greet = _. once( () => {
        console.log('hello'); 
    }) 

    greet();

    // set header type 
    res.setHeader('Content-Type','text/html' );
    
    let path='./views/';
        switch(req.url){
            case'/': 
                path +='index.html';
                res.statusCode=200; 
                break;  
            case'/about':
                path+='about.html';
                res.statusCode=200; 
                break; 
            case'about-me':
                res.statusCode=301;
                res.setHeader('Location',  '/about');    
                res.end();  
            default: 
                path+= '404.html';
                res.statusCode=400; 
                break; 
        }
    // send a html file 
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err); 
            res.end();
        }
        else{
            res.statusCode =200; 
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost' , ()   => {
    console.log(' listening for  requests on port 3000 ');
});