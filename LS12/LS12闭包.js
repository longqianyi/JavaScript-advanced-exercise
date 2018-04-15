

//
//
//
//f1中的x变量是否被释放
function f1(){
var x = 1;
function f2(){
return x++;
}
return f2();
}
var f3 = f1();
console.log(f3); //1
console.log(f3); //1


function f1(){
var x = 1;
function f2(){
return x++;
}
return f2;
}
var f3 = f1();
console.log(f3()); //1
console.log(f3()); //2

//
//闭包是有函数和与其相关引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体
//
function createInc(startValue){
	return function(step){
		startValue += step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1)); //6
console.log(inc(2)); //8
// var inc2 = createInc(5);
// console.log(inc(1)); //9
// console.log(inc2(1)); //6
inc = createInc(5);
console.log(inc(1)); //6

//
//闭包以函数对象形式返回
//tmp形成闭包，上次使用完并没有释放掉
//找函数词法作用域找到的tmp是3而不是100
//
var tmp = 100;
function foo(x){
	//var tmp = 3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee = foo(2); //fee形成了一个闭包
// fee(10); //16
// fee(10); //17
// fee(10); //18
fee(10); //113
fee(10); //114
fee(10); //115


function foo(x){
	var tmp = 3;
	return function(y){
		x.count = x.count?x.count+1:1;
		console.log(x+y+tmp,x.count);
	}
}
var age = new Number(2);
var bar = foo(age);
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3


function counter(){
	var n = 0;
	return{
		count:function(){return ++n;},
		reset:function(){n = 0;return n;}
	}
}
var c = counter(),d = counter();
console.log(c.count()); //1
console.log(d.count()); //1
console.log(c.reset()); //0
console.log(c.count()); //1
console.log(d.count()); //2


//
//闭包的作用
//可通过闭包来访问隐藏在函数作用域内的局部变量
//使函数中的变量被保存在内存中不被释放（单例模式）
//
function f1(){
	var n = 999;
	function f2(){
		console.log(++n);
	}
	return f2;
}
var f = f1();
f(); //1000
f(); //1001

function fn(){
	var a;
	return function(){
		return a || (a = document.appendChild(document.createElement('div')));
	}
};
var f = fn();
f();

function closureExample(objID,text,timedelay){
	setTimeout(function(){
		console.log(objID,text);
	},timedelay);
}
console.log("myDiv","Closure is Create",1000);


var n = 10;
function f1(){
	var n = 999;
	nAdd = function(){n+=1;}
	function f2(){
		console.log(n);
	}
	return f2;
}
var result = f1();
result(); //999
nAdd();
result(); //1000



function Person(){
	var name = "default";
	return {
		getName:functino(){
			return name;
		},
		setName:function(newName){
			name = newName;
		}
	}
};
var john = Person();
console.log(john.getName());
john.setName("john");
console.log(john.getName());

var jack = Person();
console.log(jack.getName());
jack.setName("jack");
console.log(jack.getName());

var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1;
nAdd();
result2();
//11

var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); //10
nAdd();
result2(); //11
result1(); //11


//注意闭包与不经意的变量共享
function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;//若是return i;的话最终输出是几？
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());// 输出 1？ 2？ 3？（没和没有IIFE时，返回i和pos时的区别）
//2

window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        // var li = document.createElement("li");//闭包，单例模式
        // ol.appendChild(li);//闭包，单例模式
        return function () {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerHTML = "列表内容";
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                //console.log(new Date());
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};


