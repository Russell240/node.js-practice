const express= require('express'); 

const app = express();
//listen for request 
app.listen(3000); 

app.get('/about');

app.get('/', (req, res) => {
    res.send('<p> home page </p>  ')
});