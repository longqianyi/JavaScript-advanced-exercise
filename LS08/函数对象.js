
//
//LS08 2018.03.26
//

var a = new Array(5);
console.log(a); //(5) [empty * 5] length:5

var a = new Array("5");
console.log(a); //["5"] 0:"5" length:1


//
//函数对象
//每个函数都是作为对象来维护和运行的
//既有属性也有方法
//对应的类型为Function
//若是函数（函数对象），typeof此对象，返回function
//内置函数对象（Array、Function、Date等）
//内置的非函数对象（Math、JSON）
//


function foo(){}
console.log(foo); //f foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true

console.log(typeof new Function()); //function
console.log(typeof new new Function()); //object
console.log(typeof new Array()); //object
console.log(typeof new Date()); //object


console.log(Function instanceof Function); //true
console.log(Function instanceof Object); //true
console.log(Array instanceof Function); //true
console.log(Array instanceof Object); //true
console.log(Date instanceof Function); //true
console.log(Date instanceof Object); //true
console.log();
console.log(Math instanceof Function); //false
console.log(Math instanceof Object); //true
console.log(JSON instanceof Function); //false
console.log(JSON instanceof Object); //true

//形参数量 实参数量
var foo = function(a,b,c){
	console.log(foo.length); //3
	console.log(arguments.length); //0
}
foo();


// //
// //caller
// //
// function test(){
// 	if(test.caller == null){
// 		console.log("tets is called from toppest level");
// 	}else{
// 		console.log("test is called from the function:");
// 		console.log(test.caller.toString());
// 	}
// }

// Object.__proto__ == Function;
function Man(name,age){
	this.name = name;
	this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function(){
	console.log("Hi,i'm ",this.name); //Hi,i'm Leo
};
var li = new Man("Leo",10);
li.sayHi();
console.log(li.sex); //M

Man.prototype.isStrong = true;
console.log(li.isStrong); //true

var x = 45;
var obj = {
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		//foo.bind(this)(); //函数绑定方法 返回函数对象
		var fee = foo.bind(this);
		//foo(); //全局 45
	}
};
obj.test();
// 23 45


//
//高阶函数
//
var obj = {x:23};
var fun1 = function(){
	return function fun2(){
		return this.x;
	}
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());
console.log(obj.fun3()());
console.log(obj.fun4());
//ƒ fun2(){
//		return this.x;
//	}
//undefined
//23
//












