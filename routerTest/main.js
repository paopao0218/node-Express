
var express=require('express');
var app=express()

// 路由配置 和静态资源配置 
/**
 *  
 *  express静态资源路径
 * 一共有三种
 * 
 */

app.use(express.static('./public'))

app.get('/',function(req,res){
    res.send('世界您好')
})

app.listen(3000,function(){
    console.log('runings…………')
})