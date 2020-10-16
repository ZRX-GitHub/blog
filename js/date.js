// JavaScript Document

/*  
34001
*/

//改变 HTML 内容
function myFunction_1() {
	x=document.getElementById("demo_1");	//找到要替换的文本 ID
	x.innerHTML="Hello！";	//替换的文本内容
}

//改变 HTML 图像
function changeImage() {	//点击开关灯
	element=document.getElementById('demo_2')    // 引号内填写ID 
	if (element.src.match("bulbon"))
	{
		element.src="https://www.runoob.com/images/pic_bulboff.gif";
	}
	else
	{
		element.src="https://www.runoob.com/images/pic_bulbon.gif";
	}
}

//改变 HTML 样式
function myFunction_3() {
	x=document.getElementById("demo_3");    //找到要改变的元素
	x.style.color="#ff0000";              //改变的样式
}

//判断输入的是否是数字
//不允许字符中出现空格 
function myFunction_4()
{
	var x=document.getElementById("demo_4").value;    //找到要判断的位置
	if (x == "" ) {
		alert("请输入字符！");
	}
	else if (x == ""||isNaN(x)) {
		alert("您输入的不是数字！");
	}
	else {
		alert("您输入的是数字！");
	}
}


