const express= require('express'); 

var app = express();
//listen for request 

// register view engine 
app.set('view engine', 'ejs')
//app.set('views', )

app.listen(3000); 



app.get('/', (req, res) => {
   const blogs =[
    { title:'Yoshi finds eggs', snippet:'Lorem Ipsum   dolor sit amet, consectetur' },  
    {title:'Mario finds eggs, ' , snippet:'Lorem Ipsum  dolor sit amet, consectetur'}, 
    {title:'How to defeat bowser'  , snippet:'Lorem Ipsum  dolor sit amet, consectetur'}, 
    {title:'How to find more eggs, ', snippet:' Lorem Ipsum  dolor sit amet, consectetur'}
   ]; 
    res.render('index', {title:'Home', blogs});

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