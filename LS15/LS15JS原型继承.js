

//通过字面量方式创建 JS对象
var obj={
	num:10,
	str:"Hi",
	show:function(){
		console.log(this.str);
	}
}
//通过Object工厂方法创建JS对象
//JS对象是通过原型链的方式实现的对象继承
var subObj=Object.create(obj);
subObj.age=23;
//23

function Person(age,name){
	this.age=age;
	this.name=name;
}
Person.prototype.sayHi=function(){
	console.log("Hi,I'm "+this.name);
}
var p1=new Person(20,"jame");
p1.sayHi();
//Hi,I'm jame

var empty = {};
var obj2=Object.create(empty,{
	x:{value:1},y:{value:2,enumerable:true}
});
console.log(obj2);


var proObj={
	z:3
};
var obj=Object.create(proObj);
obj.x=1;
obj.y=2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3

"z" in obj; //true
obj.hasOwnProperty("z"); //false

obj.z=5;
obj.hasOwnProperty('z'); //true
obj.z; //5
proObj.z; //still 3

obj.z=8;
obj.z; //8

delete obj.z; //true
obj.z; //still 3!

function Person(name,age){
	this.name=name;
	this.age=age;
}

Person.prototype.sayHi = function(){
	console.log(this.name,this.age);
}
var p = new Person("mike",20);
p.sayHi(); //mike 20


//构造函数有一个属性(原型prototype)
//该属性就是实例化出来的对象的原型
//是真实对象，实例化的对象通过它实现属性继承
function Person(){
}
Person.prototype.name="mike";
Person.prototype.age=21;
Person.prototype.sayName=function(){
	console.log(this.name);
};
// ƒ (){
// 	console.log(this.name);
// }

function Person(name){
	this.name=name;
	this.age=21;
}
Person.prototype.sayHi=function(){
	console.log(this.name);
};
var p1=new Person("mike");
p1.sayHi();
console.log(p1.__proto__ === Person.prototype); //true