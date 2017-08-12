const express= require('express');

const router= express.Router();

const connection= require('../mysql.js');

var multer= require('multer');
var _storage= multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, 'upload/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
var upload= multer({ storage: _storage});

router.route('/api/makestar').post(upload.single('userfile'),(req,res)=>{
    console.log(req.file);
    const userip= req.body.ip;
    const paramw= req.body.w;
    const paramg= req.body.g;
    const paramtitle= req.body.title;
    const paramtext=req.body.text;
    var paramfile= req.file.originalname;
    var inputbox={
        ip:userip,
        w:paramw,
        g:paramg,
        title:paramtitle,
        file:'/uploads/'+paramfile,
        text:paramtext
    };
    connection.query('insert set starlist into ?',inputbox,(err,data)=>{
        if(err){
            console.log(ip+":"+err);
            res.sendStatus(400);
        }
        console.log('insert');
        res.sendStatus(200);
    });
})

module.exports= router;
