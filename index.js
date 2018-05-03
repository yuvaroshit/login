var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors=require('cors');
var path=require('path');
var router=express.Router();

var app=express();

const route=require('./routes/route');

mongoose.connect('mongodb://localhost:27017/login');

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb@27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in database connection:'+err);
    }
});

const port=3000;

app.use(cors());

app.use(bodyparser.json());



app.use('/api',route);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/page.html'));
});


app.listen(port,()=>{
    console.log('Server started at port:'+port);
});

