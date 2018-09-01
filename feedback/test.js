/*
* @Author: Marte
* @Date:   2018-08-25 18:33:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 18:43:20
*/

var url= require('url');
var http=require('http');

 http.createServer(function(req,res){
    var aa=url.parse(req.url);
    console.log(aa)
    var pathname = url.parse(req.url)
    console.log(req.url)
    res.end('www')
 }).listen(9000,function(){
    console.log('服务器成')
 })