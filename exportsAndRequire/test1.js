/*
* @Author: Marte
* @Date:   2018-08-28 13:28:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-28 13:55:32
*/

function hello(){
console.log("hello world");
}

function s(){
console.log("this is a ew");
}

function add(a, b){
return a+b;
}

// exports.add=add;
// exports.s=s;
module.exports.add=s;