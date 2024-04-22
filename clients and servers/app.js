const express= require('express'); 
const morgan= require('morgan');
const mongoose= require('mongoose');
const blog=  require('./models ');

var app = express();
const dbURI= 'mongodb+srv://netninja:!test1234@nodetuts.itn9mzv.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts'; 
mongoose.connect(dbURI, {useNewUrlParser:true})
.then((result) => console.log('Connected to the Database') )
.catch((err) => console.log(err)); 

// register view engine 
app.set('view engine', 'ejs')




// middleware and static files 
app.use(express.static('public')); 
app.use(morgan('dev'));

// mongoose and mongo sandbox routes 

app.get('/add-blog', (  req, res ) => {
    const blog= new Blog( ); 
}  ); 

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