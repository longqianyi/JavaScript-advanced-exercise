//
//函数定义 函数声明方式
//
function max(a,b){
	return a>b?a:b;
}
max(2,3);

//函数定义 函数表达式方式
//
var max = function(a,b){
	return a>b?a:b;
}
max(2,3);

//函数定义 Function构造函数方式
//
var max = new Function("a","b","return a>b?a:b");
max(2,3);

//
function test1(){
	console.log("this is",this);
}
test1(); //window

function test2(){
	function test3(){
		console.log("this is",this);
	}
	test3();
}
test2(); //window


var x = 45;
var test = function(){
console.log("输出",this.x);
}
var obj = {
x:23
};
obj.test = test;
obj.test();
test();
// 输出 23
// 输出 45
 
var x = 45;
var obj = {
x:23,
test:function(){
function foo(){
console.log(this.x);
}
foo();
}
};
obj.test();
//45


//call(objB，)   
//apply(objB,[x,y]) 以数组形式传递
//移花接木
//两个之间有一定的相似处
//objB调用objA的方法

objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
	console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//objB


var fish = {
	name:"fish",
	swim:function(m,n){
		console.log(" i'm " + this.name + " i can swim___",m,n);
	}
};

var bird = {
	name:"polly",
	fly:function(m,n){
		console.log(" i'm " + this.name + " i can fly___",m,n);
	}
};

var me = {
	name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//  i'm polly i can fly___ 5 6
//  i'm ABC i can swim___ 3 4
//  i'm ABC i can fly___ 7 8


//类数组对象  类对象数组
var arr = [1,2,3,4,5];
arr instanceof Array; //true
arr.x = 6;
arr instanceof Array; //true
arr; //[1,2,3,4,5,x:6]

//arguments
function test(){
	console.log(arguments);

	console.log();
	console.log();	
	console.log();
	console.log();
	console.log();


	console.log(teat.arguments == arguments,arguments);
	console.log(Array.prototype.slice.call(arguments));

}


//
//实参数小于形参数
//
var sum = function(a,b,c){
	b = b||4;
	c = c||5;
	return a+b+c;
};
console.log(sum(1,2,3)); //6
console.log(sum(1,2));  //8
console.log(sum(1));   //10


//
//值传递
//
var a = 1;
function foo(x){
	console.log("a:",a,"x:",x);
	x = 2;
	console.log("a:",a,"x:",x);
}
console.log("a:",a);
foo(a);
console.log("a:",a);
// a: 1
// a: 1 x: 1
// a: 1 x: 2
// a: 1

//
//引用传递
//
var obj = {x:1};
function fee(o){
	console.log("obj.x:",obj.x,"o.x:",o.x);
	o.x = 3;
	console.log("obj.x:",obj.x,"o.x:",o.x);
}
console.log("obj.x:",obj.x);
fee(obj);
console.log("obj.x:",obj.x);

document.onclick = function(){
	alert("click");
// obj.x: 1
// obj.x: 1 o.x: 1
// obj.x: 3 o.x: 3
// obj.x: 3
// ƒ (){
// 	alert("click");
// }

