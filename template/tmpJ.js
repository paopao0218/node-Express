/*
* @Author: Marte
* @Date:   2018-08-21 19:38:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-21 21:23:36
*/

var template=require('art-template');
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){

    fs.readFile('nodeTmp.html',function(err,data){
        if(err){
            return console.log(err);
        }
        //读取到文件
        var data = data.toString();

        var text = template.render(data, {
            name:'张三'
        });

        res.end(text)

    })
}).listen(3000,function(){
    console.dir('template', template)
    console.log('服务启动成功')
})