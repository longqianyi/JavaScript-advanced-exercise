//对象
// 1.对象使用和属性
//         null和undefined不可以当做对象使用
        
// 2.对象作为数据类型
  //     {} -- 可以创建一个简单对象
         var foo() = {};//一个空对象
//3.访问属性
        var foo = {name:"kitten"};
        foo.name;//kitten
        foo['name'];

//4.删除属性
//        使用delete操作符；设置属性为udefined或者null并不能真正的删除属性
          var obj = {
             bar:1,
             foo:2,
             baz:3
          };
//hasOwnProperty当检查对象上某个属性是否存在时，使用hasOwnProterty是唯一可用方法
        obj.bar = undefined;
        obj.foo = null;
        delete obj.baz;

        for(var i in obj){
          if(obj.hasOwnProperty(i)){
            console.log(i,''+obj[i]);
          }
        }
//bar undefined
//foo null
//

//原型
function Foo(){
  this.value = 42;
}
Foo.prototype = {
  method:function(){}
};
function Bar(){}

//设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

//修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var test = new Bar();//创建Bar的一个新实例


//for in 循环
//在查找对象属性时遍历原型链上的所有属性

// 修改 Object.prototype
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
    console.log(i); // 输出两个属性：bar 和 moo
}


//函数
//函数赋值表达式
//
var foo = function(){}; //赋值语句只在运行时执行
foo; //'undefined'
foo(); //出错：TypeError
var foo = function(){};

//this的工作原理
//
//全局范围内 指向全局对象
this;
//函数调用 这里的this也会指向全局对象
foo();
//方法调用 this指向test对象
test.foo();
//调用构造函数 this指向新创建的对象
new foo();

//闭包和引用
//闭包意味着当前作用域总是访问外部作用域中的变量
//闭包的创建依赖于函数
//

//arguments对象
//每个函数内都能访问
//arguments不是一个数组 实际上是一个对象
//
//性能真相
//不管它是否被使用，arguments对象总会被创建，除了两个特殊情况--作为局部变量声明和作为形式参数
//


//数组
//数组遍历与属性
//
//length属性
var foo = [1,2,3,4,5,6];
foo.length = 3;
foo; //[1,2,3]

foo.length = 6;
foo; //[1,2,3]

//Array构造函数
[1,2,3]; //结果：[1,2,3]
new Array(1,2,3); //结果：[1,2,3]

[3]; //结果：[3]
new Array(3); //结果：[] 此数组长度为3
new Array('3'); //结果：['3']
//应该尽量避免使用数组构造函数创建新数组


//类型
//1.相等与比较
//等于操作符 会为了比较两个值而进行强制类型转换
"" == "0" //flase
0 == "" //true
0 == "0" //true
false == "false" //flase
false == "0" //true
false == undefined //flase
false == null //flase
null == undefined //true
"\t\r\n" == 0 //true

//2.严格等于操作符
//不会进行强制类型转换
"" === "0" //flase
0 === "" //flase
0 === "0" //false
false === "false" //flase
false === "0" //false
false === undefined //flase
false === null //flase
null === undefined //false
"\t\r\n" === 0 //false

//3.比较对象
//比较的不是值是否相等,而是是否属于同一个身份
//只有对象的同一个实例才被认为是相等的
{} === {}; //false
new String('foo') === 'foo'; //false
new Number(10) === 10; //flase
var foo = {};
foo === foo; //true

//typeof操作符
//用来检测一个对象是否已经定义或者已经赋值，不是用来检测对象的类型
//
//测试为定义变量
typeof foo !== 'undefined'
//会检测foo是否已经定义,如果没有定义而直接使用会导致ReferenceError的异常


//instanceof操作符
//用来比较两个操作数的构造函数。
//
//比较自定义对象
function Foo(){}
function Bar(){}
Bar.prototype = new Foo();

new Bar() instanceof Bar; //true
new Bar() instanceof Foo; //true
//如果仅仅设置Bar.prototype为函数Foo本身，而不是Foo构造函数的一个实例
Bar.prototype = Foo;
new Bar() instanceof Foo; //false

//instanceof比较内置类型
new String('foo') instanceof String; //true
new String('foo') instanceof Object; //true

'foo' instanceof String; //false
'foo' instnceof Object; //false

//类型转换
new Number(10) == 10; // Number.toString() 返回的字符串被再次转换为数字

10 == '10';           // 字符串被转换为数字
10 == '+10 ';         // 同上
10 == '010';          // 同上 
isNaN(null) == false; // null 被转换为数字 0
                      // 0 当然不是一个 NaN（译者注：否定之否定）

// 下面的比较结果是：false
10 == 010;
10 == '-10';

//内置类型的构造函数
//内置类型（如Number和String）的构造函数在被调用时,使用或者不使用new的结果完全不同。
new Number(10) === 10;     // False, 对象与数字的比较 （使用new创建一个新的Number对象）
Number(10) === 10;         // True, 数字与数字的比较 （不使用new仅Number是一个数字转换器）
new Number(10) + 0 === 10; // True, 由于隐式的类型转换

//转换为字符串
''+10 === 10; //true
//转换为数字
+'10' === 10; //true

//字符串转换为数字的常用方法
+'010' === 10
Number('010') === 10
//parseInt('010', 10) === 10  // 用来转换为整数

+'010.2' === 10.2
Number('010.2') === 10.2
//parseInt('010.2', 10) === 10

//转化为布尔类型
//通过使用 否 操作符两次，可以把一个值转换为布尔型。
//
!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true

