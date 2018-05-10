
//正则对象的创建方式1 通过字面量直接创建
var reg1 = /[bcf]at/gi;
//创建方式2 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]

console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on

var str = "xx-xxy-xx";
var a = str.split("-");
console.log(a);
//(3) ["xx", "xxy", "xx"]

//g全局,i忽略大小写,m包含换行
var regExp = /a?b/gi;
var matchResult = "xxabcaabbbxyz".match(regExp);
console.log(matchResult);
//(4) ["ab", "ab", "b", "b"]

console.log("a2b3c4d".replace(/[2-3]/,"x")); //axb3c4d
console.log("a2b3c4d".replace(/[2-3]/g,"x")); //axbxc4d
var regExp = /a/gi;
console.log(regExp.test("ab")); //true
console.log(regExp.test("ab")); //false
console.log(regExp.test("ab")); //true
console.log(regExp.test("ab")); //false


"a2b5".replace(/\d/gi,"X"); //"aXbX"
"a2b5".replace(/\D/gi,"X"); //"X2X5"
"a2b5".replace(/\w/gi,"X"); //"XXXX"

// [ ]代表字符类，如[abc]代表abc中的任意一个字符，可以配合范围符号-如[a-c3-9
// [^ ]代表字符类取反，如[^abc]代表非abc中的任意一个字
// 一个 - 代表范围，如[a-z] 、[a-z0-9A-Z
// 一个 . 代表一个除了回车和换行符之外的所有字符 等效于[^\r\n]

 // ?出现0次或1次（最多1次） 
 // +出现1次或多次（至少1次）   
 // *出现0次或多次（任意次）
 // {n} 出现n次       
 // {n,m} 出现n到m次      
 // {n,}出现至少n次

"12345678".replace(/\d{3,6}/,'X'); "X78"

console.log("nooooonooy".replace(/o?/g,"*")); //*n******n***y*

console.log("nooooonooy".replace(/o{5}/g,"*")); //n*nooy

console.log("nooooonooy".replace(/o{1,2}/g,"*")); //n***n*y



// 正则表达式之 \
// 匹配一个词的边界 \b 一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));
console.log(/oo\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

//练习将"aaa"替换为"axa"

//
"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"

//  \d匹配一个数字等价于[0-9]  例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'
//  \D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'


/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。
 */

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");
"sdafsa sdfea2s".replace(/a\Ds/g,"*");
"sdafsa sdfea2s".replace(/a\ws/g,"*");
"sdafsa sdfea2s".replace(/a\Ws/g,"*");

//
var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);
str.replace(/\dqe/,11223344);
console.log(str);

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));
console.log(/\B../.test("noonday"));


//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));


//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//注意：0到n次的写法{0,n}而不是{,n}

//var reg = /d{20}\w\d?\w+\d*\w{3,5}\d{3,}/;

//正则表达式的分组的反向引用
"2017-10-23".replace(/(\d{4})-(\d{2})/,"$2/$3/$1"); //"10/23/2017"
//忽略分组
"2017-10-23".replace(/(?:\d{4})-(\d{2})/,"$2/$3/$1"); //23/$3/10

var regExp = /a/gi;
console.log(regExp.test("ab")); //true
console.log(regExp.test("ab")); //false

var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex); 
console.log(execExp2.exec(ts),execExp2.lastIndex); 
// (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 6
// (3) ["233", "3", "3", index: 11, input: "12s342dsfsf233s", groups: undefined] 14

//String.prototype.search search忽略全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));
console.log("a2b3c4d".replace(/[2-3]/,"X"));
console.log("a2b3c4d".replace(/[2-3]/g,"X"));

//String.prototype.split
console.log("a,b,c,d".split(","));
console.log("a2b3c4d".split(/\d/));

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);
"hello world Hi you".match(/hello|world/);
"hello world Hi you".match(/hello|world/g);
"world Hi you".match(/hello|world/);
"THat hot hat".match(/h.t/);
"THat hot hat".match(/h.t/g);
"THat hot hat".match(/h.t/gi);

// 	/\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/ （邮箱）
// 	/^[A-Za-z0-9_-]+$/ （密码）
// 	/((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/ （IP地址）
// 	/(.*)\.(rar|zip|7zip|tgz)$/ （压缩格式）
// 	/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/ （图片判断）
// 	/^#[a-fA-F0-9]{6}$/ （颜色值）
// 	/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/ （用户名）
// 	/0?(13|14|15|18)[0-9]{9}/ （手机号）
// 	/^[A-Za-z0-9_()（）\-\u4e00-\u9fa5]+$/ （公司名称）





