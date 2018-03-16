
//
//

//+=是
//
//
//==与===
// == 类型不同则转换再比较
// === 若类型不同则false
// 
var obj1 = {x:2, y:[1], z:false};
var obj2 = {x:2, y:[1], z:new Boolean(true)};
console.log(obj1.x === obj2.x); // true
console.log(obj1.y === obj2.y); // false 不同
console.log(obj1.z === obj2.z); // false
console.log(obj1.x == obj2.x); // true
console.log(obj1.y == obj2.y); // false
console.log(obj1.z == obj2.z); // false


//
//
//1。两边都是布尔类型
// && 两边真为真
// || 两边假为假

console.log(2 > 1 && 4 < 5); //true
console.log(true && (!2)); //false
console.log(false && ("2" == 2)); //false
console.log(false && false); //false

console.log(2 > 1 || 4 < 5); //true
console.log(true || (!2)); //true
console.log(false || ("2" == 2)); //true
console.log(false || false); //false

//
//
//
//2。短路原则
// && 转换为布尔后，左true，返回原右;若左false，返回原左
// || 转换为布尔后，左true，返回原左；若左false，返回原右
//
//
//
var a = (new Boolean(false))&&23;
console.log(a,typeof a);
//23 "number"

var a = (new Boolean(false))||23;
console.log(a,typeof a);
//Boolean {false} "object"

console.log(2&&4); //4
console.log(0&&4); //0
console.log({x:2}&&{name:"Jame"}); //{name:"Jame"}
console.log(null&&"hello"); //null
console.log({}&&"world"); //

console.log(2||4); //
console.log(0||4); //
console.log({x:2}||{name:"Jame"}); //
console.log(null||"hello"); //
console.log({}||"world"); //

var sum = function(a,b,c){
	b = b || 4;
	c = c || 5;
	return a+b+c;
}
console.log(sum(1,2,3)); //6 1+2+3
console.log(sum(1,2)); //8
console.log(sum(1)); //10
console.log(sum(1,0,0)); //10



