Array.prototype.each = function(trans) {
    for (var i=0; i<this.length; i++)
        this[i] = trans(this[i], i, this);
    return this;
};
Array.prototype.map = function(trans) {
    return [].concat(this).each(trans);
};
RegExp.escape = function(str) {
    return new String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
function properties(obj) {
    var props = [];
    for (var p in obj) props.push(p);
    return props;
}
 
var replacements = {
/*	  "@":"'",*/
	"#a":"中国"
	, "#b":"中等"
	, "#c":"体型"
	, "#d":"上体"
	, "#e":"下体"
	, "#f":"灰色"
	, "#g":"雌鸟"
	, "#h":"雌鸟"
	, "#i":"东南亚"
	, "#j":"繁殖"
	, "#k":"叫声"
	, "#l":"鸣声"
	, "#m":"腹部"
    , "#1":"白色"
    , "#2":"雀形目"
	, "#3":"黄色" 
    , "#4":"喜马拉雅山脉"
	, "#5":"褐色"
    , "#6":"区别在"
	, "#7":"黑色"
	, "#8":"区别"
	, "#9":"厘米"
	
};

var regex = new RegExp(properties(replacements).map(RegExp.escape).join("|"), "g");
//console.time('global')
//var birdstr = birdjs.replace(regex, function($0) { return replacements[$0]; }).replace(/#0/g, '\\"').replace(/#r/g,'<br>');
var birdstr = JSON.stringify(birdjs).replace(regex, function($0) { return replacements[$0]; });
//console.timeEnd('global')
//console.log(birdstr);

var birdjson=JSON.parse(birdstr);