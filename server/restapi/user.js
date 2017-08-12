const express= require('express');

const router= express.Router();

const connection= require('../mysql.js');

router.route('/api/register').post((req,res)=>{
    const userip=req.body.ip;
    
    connection.query('insert set user into ?',[ip],(req,res)=>{
        if(err){
            console.log(ip+":"+err);
            res.sendStatus(400);
        }
        console.log('userinsert : '+ip);
        res.sendStatus(200);
    });
})

router.route('/api/login').post((req,res)=>{
    console.log('/api/login');
    const userip= req.body.ip;
    const w= req.body.w;
    const g= req.body.g;
    connection.query('select ip from user where ip= ? ',[userip],(err,result)=>{
        if(err){
            console.log(userip+":"+err);
            res.sendStatus(400);
        }
        if(result){
            console.log("login : "+userip);
            // connection.query('update user set w='+w+', g='+g+'select * from user where ip='+userip,(err,data)=>{
            //    if(err){
            //          console.log(userip+":"+err);
            //         res.sendStatus(400);
            //    }else{
            //        console.log('login : '+userip); 
            //         res.sendStatus(200);
            //    } 
            //    console.log('cannot update wg user : '+userip);
            //    res.sendStatus(401);
            // });
            res.sendStatus(400);
        }else{
            console.log('not insert user');
            res.sendStatus(401);
        }
    })
    
})

module.exports= router;
