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