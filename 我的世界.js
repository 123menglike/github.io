
   function login(){
   var name=document.getElementById("name").value;
   var pass=document.getElementById("pass").value;
   if(name=="520" && pass=="520"){
	   alert("登入成功");
	   window.location.href="myselfe.html"
   return false;
   }else{
	   alert("用户名或密码错误");
	   window.location.href="reg.html";
   return false;
     }   
   }
   
   function login(){
   var name=document.getElementById("name").value;
   var pass=document.getElementById("pass").value;
   if(name=="朋友" && pass=="3938"){
	   alert("登入成功");
	  window.location .href="朋友的页面.html";
   return false;
   }else{
	   alert("用户名或密码错误");
	   window.location.href="reg.html";
   return false;
     }   
   }