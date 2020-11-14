// JavaScript Document
//手机导航栏//
/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// 点击下拉菜单意外区域隐藏
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*彩蛋*/
const str = "开源地址： https://github.com/ZRX-GitHub/ZRX-GitHub.github.io"
console.log("%c"+str,"color: red; font-size: 17px;font-weight:bold");
console.warn("WeChat ID: ZRX_0615");
console.log("%c\n ","font-size: 180px;background:url('http://m.qpic.cn/psc?/V12y1aA30KVXf9/NA7c.P04lftfqRw.HyJC1bIjUZWfBOLQC42SzDxTbte7A52ADpBlsrJZzCuuQ6rmXXk5J6GsGFhIx.GZWzVMsOGjrxkC1gi82mWqicuYF8M!/a&rf=albumlist&t=5') no-repeat 0 0");




