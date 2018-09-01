var express=require('express');
var bodyParser = require('body-parser')
var app=express();


var tpmA=[
    {
        name:'张三',
        massage:'今天是个好天气',
    }
]
app.engine('html', require('express-art-template'));

//开放公共文件
app.use('/public/',express.static('./public'))

 //访问首页
app.get('/',function(req,res){
    res.render('index.html',{
        tpmA,
    })
})

//访问留言页面
app.get('/post',function(req,res){
    res.render('post.html')
})

//添加评论页面
// app.get('/pinglun',function(req,res){
//     var pathQuery=req.query;
//     tpmA.unshift(pathQuery);
//     res.redirect('/')
// })

//评论页面使用post请求
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/pinglun',function(req,res){
    var resDate=req.body;
    tpmA.unshift(resDate);
    res.redirect('/')
})

//页面失联
app.get('*',function(req,res){
    res.render('404.html')
})

app.listen(3000,function(){
    console.log('服务启动成功')
})