const http = require('http'); 

const server = http.createServer((req, res) => {
    console.log(req.url, req.method );
    // set header type 
    res.setHeader('Content-Type','text/plain' );

    res.write('<p> Hello Ninjas </p> ');
    res.write('<p> Hello Ninjas  </p> ');
    res.end();
});

server.listen(3000, 'localhost' , ()   => {
    console.log(' listening for  requests on port 3000 ');
});