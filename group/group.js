function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){

var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var openTip = oOpenTip || "";
var shutTip = oShutTip || "";


	if(targetObj.style.display!="none"){
		oSourceObj.innerHTML=oSourceObj.innerHTML.replace(/▲/, "▼");
		if(shutAble) return;
		targetObj.style.display="none";
		if(openTip  &&  shutTip){
			sourceObj.innerHTML = shutTip;
		}
	} else {
		oSourceObj.innerHTML=oSourceObj.innerHTML.replace(/▼/, "▲");
		targetObj.style.display="block";
		if(openTip  &&  shutTip){
			sourceObj.innerHTML = openTip;
		}
	}
}