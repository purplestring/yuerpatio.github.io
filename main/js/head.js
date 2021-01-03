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
var current=0;for(let i in page)if(page[i]==cpageName) {current=i;break;}
var langid=1;
if(sessionStorage.getItem("langid")==null) sessionStorage.setItem("langid",langid);
else langid=sessionStorage.getItem("langid");
var state=1;