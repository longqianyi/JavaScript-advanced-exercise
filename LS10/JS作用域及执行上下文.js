
//全局作用域
var a = 10,
	b = 20;
function fn(){
	//fn局部作用域
	var a = 100,
		c = 200;
		//console.log(a,b,c,d); //d is not defined at fn
	function bar(){
		//bar局部作用域
		var a = 500,
			d = 600;
		console.log(a,b,c,d); //500 20 200 600
	}
	bar();
	//console.log(a,b,c,d);
}
fn();
//console.log(a,b,c,d); //c is not defined at


//JS词法作用域
var name = 'Jack';
function echo(){
	console.log(name);
}
echo(); //Jack


//词法作用域 与调用形式无关
var name = "Jack";
function echo(){
	console.log(name);
}
function foo(){
	var name = "Bill";
	function fee(){
		var name = "Lucky";
		echo();
	}
	fee();
}
foo(); //Jack

//
var name = 'Jack';
function echo(){
	console.log(name);
}
function env(){
	var name = 'Bill';
	echo();
}
env(); //Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "1";
	return new Function("console.log(scope);");
}
foo()(); //g


var scope = "global";
function checkScope(){
	var scope = "local";
	return function(){
		return scope;
	};
} 
console.log(checkScope()()); //local


var scope = "global";
function checkScope(){
	var scope = "local";
	return new Function("return scope;");
}
console.log(checkScope()()); //global


//ES5中无块作用域
//
{
	var a = 4;
}
console.log(a); //4

//变量污染、变量共享问题
var userId = 123;
document.onclick = function(){
	console.log("userId = ",userId);
};

(function(){
	var a = 2,b = 3;
	if(a<b){
		var userId = 234;
	}
}());


console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
	var yy = ["文具店-买文具中"];
	console.log("在文具店-买文具中 ...函数1上下文");
	console.log("在文具店-买文具中 ...函数1上下文 发现没带钱");
	goToBank();
	console.log("在文具店-买好文具 ...函数1上下文 返回家");
}
function goToBank(){
	var zz = ["银行职员","柜员机"];
	console.log("在银行-取钱 ...函数2上下文 返回文具店")
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();
console.log("在家-继续做作业...全局上下文");


//调用栈 Call Stack
console.log("全局上下文-start");
var x = 1;
function foo(){
	console.log("foo上下文-start"); //设置断点
	var y = 2;
	function bar(){
		console.log("bar上下文-start"); //设置断点
		var z = 3;
		console.log(x+y+z);
		console.log("bar上下文-end"); //设置断点
	}
	bar();
	console.log("foo上下文-end"); //设置断点
}
foo(); //设置断点
console.log("全局上下文-end"); //设置断点


//watch窗口和Scope窗体（观察作用链的变化）
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
	console.log("goToStore_A上下文-start"); //设置断点
	var y = "文具店A环境-";
	goToBank_C(); //设置断点
	//goToBank_D(); //设置断点
	console.log("goToStore_A上下文-end"); //设置断点
}
function goToBank_C(){
	console.log("goToBank_C上下文-start"); //设置断点
	var z = "银行C环境-";
	console.log(x+y+z);
	console.log("goToBank_C 上下文-end");//设置断点
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");//设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");//设置断点
}
goToStore_A();//设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end");//设置断点

