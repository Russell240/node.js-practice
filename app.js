
var http = require('http');
const { myDateTime } = require('./myfirstmodule');
// create a serve object 
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(myDateTime);
   res.end('Hello World!');
 })



var message = "Hello World";
console.log(message);

let num= 15;
let text= num.toString
console.log(num)
console.log(text);