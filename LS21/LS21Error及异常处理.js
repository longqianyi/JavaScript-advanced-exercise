
try{
	var a = new Array(-5);
console.log("xx");
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}
// RangeError: Invalid array length
// at <anonymous>:2:10
// finally

try{
	throw "abc";
}
catch(e){
	console.log(e);
}
//abc

try{
	console.log("xx");
}
catch(e){
	console.log(e);
	console.log("yy");
}
//xx

try{
	try{
		throw "opps";
	}
	catch(ex){
		console.log("inner",ex);
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}
// inner opps
// finally

//JS中异常处理嵌套的情况
try{
	try{
		throw "opps";
	}
	catch(ex){
		console.log("inner",ex);
		throw ex;
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}
// inner opps
// finally
// outer opps

//JS中的异步回调函数捕获异常的情况
try{
	function abc(x,cb){
		console.log(x);
		cb();
	}
	abc("xx",function(){
		var arr = new Array(-1);
	});
}
catch(e){
	console.log(e);
}
// xx
// RangeError: Invalid array length
//     at <anonymous>:7:13
//     at abc (<anonymous>:4:3)
//     at <anonymous>:6:2

try{
	function abc(x,cb){
		console.log(x);
		cb();
	}
}
catch(e){
	console.log(e);
}
abc("xx",function(){
	var arr = new Array(-1);
});
// xx
// Uncaught RangeError: Invalid array length
//     at <anonymous>:11:12
//     at abc (<anonymous>:4:3)
//     at <anonymous>:10:1

//Error的子类
try{
	var a;
	a.aa();
}catch(e){
	console.log(e.name,e.message);
}
finally{
	console.log("finally");
}
// TypeError Cannot read property 'aa' of undefined
// finally
