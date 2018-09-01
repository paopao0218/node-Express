
var express=require('express');
var app=express();
var fs=require('fs')

app.engine('html', require('express-art-template'));



app.use('/public/',express.static('./public'))
app.get('/',function(req,res){
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

app.listen(3000,function(){
    console.log('server is runings …………')
})