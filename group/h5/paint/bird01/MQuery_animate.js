$().extend('animate', function (json, duration, easing, complete){
	var i=0;
	//console.log(duration);//return;
	for(i=0;i<this.elements.length;i++)
	{
		startMove(this.elements[i], json, duration, easing, complete);
	}
	
	function getStyle(obj, attr)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[attr];
		}
		else
		{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function startMove(obj, json, duration, easing, fn)
	{
		clearInterval(obj.timer);		
		var frame_rate=30;
		var progress=0;
		if(typeof(easing) == "undefined") easing="swing";
		//console.log(easing);
		//var step=duration/frame_rate;
		obj.timer=setInterval(function (){
			var bStop=true;		//设定此次运动可完成
			for(var attr in json)
			{
				//1.取当前值
				var iCur=0;
				
				if(attr=='opacity')
				{
					iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
				}
				else
				{
					iCur=parseInt(getStyle(obj, attr));
				}
				
				//2.定速度
				//var iSpeed=(json[attr]-iCur)/duration;
				//iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				if(easing=="linear")
				{					
					iSpeed=frame_rate*(json[attr]-iCur)/(duration-progress);
					//console.log(attr+": "+parseInt(100*(progress/duration)) +"% iSpeed: "+iSpeed);
				}else if(easing=="swing")
				{
					iSpeed=1.6*frame_rate*(json[attr]-iCur)/(duration-progress);
				}
				
				//3.定终点
				if((progress+frame_rate)>duration) iSpeed=json[attr]-iCur;
				else bStop=false;//还不能停
				
				if(attr=='opacity')
				{
					obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
					obj.style.opacity=(iCur+iSpeed)/100;
				}
				else if(attr=='transform' || attr=='-webkit-transform') // 未测试
				{
					obj.style['transform'] = obj.style['-webkit-transform'] = "rotate("+iCur+iSpeed+"deg)";
				}
				else
				{
					obj.style[attr]=iCur+iSpeed+'px';
				}
			}
			progress+=frame_rate;
			
			if(bStop)
			{
				clearInterval(obj.timer);
				
				if(fn)
				{
					fn();
				}
			}
		}, frame_rate)
	}
});