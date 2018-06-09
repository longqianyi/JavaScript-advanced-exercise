
//数组、对象的解构赋值
//对象的解构赋值
//解构赋值时,左侧为键值对时,要注意键值对赋值时的对应关系
//如果键值对的情况下,键只用于匹配,真正赋给的是对应的值

//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"


let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);//注意区别

let { first, last } = obj1;
console.log(first,last);

var { foo5: foo5, bar5: bar5 } = { foo5: "aaa", bar5: "bbb" };

//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);// "aaa"
//foo6 // error: foo is not defined
//真正被赋值的是变量baz6，而不是模式foo6


//和数组一样，解构也可以用于嵌套结构的对象,如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World

///
var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
line // 1
//loc // error: loc is undefined
//start // error: start is undefined
//只有line是变量，loc和start都是模式，不会被赋值。

//嵌套赋值的例子，
//如果不加括号解析器将解析为代码块，所以加括号
let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);// {prop:123}
console.log(arr);// [true]

//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5

var {x4:y4 = 3} = {};
console.log(y4); // 3

var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"

