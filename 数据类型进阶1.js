//包装对象
var a = 123;
var b = new Number(a);
console.log(a == b); //true
console.log(a === b); //flase

//临时包装对象
var str = "abcde";
console.log(str.length); //5
str.length = 1;
console.log(str.length,str); //5 abcde

var arr = [1,2,3,4];
console.log(arr.length); //4
arr.length = 1;
console.log(arr.length,arr); //1 [1]

//类型转换
console.log(Boolean(undefined)); //flase
console.log(Boolean(null)); //flase
console.log(Boolean(0)); //flase
console.log(Boolean(NaN)); //flase
console.log(Boolean(1)); //true
console.log(Boolean("")); //flase
console.log(Boolean("abc")); //true
console.log(Boolean({})); //true

if(new Boolean(flase)){
	console.log("执行"); //执行
}

console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("")); //0
console.log(Number("abc")); //NaN
console.log(Number("123.345xx")); //NaN
console.log(Number("32343,345xx")); //NaN
console.log(Number({ x: 1, y: 2 })); //NaN

console.log(parseFloat("123.345xx")); //123.345
console.log(parseFloat("32343,345xx")); ////32343
console.log(parseInt("123.345xx")); //123
console.log(parseInt("32343,345xx")); //32343

//
console.log(String(undefined)); //undefined
console.log(String(null)); //null
console.log(String(true)); //true
console.log(String(false)); //flase
console.log(String(0)); //0
console.log(String(234)); //234
console.log(String({ x: 1, y: 2 })); //[object Object]

//提取字符串
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var str6 = "abcdef".split("c");
var str7 = "abcdef".split("c",1);
var str8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);
console.log(str13,str14); //abcdefghijklmn cdefg

var str15 = str13.substring(2,5);
console.log(str13,str15); //abcdefghijklmn cde

Boolean({}); //true
Boolean([]); //true
Boolean(new Booleam(flase)); //true
Boolean(function foo(){}); //true


function Fun(){
	a = 123;
}
Fun();
console.log(a);

//严格模式下报错
function fun(){
	//"use strict"
	a = 123;
}
fun();
console.log(a);

//检测是否在严格模式的方法
//this(严格模式)为undefined
"use strict"
function isStrictMode(){
	return this === window?flase:true;
}
console.log(isStrictMode()); //true


delete foo; //true
delete window.foo; //true
"use strict";
delete foo; //严格模式下报错
delete window foo; //严格模式下报错

//严格模式下禁止函数参数重名
function f(a,a,b){
	return a+b;
}
f(2,3,4); //7

"use strict"
function f(a,a,b){
	return a+b;
}
f(2,3,4); //严格模式下报错

//switch语句在比较值时使用的是全等操作符
//因此不会发生类型转换
var i = "1";
switch(i){
	case 1:
		console.log("case 1 Number");
		break;
	default:
		console.log("default");
}   //default

var i = "1";
switch(i){
	case 1:
		console.log("case 1 Number");
		break;
	case "1":
		console.log("case 1 String");
		break;
	default:
		console.log("default");
}

// var j = new Number(23);
// switch(j){
// 	case 23:
// 		console.log("case_111");
// 		break;
// 	case "23":
// 		console.log("case_222");
// 		break;
// 	case new Number(23):
// 		console.log("case_333");
// 		break;
// 	default:
// 		console.log("case_default");
// }  //default

var i = 65;
switch(true){
	case i>=60:
		console.log("及格");
		break;
	case i<60:
		console.log("不及格");
		break;
	default:
		console.log("default");
}  //及格

var i = 65;
switch(new Boolean(true)){
	case i>=60:
		console.log("及格");
		break;
	case i<60:
		console.log("不及格");
		break;
	default:
		console.log("default");
}  //default

//for ... in 遍历数组
var arr = [2,,"33"];
for(var i in arr){
	console.log(i,arr[i]);
}  //0 2
   //2 33

var obj = {x:10,y:20,z:"30"};
for(var k in obj){
	console.log(k,obj[k],typeof obj[k]);
}
//x 10 number
//y 20 number
//z 30 string

var obj1 = {x:1};
var obj2 =Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var k in obj2){
	console.log(k,obj2[k]);
}

