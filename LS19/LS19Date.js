
var arr1 = [2,5,8];
var arr2 = [1,6,7];
arr1.forEach(function (a){
	console.log(a,this);
},arr2);
console.log(arr1);
// 2 (3) [1, 6, 7]
// 5 (3) [1, 6, 7]
// 8 (3) [1, 6, 7]
//   (3) [2, 5, 8]

var arr1 = [2,5,8];
var arr2 = [1,6,7];
var arr3 = [];
arr1.forEach(function (a,i){
	arr3[i] = a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);
//(3) [2, 6, 8]

//创建Date对象
var date = new Date(2017,9,18,12,34,1);
console.log(date);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date3 = new Date("2017-08-09");
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

var date5 = new Date(); //new Date(Date.now());
console.log(date5);
//Mon May 07 2018 14:35:40 GMT+0800 (中国标准时间)

var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);
console.log(d2,typeof d2);
// Mon May 07 2018 14:42:27 GMT+0800 (中国标准时间) "object"
// Mon May 07 2018 14:42:27 GMT+0800 (中国标准时间) string

//Date方法(静态方法、原型方法)
//静态方法
console.log(Date.now()); //1525675987150
console.log((new Date()).getTime()); //1525675987150
console.log(Date.parse("1970-01-01")); //0
console.log(Date.parse("1970-01-02")); //86400000
console.log(Date.UTC(2017,9,1)); //1506816000000

//Date原型方法
var today = new Date();
today.setMonth(6);
console.log(today); //Sat Jul 07 2018 14:47:08 GMT+0800 (中国标准时间)
console.log(today.getDay()); //6

var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 25 8
console.log(d.getTimezoneOffset());
//-480
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1999 5 4 3 8

var today = new Date();
today.getTime();

today+3600*24;

var newDate = new Date(today+1000*3600*24);
newDate;

var newDate = new Date(today+2000*3600*24);
newDate;

//确定50天之后是星期几、几月几号
var today = new Date();
var newDate = new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);
//Tue Jun 26 2018 15:05:24 GMT+0800 (中国标准时间)

//日期格式实例
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());
// 1262315543111
// Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
// 2018-05-07T07:08:09.515Z

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());
// 1262344343111
// Fri Jan 01 2010 19:12:23 GMT+0800 (中国标准时间)
// 2018-05-07T07:08:09.516Z

//日期格式（无时间）
console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));
// Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
// Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
// Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)

//日期和时间格式
console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));
// Mon Nov 22 1999 13:17:00 GMT+0800 (中国标准时间)
// Mon Nov 22 1999 13:17:11 GMT+0800 (中国标准时间)
// Mon Nov 22 1999 13:17:11 GMT+0800 (中国标准时间)
// Mon Nov 22 1999 21:17:11 GMT+0800 (中国标准时间)

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));
// 0
// 86400000
// -315532800000
// true
// 86400000
// Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)

