
//交换变量
var [x,y] = ["a","b"];
[x,y] = [y,x];
console.log(x,y);
//b,a

//从函数中返回多个值
//函数只能返回一个值,如果要返回多个值
//只能将它们放在数组或对象里返回
//
// 返回一个数组
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();

// 返回一个对象,解构所有属性
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = example();

// 3 函数参数的定义
//解构赋值可以方便地将一组参数与变量名对应起来。
// 参数是一组有次序的值
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});


