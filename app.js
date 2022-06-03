const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs') 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/node', {useNewUrlParser: true});

//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({ 
    title: String,
    body: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema); 
module.exports = BlogPost
// BlogPost.create({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight todispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics...'
//     }, (error, blogpost) =>{
//     console.log(error, blogpost) })
    


app.set('view engine','ejs')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/', async(req,res)=>{
    const blogposts = await BlogPost.find()
    console.log(blogposts)
    res.render('index',{blogposts})
})

app.get('/about', function(req, res){
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact', function(req, res){
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})

app.get('/post/:id', async(req,res)=>{ 
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {blogpost})
})

app.get('/post/new', (req,res)=>{ 
   res.render('create')
 })

app.post('/post/store', async(req,res)=>{
   await BlogPost.create(req.body)
    res.redirect('/')
})
