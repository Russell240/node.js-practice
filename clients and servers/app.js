const express= require('express'); 
const morgan= require('morgan');
const mongoose= require('mongoose');
const Blog=  require('./models/blog');

// connection to database  
var app = express();  
const dbURI= 'mongodb+srv://netninja:!test1234@nodetuts.itn9mzv.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts'; 
mongoose.connect(dbURI)
.then((result) => console.log('Connected to the Database'), app.listen(3000))
.catch((err) => console.log(err));  

// register view engine 
app.set('view engine', 'ejs')


// middleware and static files 
app.use(express.static('public')); 
app.use(morgan('dev'));

// mongoose and mongo sandbox routes 

app.get('/add-blog', ( req, res) => {
    const blog= new Blog({
        title:'new blog2 ', 
        snippet: 'about my new blog2 ', 
        body:'more about my new blog2 ' 
    })

    blog.save()
        .then(result => {
           res.send(result);        
        })
        .catch(err => {
            console.log(err);
          });
}); 

app.get('/all-blogs',  (req, res) => {
    Blog.find()
     .then(result =>  {
        res.send(result)
     })
     .catch(err => {
        console.log(err);
     });
});

app.get('/single-blog', (req, res )=> {
    Blog.findById('665489f1ec6a7469218f1e8b')
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);  
        })
} )

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

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index',{ title : 'All Blogs ', blogs:result} )
        })
        .catch((err) => {
            console.log(err);  
        })
});

app.get('/blogs/create', (req, res) => {

res.render('create',  {title: 'Create  a new blog ' } );
});

// error 404 

app.use((req, res) => {
    res.render('404',   {title: 'error 404 ' } ); 
});