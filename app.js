const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs') 

app.set('view engine','ejs')

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res){
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})

app.get('/about', function(req, res){
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact', function(req, res){
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})

app.get('/post',(req,res)=>{ 
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})