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
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });


app.get('/', (req, res) => {
   
    res.redirect('/blogs');

});

app.get('/about',(req, res) => {
    res.render('about', {title: 'Home' });
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt:-1})
        .then((result) => {
            res.render('index',{ title : 'All Blogs ', blogs:result} )
        })
        .catch((err) => {
            console.log(err);  
        })
});

app.post('/blogs', (req, res ) => {
   const blog = new Blog(req.body);  

   blog.save()
            .then((result)  => {
                res.redirect('/blogs');
    })
    .catch((err) =>  {
        console.log(err); 
    }); 

});  


app.get('/blogs/:id ', (req, res) =>  {
        const id = req.params.id;
        console.log(id); 
        Blog.findById(id)
            .then(result => {
                res.render('details', { blog: result, title: 'Blog details ',  }); 
            })
            .catch(err  => {
                console.log(err); 
            });
    });


app.get('/blogs/create', (req, res) => {

res.render('create',  {title: 'Create  a new blog ' } );
});

// error 404 

app.use((req, res) => {
    res.render('404',   {title: 'error 404 ' } ); 
});