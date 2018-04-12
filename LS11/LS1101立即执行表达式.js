
//iffy
//立即执行的函数表达式
function max(x,y){
	return x>y?x:y;
}
max(2,3); //3

(function min(x,y){
	return x<y?x:y;
}(2,3)); //2

//
//IIFE是表达式,注意要使用分号结束,否则可能出现错误
//
(function(){
	console.log("111");
})(); //没有分号会报错
//111
(function(){
	console.log("222");
})()
//222


var i = function(){
	return 10;
}(); //i为10

true && function(a,b){
	return a>b?a:b;
}(5,9);


//立即执行之后还会进行逻辑运算
!function(x,y){
	return x==y?true:false;
}("5",5); //false

!function(x,y){
	return x===y?true:false;
}("5",5); //true

var x = 10;
document.onclick = function(){
	alert("x = "+x);
};
// ƒ (){
// 	alert("x = "+x);
// }

(function(){
	var x = 20;
})();


function f(){
	var getNumFuns = [];
	for(var i = 0;i < 10;i++){
		(function(j){
			getNumFuns[j] = function(){return j;
			};
		})(i);
	}
	return getNumFuns;
}
var tmp = f();
tmp[3](); //3
//tmp[0](); //0
//tmp[9](); //9

//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;
            //return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3](); //9
// tmp[0]();
// tmp[9]();


//解决方案 IIFE 重新打开index09.html页面测试
// var tabs = document.getElementsByClassName('tabs')[0].children;
// var contents = document.getElementsByClassName('show')[0];

// for(var i=0;i<tabs.length;i++) {
//     (function (i) { 	//IIFE start
//         tabs[i].onclick=function(){
//             for (var j = 0; j < tabs.length; j++) {
//                 tabs[j].className = '';
//             }
//             this.className = "active";
//             contents.innerHTML = "导航" + i + "内容";
//         };
//     }(i));			//IIFE end
// }

//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}

//函数作为参数(高阶函数的一种）、静态词法作用域、IIFE
var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn); //15












