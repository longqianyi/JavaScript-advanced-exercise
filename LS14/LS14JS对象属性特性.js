//
//
//
var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
var obj3 = function(){
	this.z = 3;
}
var obj3 = new Obj3(); //实例化出一个对象
console.log(obj1,obj2,obj3);

var objProto = {
	z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
console.log(obj.toString);
for(var k in obj){ //遍历所有属性
	console.log(k,obj[k]);
}
// ƒ toString() { [native code] }
// x 1
// y 2
// z 3

//
//JS对象属性特性及其设置
//设置属性的特性
//属性的值（[[value]]），对应属性的值
//可写特性（[[writable]]）	，确定属性是否可写性
//可配置特性（[[configurable]]），
//            确定属性是否能删除和其他特性是否可配置
//可枚举特性（[[enumerable]]），属性是否可枚举
var obj = {
	x:1,
	y:2
};
for(var k in obj){
	console.log(k,obj[k]);
}
// x 1
// y 2

var obj = {
	x:1,
	y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
	console.log(k,obj[k]);
}
//y 2


var person = {name:"jack"};
Object.defineProperty(person,"name",{
	writable:false,
	configurable:false,
	enumerable:true,
	value:"mike"
});
console.log(person.name); //mike
person.name = "lucy";
console.log(person.name); //mike
delete person.name;
console.log(person.name); //mike

//直接给对象添加属性
//(属性特性默认都为true)
var obj = {
	x:1,
	y:2
};
obj.z = 3;
for(var k in obj){
	console.log(k,obj[k]);
}
// x 1
// y 2
// z 3

//
//通过defineProperty方法添加的属性
//除手动修改的之外，其他默认都是false
//writable,enumerable没有指定，所以默认为false
//
var obj = {
	x:1,
	y:2
};
obj.z = 3;
Object.defineProperty(obj,"w",{
	value:456,
	configurable:true
});
for(var k in obj){
	console.log(k,obj[k]); //遍历不到"w"
}

var obj2 = {
	_name:"lucy",
	set name(val){this._name = val;},
	get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
	get:function(){
		return this._name+"_hihi";
	},
	set:function(val){
		this._name = val+"_haha";
	}
});
console.log(obj2.name); //lucy_hihi
obj2.name = "jack";
console.log(obj2.name); //jack_haha_hihi

//给多个属性设置特性的方法(Object.defineProperties)
var obj = {_x:1};
Object.defineProperies(obj,{
	y:{value:2,writable:true,enumerable:true},
	z:{value:2,writable:true,enumerable:true},
	x:{
		get:function(){return this._x;},
		set:function(val){
			this._x = val;
		}
	}
});

//
//属性特性的继承
//
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//输出21还是34
//21
var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//输出多少
//57

//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;
//false
//