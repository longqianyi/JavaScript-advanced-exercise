

//
//预解析
//

console.log(a);
var a = 2; //undefined
console.log(a); //2
//即
//var a;
//console.log(a);
//a = 2;
//console.log(a);
//

//值类型
console.log(a,b); //undefined undefined
var b = 23;
console.log(a,b); //undefined 23
var a = b;
console.log(a,b); //23 23

//引用类型
console.log(obj1,obj2); //undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2); //{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2); //{x:23} {x:23}
obj2.x = 25;
console.log(obj1,obj2); //{x:23} {x:23}




foo();
var foo = function(){
	console.log("foo");
}
//Uncaught ReferenceError: foo is not defined
  //  at <anonymous>:1:1

AA();
function AA(){
	console.log("AA_1");
}
var AA = function AA(){
	console.log("AA_2");
}
AA();
//AA_1
//AA_2

//等价于
// function AA(){
// 	console.log("AA_1");
// }
// var AA;

// AA();
// AA = function AA(){
// 	console.log("AA_2");
// }
// AA();

var name = "Jack";
function echo(){
	console.log(name);
}
function foo(){
	var name = "Bill";
	echo();
}
foo();
//Jack






if(true){
	var i = 0;
}

function foo(){
	console.log("j:",j); //undefined
	var j = 10;
	console.log("j:",j); //10
}
foo();

console.log("i:",i); //0
console.log("j:",j); //报错Uncaught ReferenceError: j is not defined

//等价于
var i;
if(true){
	i = 0;
}
function foo(){
	var j;
	console.log("j:",j); //undefined
	j = 10;
	console.log("j:",j); //10
}
foo();

console.log("i:",i); //0
console.log("j:",j); //报错


