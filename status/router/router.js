
//1 创建路由
var express = require("express");
var router = express.Router();
var fs = require("fs");


//2 使用路由
router.use('/public/',express.static('./public'))
router.get('/',function(req,res){
    fs.readFile('./api/status.json',function(err,data){
        if(err){
            return err;
        }
        var students=JSON.parse(data).students
        res.render('index.html',{
           students
        })
        console.log(students)
    })
})

router.get('/students/new',function(req,res){
   res.render('new.html')
})

router.post('/students/new',function(req,res){
    console.log(req.body)
})

router.get('/students/edit',function(req,res){
    res.send('get students/edit')
})

router.post('/students/edit',function(req,res){
    res.send('post students/edit')
})

router.get('/students/delete',function(req,res){
    res.send('get students/delete')
})

//3 导出路由
module.exports=router;

