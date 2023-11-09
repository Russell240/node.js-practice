const express= require('express'); 

const app = express();
//listen for request 

// register view engine 
app.set('view engine', 'ejs')
app.set('views', )

app.listen(3000); 

app.get('/about');

app.get('/', (req, res) => {
   // res.send('<p> home page </p>  ')
    res.render('index');

});

app.get('/about',(req, res) => {
    res.render('about');
});

// error 404 

app.use((req, res) => {
    res.render('404')
});