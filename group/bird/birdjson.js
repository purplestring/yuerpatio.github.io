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
      "#b":"中国"
	, "#c":"体型"
	, "#d":"上体"
	, "#e":"厘米"
	, "#f":"灰色"
	, "#g":"雌鸟"
    , "#1":"白色"
    , "#2":"雀形目"
	, "#3":"黄色" 
    , "#4":"喜马拉雅山脉"
	, "#5":"褐色"
    , "#6":"区别在"
	, "#7":"黑色"
	, "#8":"叫声"
	, "#9":"下体"
	
};

var regex = new RegExp(properties(replacements).map(RegExp.escape).join("|"), "g");
//console.time('global')
var birdstr = JSON.stringify(birdjs).replace(regex, function($0) { return replacements[$0]; });
//console.timeEnd('global')

var birdjson=JSON.parse(birdstr);