
//
//JS对象时一种复合值：
//将很多值复合在一起（包括原始类型值、对象、函数）
//JS对象是若干无序属性的集合，可以直接通过属性名来访问对象的属性（键值对）
//函数作为某一个对象的属性时，称其为该对象的方法

var me={
	age:100,
	name:"unknown",
	show:function(){
		console.log("我是"+this.name+"今年"+this.age+"岁了")
	}
}
me.show(); //我是unknown今年100岁了
 
 //
 //标准内置对象
 //构造器函数对象（类对象）
 //非构造器对象


console.log(typeof Array); //function
console.log(typeof Date); //function
console.log(typeof Function); //function
console.log(typeof Math); //object
console.log(typeof JSON); //object
//都是构造函数 都是对象
var i = new String("str");
var h = new Number(1);
var g = new Boolean(true);
var j = new Object({name:"Tom"});
var k = new Array([1,2,3,4]);
var l = new Date();
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

//构造函数是函数 也是对象
String instanceof Object; //true
String instanceof Function; //true

//实例化出来一个函数
console.log(new Function() instanceof Function); //true
//实例化出来一个对象
console.log( (new( new Function() )) instanceof Function); //false
console.log( (new( new Function() )) instanceof Object); //true


// typeof
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof Date); //function
console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Math); //object
console.log(typeof JSON); //object

//instanceof
console.log(Object instanceof Function); //true
console.log(Object instanceof Object); //true
console.log(Boolean instanceof Function); //true
console.log(Boolean instanceof Object); //true
console.log(String instanceof Function); //true
console.log(String instanceof Object); //true
console.log(Number instanceof Function); //true
console.log(Number instanceof Object); //true
console.log(Function instanceof Function); //true
console.log(Function instanceof Object); //true
console.log(Array instanceof Function); //true
console.log(Array instanceof Object); //true
console.log(Date instanceof Function); //true
console.log(Date instanceof Object); //true
console.log(Math instanceof Function); //false
console.log(Math instanceof Object); //true
console.log(JSON instanceof Function); //false
console.log(JSON instanceof Object); //true

//访问器属性
var o = {
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x = val;
	}
};
console.log(o.x); //1
o.x = 2;
console.log(o.x,o._x); //2 2

var p1 = {
	_name:"jack",
	_age:23,
	set age(val){
		if(val>0 && val<150){
			this._age = val;
		}else{
			console.log("请设置正常年龄");
		}
	},
	get age(){
		return this._age;
	}
};
p1.age = 178;
console.log(p1.age);
//请设置正常年龄
//23

var obj = {
	num:10,
	str:"Hi",
	show:function(){
		console.log(this.str);
	}
}
var subObj = Object.create(obj);
subObj.age=23;

function Person(age,name){
	this.age = age;
	this.name = name;
}
Person.prototype.sayHi = function(){
	console.log("Hi,I'm "+this.name);
}
var p1 = new Person(20,"jame");
p.sayHi();

//对象属性的增删改查
var obj = {};
obj.x = 2; //直接添加属性
console.log(obj.x); //通过.访问属性
obj.x = 5; //设置属性
console.log(obj["x"]); //通过[]访问属性
delete obj.x; //删除属性
console.log(obj.x);


var obj3 = {};
for(var i = 0;i<10;i++){
	obj3.i =i;
}
var obj4 = {};
for(var i = 0;i < 10;i++){
	obj4[i] = i;
}
console.log(obj3);
console.log(obj4);
// {i: 9}
// {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}




