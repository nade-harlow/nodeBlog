var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about', function(req, res){
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/contact', function(req, res){
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.get('/post',(req,res)=>{ res.sendFile(path.resolve(__dirname,'pages/post.html'))
})