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
    res.render('index' ,{title: 'Home' } );

});

app.get('/about',(req, res) => {
    res.render('about', {title: 'Home' });
});

app.get('/blogs/create', (req, res) => {

res.render('create',  {title: 'Create  a new blog ' } );
});

// error 404 

app.use((req, res) => {
    res.render('404',   {title: 'error 404 ' } ); 
});