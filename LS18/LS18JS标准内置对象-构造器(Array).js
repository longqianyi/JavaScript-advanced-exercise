
var arr2 = new Array("5");
console.log(arr2); //["5"]


var arr2 = new Array(5);
console.log(arr2); //(5) [empty × 5]



var i = 2,b = [];
b[i] = 3;
b[i+1] = "YY";
b[b[i]] = b[0];
console.log(b); //(4) [empty × 2, 3, undefined]

//数组是对象的特殊形式,可以为数组添加对象属性
//当使用使用2的32次方以内的非负整数作为属性名时（包括类型转换的数字），
//数组会自动维护其length属性，作为数组的元素，而不是数组对象的属性
var a = [];
a[-1.23] = true;
a["100"] = 0;
a[1.00] = "Hi";
console.log(a.length); //101
console.log(a); //(101) [empty, "Hi", empty × 98, 0, -1.23: true]

//稀疏数组
//某些元素为空
// 稀疏数组是包含从0开始的不连续索引的数组，
// length值大于实际定义的元素的个数
var a1 = [,"abc"];
console.log(a1.length); //2
for(var i in a1){
	console.log(i,a1[i]); //1 abc
}

var a2 = new Array(3);
console.log(a2.length); //3
var a3 = [,,];
console.log(a3.length); //2

var table = new Array(5);
for(var i = 0;i<table.length;i++){
	table[i] = new Array(5);
}

for(var row = 0;row<table.length;row++){
	for(var col = 0;col<table[row].length;col++){
		table[row][col] = row*col;
	}
}
var product = table[2][4]; //16



