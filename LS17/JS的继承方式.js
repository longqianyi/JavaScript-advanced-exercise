
//多个对象继承于一个原型时,存在原型共享
var superObj={
	x:1,
	y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.__proto__.x = 5;
//subObj_First.x = 5; //1
console.log(subObj_Second.x); //5
//subObj_First的原型为superObj

//构造函数实现的对象-对象的原型继承的原型共享问题
function Person(name){
	this.name=name;
};
Person.prototype.age=22;
Person.prototype.showName = function(){
	console.log(this.name);
};
function Student(id){
	this.id=id;
}
Student.prototype = new Person("mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.name,s1.age,s1.id); //mike 22 2017001
console.log(s2.name,s2.age,s2.id); //mike 22 2017002
s1.__proto__.name="jack";
console.log(s2.name); //jack
s1.__proto__.__proto__.age=99;
console.log(s2.age); //99

console.log(s1); //Student {id: 2017001}
console.log(s1.__proto__); //Person {name: "jack"}
console.log(s1.__proto__.__proto__); //{age: 99, showName: ƒ, constructor: ƒ}

//
//模拟类-类继承的形式一
//好好理解
function Person(name,age){
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(name,age,id){
	Person.call(this,name,age);
	//等价于 this.name=name; this.age=age; 这两句话
	this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//{showName: ƒ, constructor: ƒ}

//模拟类-类继承的形式二
function Person(name,age){
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(name,age,id){
	Person.call(this,name,age);
	//等价于 this.name=name; this.age=age; 这两句话
	this.id=id;
}
Student.prototype = Object.create(Person.prototype);
// console.log(Person.prototype);
// console.log(Student.prototype);
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
// ƒ Student(name,age,id){
// 	Person.call(this,name,age);
// 	this.id=id;
// }

//静态方法与原型方法的区别
//静态方法是构造函数对象(类)的方法
//原型方法是实例化对象(对象)的原型的方法
var BaseClass = function(){}
BaseClass.prototype.f2 = function(){
	console.log("This is a prototype method");
};
BaseClass.f1 = function(){
	console.log("This is a static method");
};
BaseClass.f1(); //This is a static method
var instancel = new BaseClass();
instancel.f2(); //This is a prototype method

//对象原型的constructor属性
function Foo(){}
var f = new Foo();
consloe.log(f.constructor.name); //Foo

function Constr(name){
	this.nmae=name;
}
var x = new Constr("jack");
var y = new x.constructor("mike");
console.log(y,y instanceof Constr);
//Constr{name:"mike"} true

//对象的公有属性、私有属性(回顾闭包)
//涉及到访问私有属性时，需将间接访问私有变量的函数定义在构造函数中
function A(id){
	this.publicId = id;
	var privateId = 456;
	this.getId = function(){
		console.log(this.publicId,privateId);
	};
}
var a = new A(123);
console.log(a.publicId);
a.getId();
//123
//123 456
