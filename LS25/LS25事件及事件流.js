
//JS事件是浏览器或用户自身执行的某种动作
//(包括前端事件、Node中的事件)
//前端事件主要包括BOM或DOM中发生的特定的交互
//常见事件(load、click、mouseover、keydown、keyup等)
window.onload = function(){
	console.log("window onload");
	var div2 = document.getElementById("div2");
	div2.onclick = function(){
		console.log("div2 click");
	}
}

//事件对象(包含事件中相应的信息)
//当事件发生时会产生对应的事件对象
//事件对象包含对应事件的相关信息

//事件响应方式
window.onload = function(e){
	console.log("e:",e);
	var div1 = document.getElementById("div1");
	var evenHandler = function(e){
		console.log(e);
		console.log(e.clientX,e.clientY);
	}
	div1.onclick = evenHandler;
}

//事件响应的兼容性问题











//事件流指从页面中接收事件的顺序包括冒泡流和捕获流
//冒泡  从最具体的节点到最不具体节点
//捕获  从最不具体的节点到最具体节点

















