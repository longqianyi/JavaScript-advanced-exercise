//this
//是动态绑定,或称为运行期绑定
//它可以是全局对象、当前对象或者任意对象,
//这完全取决于函数的调用方式
//this不进行作用域传递
var a = 1;
function f1(){
	var b = 2;
	function f2(){
		console.log(a,b);
	}
	f2();
}
f1();
//1 2

//this指向的都是调用此函数的主体
//1.一般函数中的this
//

//非严格模式下this指代全局对象
function thisTest(){
	console.log(this===window);
}
thisTest(); //true

//this在函数内添加删除修改全局对象属性
//
var a = 10,b = "hi";
function thisTest(){
	this.a=20;
	delete this.b;
	this.c="新添加的全局变量";
}
thisTest();
console.log(a,c); //20 "新添加的全局变量"

//严格模式下为undefined
//
function thisTest(){
	'use strict'
	console.log(this);
}
thisTest(); //undefined

//判断是否为严格模式
//
function isStrictMode(){
	return this === undefined?true:false;
}
isStrictMode(); //false

//2.对象方法中的this
//
//函数作为对象的一个属性时,称之为对象的方法
//此this指代调用此方法的对象
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x = x;
		this.y = y;
	}
};
point.moveTo(1,1); //this绑定到当前对象,即point对象
console.log(point); //{x: 1, y: 1, moveTo: ƒ}

//3.构造函数中的this
//此this指代通过new新创建的对象
//
function Point(x,y){
	this.x=x;
	this.y=y;
}
var p = new Point(2,3); //this通过new创建对象p,this指向p
p;
//Point {x: 2, y: 3}
p.x; //2
p.y; //3
var p2=new Point(5,6);
p2;
//Point {x: 5, y: 6}

//this总是指向新创建的this
//
var Person=function(name,age){
	this.name=name;
	this.age=age;
	this.showMe=function(){
		console.log(this.name,this.age);
	}
}
var p1=new Person("MIKE",23);
var p2=new Person("LUCY",21);
p1.showMe(); //MIKE 23
p2.showMe(); //LUCY 21

// //私有属性 闭包
// var Person=function(name,age){
// 	var privateName=name;
// 	var privateAge=age;
// 	this.showMe=function(){
// 		console.log(this.name,this.age);
// 	}
// }
// var p1=new Person("MIKE",23);
// p1.showMe(); //MIKE 23

//4.间接调用中的this
//
//通过call/apply间接调用的函数中的this(指代第一个参数)
//通过call/apply进行间接调用,动态的指定由谁来调用此函数
objA = {name:"AA",X:1};
objB = {name:"BB",x:5};
function test(){
	console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();
//objB调用objA.fun
//test中this是objB的
objA.fun.call(objB);

//this不进行作用域传递、函数嵌套中的this存在缺陷
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(x){
			this.x=x;
		};
		function moveToY(y){
			this.y=y;
		};
		moveToX(x);
		moveToY(y);
	}
};

function Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY=function(x,y){
		function moveX(x){
			this.x+=x;
		}
		function moveY(y){
			this.y+=y;
		}
		moveX(x);
		moveY(y);
	};
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);
//Point {x: 2, y: 3, moveXY: ƒ}

//如何解决对象方法中嵌套函数的this指向问题
//方法一：使用变量（that或self）软绑定，使this指向正确
//moveTo方法中嵌套的函数中的that此时指向的是point对象
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		var that=this;
		function moveToX(){
			that.x=x;
		};
		function moveToY(){
			that.y=y;
		};
		moveToX(x);
		moveToY(y);
	}
};
point.moveTo(2,2);
console.log(point);
console.log(x,y); //报错
//{x: 2, y: 2, moveTo: ƒ}


//方法二：使用call/apply间接调用，使this指向正确
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(){
			this.x=x;
		}
		function moveToY(){
			this.y=y;
		}
		moveToX.call(this);
		moveToY();
	}
};
point.moveTo(2,2);
console.log(point);
console.log(y); //打印x会报错
// {x: 2, y: 0, moveTo: ƒ}
// 2

//方法三：使用Function.prototype.bind，使this指向正确
var point = {
	x:0,
	y:0,
	//this绑定到哪里？
	moveTo:function(x,y){
		function moveToX(){
			this.x=x;
		}
		function moveToY(){
			this.y=y;
		}
		moveToX.call(this);
		moveToY();
	}
};
point.moveTo(2,2);
console.log(point);
// {x: 2, y: 0, moveTo: ƒ}

//构造函数中的this同样存在函数嵌套缺陷,解决办法
var Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY = function(x,y){
		function moveX(x){
			this.x+=x;
		}
		function moveY(y){
			this.y+=y;
		}
		moveX(x);
		moveY(y);
	};
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p); //Point{x:2,y:3}

function Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY = function(x,y){
		var that=this;
		function moveX(x){
			that.x+=x;
		}
		function moveY(y){
			that.y+=y;
		}
		moveX(x);
		moveY(y);
	};
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p); //Poiny{x:3,y:4}