var http=require('http');
var fs=require('fs');
var url=require('url');
var template=require('art-template');

    var tpmA=[
        {
            name:'aa',
            massage:'asasas',
            time:'2018-0905',
        }
    ]
http.createServer(function(req,res){

    //获取路径
    var urlAll=url.parse(req.url,true);
    var pathname=urlAll.pathname;


    if(pathname==='/'){
        //渲染首页
        fs.readFile('./views/index.html',function(err,data){
            if(err){
                return console.log(err)
            }
            var html=template.render(data.toString(),{
                tpmA
            })
            res.end(html)
        })
    }else if(pathname==='/pinglun'){
        var queryList=urlAll.query;
            queryList.time='2018-09-40'
        tpmA.unshift(queryList);
        //重定向到首页
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }else if(pathname.indexOf('/public/')!==-1){
        //公众的资源文件
        fs.readFile('./'+pathname,function(err,data){
            if(err){
                return console.log(err)
            }
            res.end(data)
        })
    }else if(pathname==='/post'){
         fs.readFile('./views/post.html',function(err,data){
            if(err){
                return console.log(err)
            }
            res.end(data)
        })
    }else{
        //读取失败
        fs.readFile('./views/404.html',function(err,data){
            if(err){
                return console.log(err)
            }
            res.end(data)
        })
    }

}).listen(3000,function(){
  console.log('server success')
})
