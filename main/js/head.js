var lang= {
"lang":["EN","中"],
"back":["Back","返回"],
"menu":["Menu","菜单"],
};

var page= ["book","paint","photo","drug","bird","pano","mypaint","h5"];

var navinames= [
{ "book":"Books","paint":"Paints","photo":"Photos","drug":"Drugs","bird":"Birds","pano":"Panoramas","mypaint":"My Paints","h5":"My H5s"},
{ "book":"书卷集","paint":"画卷集","photo":"万叶集","drug":"本草卷","bird":"百鸟卷","pano":"全景卷","mypaint":"书画页","h5":"设计页"},
];

//var current=page.findIndex(function(d){return d == cpageName;});
var cpageName=self.location.href.split('group/')[1].split('/')[0];
var current=0;for(let i in page)if(page[i]==cpageName) {current=i;break;}
var langid=1;
if(sessionStorage.getItem("langid")==null) sessionStorage.setItem("langid",langid);
else langid=sessionStorage.getItem("langid");
var state=1;


//const myUrl="http://127.0.0.1";
const myUrl="https://yuer-nodejs.herokuapp.com";
var delCommentsStr=
`var htmlobj=$.ajax({
	url:"${myUrl}/jwt/delcmts?id="+id,
	headers: {Authorization: localStorage.getItem('token'),},
	async:false
});
this.getComments();`

var getCommentsStr=
`this.comments=[];
if(localStorage.getItem('expiresTime')!=null){
	if((new Date(localStorage.getItem('expiresTime'))).getTime()<(new Date()).getTime()){
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		localStorage.removeItem('expiresTime');
		this.username="";
	}
}			
this.username=localStorage.getItem('username');			
var htmlobj=$.ajax({
	url:'${myUrl}/'+(localStorage.getItem('token')==null?'api':'jwt')+"/getcmts?page="+pagename+"&item="+
	itemname+(localStorage.getItem('token')==null?'':('&username='+localStorage.getItem('username'))),
	headers: {Authorization: localStorage.getItem('token'),},
	async:false
});
if(htmlobj.responseText!="") this.comments=JSON.parse(htmlobj.responseText);`

var toogleLogStr=
`if($("#form_name").val()=="") alert("先写一下名儿")
else if(localStorage.getItem('token')==null) {
	let password=prompt("输一下密码");
	let _this=this;
	let username=$('#form_name').val()
	$.ajax({
	   type:'post',
	   url:'${myUrl}/api/login',
	   data:{username,password},
	   success(res){
		   //console.log(res);
		   $('#form_name').val(username);
		   
		   if(res.status==0) {	
			alert("登陆成功！")					   
			localStorage.setItem('username', username)
			localStorage.setItem('token', res.token)
			localStorage.setItem('expiresTime', res.expiresTime)
									
			_this.getComments();
		 }
		 else alert(res.message)
	   }
   })
}
else{
	localStorage.removeItem('token');
	localStorage.removeItem('username');
	localStorage.removeItem('expiresTime');
	this.username="";
}
this.getComments();`


if(window.screen.width<1080) loadScript("../../main/js/navi2.js");
else loadScript("../../main/js/navi1.js");
if(self.location.href.substring(0,4)!="http")sessionStorage.setItem("firstvisit",1);
if(sessionStorage.getItem("firstvisit")==null){
sessionStorage.setItem("firstvisit",1);loadScript("https://pv.sohu.com/cityjson?ie=utf-8");if(typeof(jQuery)=="undefined")loadScript("../../main/js/jquery-3.1.0.min.js");
setTimeout(function(){$.ajax({url:myUrl+"/api/visitor",type:"post",data:{ip:returnCitySN["cip"],city:returnCitySN["cname"]}})},3000);}


function loadScript(script){
	var _script = document.createElement('script');
	_script.type = "text/javascript";
	_script.src = script;
	document.head.appendChild(_script);
}

var linkTo=function(link){
	let name=link.split('/')[link.split('/').length-1];
	let group=link.split('/'+name)[0];
	let folder=group.split('/')[group.split('/').length-1];
	
	if(group.indexOf('photo_photo')>=0 || group.indexOf('photo/')>=0){		
		if(name.indexOf('.')>=0) return '../photo/photo.html?folder='+folder+'&file='+name;
		else return '../photo/photo.html?wd='+name;
	}
	else if(group.indexOf('../mypaint/')>=0 && group.split('/').length>1){	
		return '../mypaint/index.html?folder='+folder+'&file='+name;
	}
	else if(group.indexOf('../bird/')>=0){	
		return '../bird/index.html?wd='+name.split('.')[1];
	}
	else if(group.indexOf('paint/img')>=0){	
		return '../paint/index.html?wd='+link.split('paint/')[1];
	}	
	else return '../'+group+'/index.html?wd='+name;
};