

/**
 *  不关心任何的业务逻辑
 * 
 *  只做简单的文件处理
 * 
 */

 var fs=require('fs')
 //查询所有的学生
exports.all=function(callback){

    //异步操作
    fs.readFile('./api/status.json','utf8',function(err,data){
        if(err){
            return callback(err);
        }
        callback(null,JSON.parse(data).students)
    })

};
