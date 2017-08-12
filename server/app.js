const express= require('express');

const app= express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json({limit : '50mb'}));
const makestar= require('./restapi/makestar.js');
const showstar= require('./restapi/showstar.js');
const user= require('./restapi/user.js');


const connection= require('./mysql.js');

app.use('',makestar);
app.use('',showstar);
app.use('',user);

app.get('/test',(req,res)=>{
    res.send('Hello, world');
})

const server= app.listen(3000, function(req, res){
  console.log("server running at 3000port");
})
