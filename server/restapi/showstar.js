const express= require('express');

const router= express.Router();

const connection= require('../mysql.js');

const fs= require('fs');
// var _storage= multer.diskStorage({
//     destination: function(req,file, cb){
//         cb(null, 'upload/')
//     },
//     filename: function(req,file,cb){
//         cb(null, file.originalname);
//     }
// })
// var upload= multer({storage: _storage});
// const type= upload.single('userfile');
// router.route('/test').post(upload.single('userfile'),(req,res)=>{
//     console.log(req.file);
// });
router.route('/api/showstar').get((req,res)=>{
    const userip= req.params.ip;
    const xo= req.params.w;
    const yo= req.params.g;
    var xt;
    var yt;
    var len;
    const stararray={

    };
    connection.query('select ip from user where ip = ?',[userip],(err,data)=>{
        if(err){
            console.log(userip+":"+err);
            res.sendStatus(400);
            return;
        }
        if(data){
            connection.query('select * from starlist',(err,result)=>{
                if(err){
                     console.log(userip+":"+err);
                     res.sendStatus(400);
                     return;
                }
                console.log(result);
                for(const i=0;i<result.length;i++){
                    xt=result[i].w;
                    yt=result[i].g;
                    len=Math.sqrt(Math.pow(((xt-xo)*110), 2)+Math.pow(((yt-yo)*88.74), 2));  
                    if(len<=10){
                        fs.readFile(result[i].file,(err,data)=>{
                            if(err){
                                console.log(userip+":"+err);
                                 res.sendStatus(400);
                                 return;
                            }
                            
                            stararray.push(result[i]);
                            result[i].push({"file":"data"});
                         });
                    }
                   
                    if(i==10){
                        res.json(stararray);
                        res.sendStatus(200);
                    }
                } 
            });
        }else{
            console.log('none ip');
            res.sendStatus(401);
        }

    })
})

router.route('/api/showpost').get((req,res)=>{
   const postid=req.param.uid;
   connection.query('select light from starlist where uid= ?',[postid],(err,data)=>{
       if(err){
           console.log(err);
           res.sendStatus(400);
           return;
       }
       data=data+1;
       connection.query('update starlist set light= ?',[data],(err,result)=>{
            if(err){
                 console.log(err);
                 res.sendStatus(400);
            }
            console.log(postid+": up 1");
            res.sendStatus(200);
       })
   }) 
})

module.exports= router;
