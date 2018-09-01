/*
* @Author: Marte
* @Date:   2018-08-15 20:20:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-21 16:48:39
*/

//目的：让服务器页面动态生成


var http=require('http');
var fs=require('fs');

 http.createServer(function(req,res){
    //从服务器上读取页面
    fs.readFile('../replace/template.html',function(err,data){
        if(err){
           console.log(err)
           return false;
        }
        fs.readdir('C:/www',function(err,fils){
            if(err){
                console.log(err)
                return false;
            }
            var tp='';
            fils.forEach(function(item){
                console.log(item)
               tp+=`<tr>
                  <td data-value="app/">
                  <a class="icon dir" href="/C:/www/app/">${item}</a>
                  </td>
                  <td class="detailsColumn" data-value="0"></td>
                  <td class="detailsColumn" data-value="1534771596">2018/8/20 下午9:26:36</td>
                </tr>`
            })
            data=data.toString();
            data=data.replace('^_^',tp)
            res.end(data)
            console.log(tp)
        })

    })
 }).listen(3000,function(){
    console.log('服务器启动成功')
 });