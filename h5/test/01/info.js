var EnMonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"];
var EnDay=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var CnDay=["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];

//Slidershow
var slidepics=[
{ "img":"images/0.jpg","info":["01 At vero eos et accusamus","01 夫子庙的夜晚夫子庙的夜晚夫子庙的"]},
{ "img":"images/a.jpg","info":["02 et iusto odio dignissimos","02 秦淮河的故事秦淮河的故事"]},
{ "img":"images/b.jpg","info":["03 blanditiis praesentium voluptatum","03 夫子庙的夜晚夫子庙的夜晚夫子庙的"]},
/*{ "img":"images/c.jpg","info":"茅家铺的清新茅家铺的清新茅家铺的清新"},
{ "img":"images/d.jpg","info":"美丽洲的神秘"},
{ "img":"images/e.jpg","info":"曲院风荷的优雅曲院风荷的优雅曲"},*/
];

var hometext=[
{"title":["Coffee","咖啡"],"page":["zjl01.html","zjl04.html"],"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic.","01 探索火星七年，行驶21公里（13英里），攀登了368米（1207英尺），在火星表面钻洞22次，发现远古火星的环境条件有利于生命的存在"]},
{"title":["Tea","茶"],"page":["zjl05.html","zjl06.html"],"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic.","02 朱诺号最近飞掠木星时，拍摄到了这张引人注目的美景，除了反气旋风暴木星大红斑外，我们还能看到色彩斑斓的南赤道带，以及白色为主的南部热带区域。"]},
{"title":["Milk","牛奶"],"page":["zjl05.html","zjl06.html"],"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic.","03 卡西尼号的旅程已接近尾声，2017年9月15日，卡西尼号将比历史上任何一次都接近土星，他将坠向土星大气层。未来NASA将发射专门的探测生命的航天器去往土卫二，使命只有一个，寻找生命。"]},
];
var home= { "slidepics":slidepics,"hometext":hometext,};
	
//Waterfall
var waterpics=[
{ "img":"images/grocery.svg","info":["A grocery store or grocer's shop is a retail shop that primarily sells food. A grocer is a bulk seller of food.","杂货店指的是贩卖杂货的店子，也名杂货铺、南杂店、小百货店。"]},
{ "img":"images/building.svg","info":["A building, or edifice, is a structure with a roof and walls standing more or less permanently in one place, such as a house or factory.","建筑是建筑物与构筑物的总称，是人们为了满足社会生活需要，利用所掌握的物质技术手段，并运用一定的科学规律、风水理念和美学法则创造的人工环境。"]},
{ "img":"images/koala.svg","info":["The koala is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats, which comprise the family Vombatidae. ","树袋熊并不是熊科动物，而且它们相差甚远。熊科属于食肉目，而树袋熊却属于有袋目。它每天18个小时处于睡眠状态，性情温顺，体态憨厚。"]},
{ "img":"images/volcano.svg","info":["A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface.","火山是一种常见的地貌形态，由地下熔融物质及其携带的固体碎屑冲出地表后堆积形成的山体。地壳之下100-150千米处，有一个“液态区”，区内存在着高温、高压下含气体挥发成份的熔融状硅酸盐物质，即岩浆。它一旦从地壳薄弱的地段冲出地表，就形成了火山。火山分为“活火山”、“死火山”和“休眠火山”。火山是炽热地心的窗口，地球上最具爆发性的力量，爆发时能喷出多种物质。危害有：火山泥石流、熔浆流等。"]},
{ "img":"images/bicycle.svg","info":["A bicycle, also called a cycle or bike, is a human-powered or motor-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.","自行车，又称脚踏车或单车，通常是二轮的小型陆上车辆。人骑上车后，以脚踩踏板为动力，是绿色环保的交通工具。"]},
{ "img":"images/black cat.svg","info":["A black cat is a domestic cat with black fur that may be a mixed or specific breed, or a common domestic cat of no particular breed. ","黑猫属于猫科动物，泛指毛色通身黑色的猫。古书记载黑猫为镇宅、辟邪、招财之物。黑猫与孟买猫非常的类似，它们的身体也呈现漆黑色。"]},
{ "img":"images/eat1.svg","info":["Food is any substance consumed to provide nutritional support for an organism. It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.","食物是指能够满足机体正常生理和生化能量需求，并能延续正常寿命的物质。对人体而言，能够满足人的正常生活活动需求并利于寿命延长的物质称之为食物。"]},
{ "img":"images/castle.svg","info":["A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.","城堡是欧洲中世纪的一种产物，公元1066年至1400年是兴建城堡的鼎盛时期，欧洲贵族为争夺土地、粮食、牲畜、人口而不断爆发战争，密集的战争导致了贵族们修建越来越多、越来越大的城堡，来守卫自己的领地。"]},
{ "img":"images/camera.svg","info":["A camera is an optical instrument to capture still images or to record moving images, which are stored in a physical medium such as in a digital system or on photographic film. ","最早的照相机结构十分简单，仅包括暗箱、镜头和感光材料。"]},
{ "img":"images/glasses.svg","info":["Glasses, also known as eyeglasses or spectacles, are devices consisting of glass or hard plastic lenses mounted in a frame that holds them in front of a person's eyes, typically using a bridge over the nose and arms which rest over the ears.","据说是一位名叫阿尔马托的光学家和一位生活在比萨市的意大利人斯皮纳发明的。"]},
{ "img":"images/shoes.svg","info":["A shoe is an item of footwear intended to protect and comfort the human foot, while the wearer is doing various activities.","以皮、布、木、草、塑料丝等为材料制作的穿在脚上、走路时着地的物品，是人类必不可少的生活用品。"]},
{ "img":"images/bag.svg","info":["A bag (also known regionally as a sack) is a common tool in the form of a non-rigid container. ","布艺包的面料一般为帆布、牛仔、棉的内衬一般为尼龙和棉质，一般来说，布艺包都可干洗或者水洗，条纹较多、颜色较亮丽的布艺包一定要干洗，否则会褪色。"]},
];	
var photos=waterpics;

//News
var news=[
{ "d":"2000/01/01 00:00:00","page":"lishi00.html","title":["LISHINIANBIAO","历史年表"],"info":["es of the Year chart.","历史年表"]},
{ "d":"2000/01/01 00:00:00","page":"vedio00.html","title":["vedio test","视频测试"],"info":["es of the Year chart.","视频测试"]},
{ "d":"2000/01/01 00:00:00","page":"audio00.html","title":["vedio test","音频测试"],"info":["es of the Year chart.","音频测试"]},
{ "d":"2001/09/14 9:00:00","title":["Fantasy","第二张专辑《范特西》"],"info":["Fantasy is the second studio album by Taiwanese singer Jay Chou, released on 14 September 2001 by BMG Taiwan.<br>&#12288;&#12288;The album was nominated for ten Golden Melody Awards and won five awards, including Best Pop Vocal Album, Best Album Producer, and Best Composer.<br>&#12288;&#12288;The album also won for an IFPI Hong Kong Top Sales Music Award for Top 10 Best Selling Mandarin Albums of the Year.<br>The tracks, \"Simple Love\" and \"I Find It Hard to Say\", are listed at number 2 and number 17 respectively on the 2001's Hit FM Top 100 Singles of the Year chart.","发行个人第二张专辑《范特西》，专辑名称来自英文“Fantasy”的音译；凭借这张专辑周杰伦在2002年度台湾第13届金曲奖颁奖典礼中斩获“最佳作曲人奖”、“最佳专辑制作人奖”以及“最佳流行音乐演唱专辑奖”等五项大奖。"]},
{ "d":"2011/08/02 16:32:00","title":["iis praesentium volupt","第三张专辑《八度空间》"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","发行个人第三张专辑《八度空间》；9月28日个人首次世界巡回演唱会“THE ONE”于台北市立体育场拉开帷幕。"]},
{ "d":"2011/08/08 6:18:00","title":["tiis praesentium","《时代》杂志专访"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","出道仅三年便接受美国《时代》杂志专访，并成为亚洲版的封面人物[7]；周杰伦是继王菲、张惠妹之后，第三位出现在《时代》杂志亚洲版封面的华人歌手，并被该杂志赞誉为“新一代亚洲流行天王”[7]；2003年7月，全亚洲超过50家电台定7月16日为周杰伦日，并同步首播其第四张个人新专辑《叶惠美》中的主打歌曲《以父之名》[12]，此后每张专辑必定有一首中国风的歌曲。"]},
{ "d":"2011/08/10 14:14:00","title":["At vero eos et accusamus","第五张专辑《七里香》"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","发行个人第五张专辑《七里香》，并凭借该专辑首次获得世界音乐大奖“大中华区最畅销艺人”[13]；同时，根据国际唱片业协会IFPI的统计，专辑七里香销量位居年度世界第42位，[14]；同年以歌曲《龙拳》首次亮相春节联欢晚会。"]},
{ "d":"2012/12/12 12:12:12","title":["Opus 12","第十二张专辑《12新作》"],
"info":["Opus 12 is the twelfth studio album by Taiwanese singer Jay Chou, released on 28 December 2012 by Sony Music Taiwan. The album was nominated for four Golden Melody Awards.",
"《12新作》是台湾男歌手周杰伦的第12张录音室专辑，收录12首歌曲，2012年12月12日开始预购，12月28日发行。以发行3天的时间就成为五大唱片2012年年榜第5名。2013年，专辑入围第24届金曲奖“最佳国语专辑奖”，周杰伦凭借这张专辑入围“最佳专辑制作人奖”以及“最佳国语男歌手奖”，黄雨勋凭借收录于这张专辑中的歌曲《比较大的大提琴》入围“最佳编曲人奖”。"]},
{ "d":"2016/06/24 9:00:00","title":["Jay Chou's Bedtime Stories","第十四张专辑《床边故事》"],
"info":["Jay Chou's Bedtime Stories is the fourteenth studio album by Taiwanese singer Jay Chou, released on 24 June 2016 by Sony Music Taiwan. The album was nominated for three Golden Melody Awards.",
"《周杰伦的床边故事》 是台湾男歌手周杰伦的第14张录音室专辑，2016年6月8日开始预购，6月24日正式发行。在中国大陆发行时，将专辑名《周杰伦的床边故事》改名为《周杰伦的睡前故事》，将歌曲《床边故事》改为《睡前故事》"]},
];
// "date":["Friday, 14 September 2001 9:00","2001年9月14日 9:00，星期五"],
function add0(t){
	 if(t <=9) return '0'+t;
	 else return t;
}
for(let i in news) {
	var d = new Date(news[i].d);
	news[i].date=[EnDay[d.getDay()-1]+", "+d.getDate()+" "+EnMonth[d.getMonth()]+" "+d.getFullYear()+" "+add0(d.getHours())+":"+add0(d.getMinutes()),
	d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日 "+add0(d.getHours())+":"+add0(d.getMinutes())+"，"+CnDay[d.getDay()-1]];
};


//var lang=["EN","中"];
//var Back=["Back","返回"];
var lang= {
"lang":["EN","中"],
"back":["Back","返回"],
"menu":["Menu","菜单"],
};

var navinames= [
{ "Home":"Home","About":"About","History":"History","Photos":"Photos","News":"News","Contacts":"Contacts"},
{ "Home":"首页","About":"关于","History":"历程","Photos":"图册","News":"最新","Contacts":"联系"},
];

var address= [
["Our Contacts","Country:","USA","State:","California","City:","San Diego","Telephone:","+354 5635600","Email:","smartnet@mail.com"],
["联系方式：","省份：","淮海省","城市：","桐津市","地址：","乌古木大街117号","电话：","1585635600X","邮箱：","abc@abc.com"],
];

var contactform= [
["Contact Form","Your Name:","Your E-mail:","Your Message:","Send","Clear"],
["留言板：","姓名：","邮箱：","内容：","发送","清空"],
];

var misinfo= [
["Miscellaneous Info:","Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic. Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo."],
["更多信息：","秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。青海长云暗雪山，孤城遥望玉门关。黄沙百战穿金甲，不破楼兰终不还。"],
];

var contacts= { "address":address,"contactform":contactform,"misinfo":misinfo,};

var historylist= [
{"date":"11/7/2000","info":["Jay","Jay"],"page":"zjl01.html"},
{"date":"09/14/2001","info":["Fantasy","《范特西》"]},
{"date":"6/18/2002","info":["The Eight Dimensions","《八度空间》"]},
{"date":"6/29/2003","info":["Ye Hui Mei","《叶惠美》"],"page":"zjl04.html"},
{"date":"8/3/2004","info":["Common Jasmin Orange","《七里香》"],"page":"zjl05.html"},
{"date":"11/1/2005","info":["Nov's Chopin","《11月的萧邦》"],"page":"zjl06.html"},
{"date":"9/5/2006","info":["Still Fantasy","《依然范特西》"]},
{"date":"11/1/2007","info":["On the Run!","《我很忙》"]},
{"date":"10/14/2008","info":["Capricorn","《魔杰座》"]},
{"date":"5/18/2010","info":["The Era","《跨时代》"]},
{"date":"11/11/2011","info":["Exclamation Mark","《惊叹号》"]},
{"date":"12/28/2012","info":["Opus 12","《12新作》"],"page":"zjl12.html"},
{"date":"12/26/2014","info":["Aiyo, Not Bad","《哎呦，不错哦》"],"page":"zjl13.html"},
{"date":"06/24/2016","info":["Jay Chou's Bedtime Stories","《周杰伦的床边故事》"]},
//{"date":"06/24/2004","info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id","风光集贤亭的风光集贤亭的风光集贤亭的风"]},
];
for(let i in historylist) {
	let d = new Date(historylist[i].date);
	historylist[i].year=d.getFullYear();
	historylist[i].month=d.getMonth()+1;
};
var about= { "historylist":historylist,"EnMonth":EnMonth,};

var historylist2= [
//{"year":2012,"month":7,"date":7,"site":"北京 南锣鼓巷69cafe","n":"","class":"","info":"日式乡村民谣弹唱会","url":"http://weibo.com/2158787251/yrm7ffGg5"},
{"year":2012,"month":9,"date":16,"site":"北京 南锣鼓巷69cafe","n":"","class":"","info":"程璧首张原创音乐专辑Anna's Patio《晴日共剪窗》首发演出本周日16号晚九点69CAFE ","url":"http://weibo.com/2158787251/yBrEhdrKd"},
{"year":2014,"month":10,"date":11,"site":"杭州","n":"","class":"","info":"这次杭州演出收到很贴心的礼物：一套好看的茶具，造型是一朵莲花一片荷叶。回家仔细一看里面还提了字，看到以后有些感动。拿来泡了一壶桂花龙井茶，真的是很爱，造型小巧加上外面这柔软的包裹，以后可以随时带着它出门了。谢谢美丽的@舒羽shuyu 和她的@舒羽咖啡","url":"http://weibo.com/1759006061/Br2k4zptr"},
{"year":2014,"month":11,"date":28,"site":"长沙","n":"","class":"","info":"全集视频在这。记得当时节目组微博私信我的时候，小伙伴提醒小心是骗子啊，笑。确实，因为我的路才刚刚开始。后来好奇问导演组，到底是怎样知道我的啊，导演说因为组里大家都很喜欢你的歌啊。世界上很多事真的就是这么简单。唯有继续努力。这次也认识了很棒的民谣人，不虚此行。谢谢电视机前的你！晚安","url":"http://weibo.com/1759006061/BypSir8Dd"},
{"year":2014,"month":11,"date":9,"site":"北京 西区剧场","n":"","class":"","info":"好多朋友问下一站演出来不来我们这。我当然会去，可又一点也不着急。我知道那些美丽的地方在，不想走马观花地看。我想每去一个地方就好好感受，一一看遍。所以远方的人啊，请你也不要急，等我慢慢地走过这大好河山，与你相见。 ​​​​","url":"http://weibo.com/1759006061/BAb97qGjw"},
{"year":2015,"month":5,"date":20,"site":"广州 中央车站","n":"","class":"","info":"？？？","url":"http://weibo.com/1759006061/CixB16yWk"},
{"year":2015,"month":5,"date":23,"site":"济南 山东大学","n":"","class":"","info":"列车南下，到月末会一直在路上，济南，重庆，广州，成都，北京。今天下午2:00山东大学洪家楼校区108教室见","url":"http://weibo.com/1759006061/Cj85rarLK"},
{"year":2015,"month":5,"date":19,"site":"广州 中山大学","n":"","class":"","info":"明晚在广州中央车站音乐厅的演出，乐童上官方预售票包括所有现场票，都已全部卖光。提醒大家，不要来现场买票。如果买了套票同伴有事不能来，转发这条呼唤愿意一起来的伙伴分享。另外，本次演出乐视音乐会全程直播，在家里也可以看直播。听说有位小伙会在现场向心爱的姑娘求婚，先表达祝福呢！","url":"http://weibo.com/sumersmile"},
{"year":2015,"month":7,"date":11,"site":"北京 中山音乐堂","n":"","class":"","info":"？？？","url":"http://weibo.com/sumersmile"},
{"year":2015,"month":5,"date":27,"site":"重庆 少数花园","n":"","class":"","info":"？？？","url":"http://weibo.com/sumersmile"},
{"year":2015,"month":5,"date":29,"site":"成都 方所文化","n":"","class":"","info":"成都的庭院分享会，谢谢城市之音张舒来陪我一起和大家聊天。有一位朋友问，你的歌风格好像一成不变。我回答，为什么要急着变呢，能够保持着最初的模样，是一件多么不容易的事情。我的变，是诗歌的变，时间的变，情感的变。至于丰富的音乐元素，我才刚刚开始，不着急拿来堆砌。 ","url":"http://weibo.com/1759006061/CkIwD6uRO"},
{"year":2015,"month":6,"date":27,"site":"济南 山东剧院","n":"","class":"","info":"不知不觉，已离家千万里。","url":"http://weibo.com/1759006061/CoFOtiIji"},
{"year":2015,"month":6,"date":9,"site":"北京 北京大学","n":"","class":"","info":"在北大的分享会，我开场问大家一个问题：你觉得文艺是什么。一位男孩站起来说，文艺就是文化和艺术，是感性的抒发。一下就说中了关键的地方。文艺是非常宽泛的，是人类区别于动物的标志，是丰富多样的精神世界。我从不以文艺青年而自嘲，欣然接近各个艺术门类。再说，从小在班里就是文艺委员呢[害羞] ​​​​","url":"https://weibo.com/1759006061/Cm4spBJGr"},
{"year":2015,"month":6,"date":13,"site":"长沙 红色剧院","n":"","class":"","info":"花菇凉扮起来[哈哈]我和小伙伴们都准备好了","url":"http://weibo.com/1759006061/Cmntb52cr"},
{"year":2015,"month":6,"date":17,"site":"上海 复旦大学","n":"","class":"","info":"转眼今晚将会是庭院分享会最后一站复旦大学","url":"http://weibo.com/1759006061/CmWYGrzN4"},
{"year":2015,"month":6,"date":12,"site":"长沙 湖南大学","n":"","class":"","info":"在湖大遇到一位女孩，让我想到了村上春树笔下的初美。","url":"http://weibo.com/1759006061/CmXAElOSM"},
{"year":2016,"month":4,"date":28,"site":"澳门 黑沙海滩","n":"","class":"","info":"HUSH MUSIC CONCERT","url":"http://weibo.com/1759006061/DsTfeBMpl"},
{"year":2016,"month":12,"date":21,"site":"宁波 宁波大剧院","n":"18","class":"","info":"十八城巡演最后的收官站宁波，因为北大师兄师妹...","url":"http://weibo.com/1759006061/Enj9pnG0N"},
{"year":2016,"month":9,"date":2,"site":"深圳 南山文体中心","n":"1","class":"","info":"我说再见某年某月，你说今夜不眠。","url":"http://weibo.com/1759006061/E6sUk8Gy9"},
{"year":2016,"month":9,"date":11,"site":"上海 上海交响音乐团","n":"2","class":"","info":"？？？","url":"http://weibo.com/sumersmile"},
{"year":2016,"month":9,"date":24,"site":"广州 中央车站","n":"3","class":"","info":"？？？","url":"http://weibo.com/sumersmile"},
{"year":2016,"month":10,"date":14,"site":"武汉 武汉剧院","n":"4","class":"","info":"昨晚忘了关窗，早晨被江边航船汽笛声叫醒了。","url":"http://weibo.com/1759006061/EcXgSccwI"},
{"year":2016,"month":12,"date":14,"site":"台北","n":"","class":"","info":"在台北风潮音乐旗舰店，做了非常用心的corner","url":"http://weibo.com/1759006061/Em7Tdke3y"},
{"year":2016,"month":10,"date":16,"site":"南京 文化馆大剧院","n":"5","class":"","info":"一城又一城 到达然后告别 南京站看到了那些默默举起的横幅","url":"http://weibo.com/1759006061/Edz44yNbg"},
{"year":2016,"month":10,"date":20,"site":"杭州 杭州大剧院","n":"6","class":"","info":"“我们不一样 我们都很棒”","url":"http://weibo.com/1759006061/Ee0jS849i"},
{"year":2016,"month":10,"date":22,"site":"重庆 人民大厦","n":"7","class":"","info":"？？？","url":"http://weibo.com/sumersmile"},
{"year":2016,"month":10,"date":23,"site":"成都 锦城艺术宫","n":"8","class":"","info":"在成都与橙色有关的日常","url":"http://weibo.com/1759006061/EewevqUa0"},
{"year":2016,"month":10,"date":28,"site":"厦门 钢琴音乐厅","n":"10","class":"","info":"聊聊古生物鲎、磕海瓜子、踏浪吹海风！","url":"http://weibo.com/1759006061/Ef385dl14"},
{"year":2016,"month":11,"date":5,"site":"长沙 湖南大剧院","n":"12","class":"","info":"花，旧友，笑顔，手写信。","url":"http://weibo.com/1759006061/Egf1W4EnA"},
{"year":2016,"month":11,"date":6,"site":"昆明 胜利堂剧院","n":"13","class":"","info":"收到一份特别礼物","url":"http://weibo.com/1759006061/Egrk763aN"},
{"year":2016,"month":11,"date":12,"site":"北京 世纪剧院","n":"14","class":"","info":"其实很多话在心里","url":"http://weibo.com/1759006061/EhyErqnV5"},
{"year":2016,"month":11,"date":18,"site":"西安 西安音乐厅","n":"15","class":"","info":"？？？？","url":"http://weibo.com/sumersmile"},
{"year":2016,"month":10,"date":26,"site":"无锡 演艺剧院","n":"9","class":"","info":"本月巡演倒数第二站！","url":"http://weibo.com/1759006061/EePgbkXGS"},
{"year":2016,"month":11,"date":20,"site":"苏州 独墅湖影剧院","n":"16","class":"","info":"有的人心里，藏着一片幽暗森林；有的人心里，留着一个光亮出口。","url":"http://weibo.com/1759006061/EizAa2VTz"},
{"year":2016,"month":9,"date":3,"site":"兰州 黄河剧院","n":"","class":"","info":"接着飞兰州，也是第一次去到西北演出，期待","url":"http://weibo.com/1759006061/E68l6uHxs"},
//{"year":2016,"month":11,"date":24,"site":"北京","n":"","class":"","info":"卖萌谁不会","url":"http://weibo.com/1759006061/Ej54xblbw"},
{"year":2016,"month":7,"date":30,"site":"张北","n":"","class":"","info":"去往张北草原音乐节的路上了！","url":"http://weibo.com/1759006061/E1g0Otvpf"},
{"year":2016,"month":12,"date":9,"site":"天津 津湾大剧院","n":"17","class":"","info":"趁夜色发个自拍大头照","url":"http://weibo.com/1759006061/Elmwp7x1P"},
//{"year":2016,"month":2,"date":8,"site":"滨州","n":"","class":"","info":"大年初一梳妆起来拜个年","url":"http://weibo.com/1759006061/DgR0D3RIt"},
{"year":2016,"month":1,"date":4,"site":"杭州","n":"","class":"","info":"请用一个词来形容这只正在尝试新发型的少女","url":"http://weibo.com/1759006061/DbzFsbdSy"},
{"year":2016,"month":6,"date":19,"site":"深圳","n":"","class":"","info":"晚上和风专场，发表一下「拙见」","url":"http://weibo.com/1759006061/DAX7vE767"},
{"year":2016,"month":6,"date":10,"site":"上海","n":"","class":"","info":"第一次看到新书《可以不可以》","url":"http://weibo.com/1759006061/DzC8xeBBe"},
{"year":2016,"month":8,"date":14,"site":"东京 月見ル君想ウ","n":"","class":"","info":"青山 月見ル君想ウ。","url":"http://weibo.com/1759006061/E3dAV86yf"},
{"year":2016,"month":10,"date":30,"site":"东莞 东莞市文化馆","n":"11","class":"","info":"今天是万圣节前夜","url":"http://weibo.com/1759006061/EffTiqNLb"},
{"year":2017,"month":4,"date":24,"site":"上海","n":"","class":"","info":"「从诗到歌的一些“温柔试探”」","url":"http://weibo.com/1759006061/F011e4aD3"},
{"year":2017,"month":6,"date":18,"site":"上海","n":"","class":"","info":"昨天。","url":"http://weibo.com/1759006061/F8xDnvMw0"},
{"year":2017,"month":4,"date":28,"site":"长沙","n":"","class":"","info":"唱了一首从未唱过的新歌。","url":"http://weibo.com/1759006061/F0O8wwTXR"},
{"year":2017,"month":6,"date":3,"site":"武藏野","n":"","class":"","info":"Nature Weekend. ","url":"http://weibo.com/1759006061/F67Evngu9"},
{"year":2017,"month":6,"date":20,"site":"克罗地亚","n":"","class":"","info":"Croatia | 克罗地亚。","url":"http://weibo.com/1759006061/F8FZTxSz6"},
{"year":2017,"month":7,"date":21,"site":"西安 西安音乐厅","n":"","class":"","info":"“长安县，阳光就很灿烂～！”","url":"http://weibo.com/1759006061/FdzFcbdrN"},
{"year":2017,"month":11,"date":25,"site":"","n":"","class":"","info":"新专辑《步履不停》于今日正式上架发售！","url":"http://weibo.com/1759006061/FwHhTdpWt"},
{"year":2018,"month":1,"date":12,"site":"北京 如论讲堂","n":"1","class":"","info":"深夜悄悄发图。<br>&#12288;&#12288;<br>&#12288;&#12288;从事音乐创作第四年，<br>&#12288;&#12288;很多东西变了，但又好像没变。<br>&#12288;&#12288;<br>&#12288;&#12288;感谢你一直在。<br>&#12288;&#12288;下一站，1.26，深圳保利剧院。","url":"http://weibo.com/1759006061/FEx0BvWuv"},
{"year":2018,"month":2,"date":3,"site":"上海 美琪大剧院","n":"3","class":"","info":"团队乐队大家，这一路辛苦了","url":"http://weibo.com/1759006061/G1AwSwYbI"},
{"year":2018,"month":1,"date":26,"site":"深圳 保利剧院","n":"2","class":"","info":"薄雾里的晨钟，是隐约的光亮。","url":"http://weibo.com/1759006061/G0WtbE6IO"},
{"year":2018,"month":3,"date":10,"site":"东京 月見ル君思ウ","n":"","class":"","info":"昨晚的纪念演出，尝试了这样的发型。","url":"http://weibo.com/1759006061/G6LOgbjl1"},
{"year":2018,"month":3,"date":24,"site":"苏州 文化艺术中心","n":"4","class":"","info":"唱完了！","url":"http://weibo.com/1759006061/G8UfzFN2c"},
{"year":2018,"month":12,"date":16,"site":"杭州 杭州大剧院","n":"11","class":"","info":"2018“薄雾里的晨钟”演唱会<br>&#12288;&#12288;从年初到年末，走过十一个城市，<br>&#12288;&#12288;最后杭州收官战顺利结束！！🎄🎄🎄<br>&#12288;&#12288;<br>&#12288;&#12288;感谢每一位来到现场的朋友，<br>&#12288;&#12288;感谢@FOTILE方太 一整年的支持陪伴。<br>&#12288;&#12288;<br>&#12288;&#12288;感谢团队每一位伙伴的专业和敬业，<br>&#12288;&#12288;有星宇阿伦带领的演奏乐队；<br>&#12288;&#12288;有冀翔老师带领的音响团队；<br>&#12288;&#12288;有早川绫子老师带领的灯光团队。<br>&#12288;&#12288;<br>&#12288;&#12288;就像昨晚在舞台上说过的，<br>&#12288;&#12288;这是一个“很快”的时代，<br>&#12288;&#12288;变化那么多，给人前所未有的重负感，<br>&#12288;&#12288;快到似乎让人无暇顾及，<br>&#12288;&#12288;那些有关“诗意”的东西。<br>&#12288;&#12288;<br>&#12288;&#12288;但我永远不会怀疑诗歌和音乐的力量。<br>&#12288;&#12288;<br>&#12288;&#12288;因为它会帮我们重新找回，<br>&#12288;&#12288;我们生活的最终目的。<br>&#12288;&#12288;新的一年，再见。","url":"http://weibo.com/1759006061/H7H2kpzHt"},
{"year":2018,"month":9,"date":1,"site":"西安 西安音乐厅","n":"9","class":"","info":"薄雾里的晨钟，在西安。","url":"http://weibo.com/1759006061/GxvvsEyWY"},
{"year":2018,"month":8,"date":12,"site":"沈阳 盛京大剧院","n":"8","class":"","info":"第一次到这里唱歌，感谢诸位来到现场听歌的人","url":"http://weibo.com/1759006061/GuqCbyxdJ"},
{"year":2018,"month":7,"date":21,"site":"武汉 武汉剧院","n":"7","class":"","info":"夏树苍翠，长夜如歌。","url":"http://weibo.com/1759006061/Gr71ArP1u"},
{"year":2018,"month":9,"date":22,"site":"石家庄 勒泰中心","n":"10","class":"","info":"谢谢石家庄的小伙伴，谢谢你们愿意来现场","url":"http://weibo.com/1759006061/GAEA3fyhd"},
{"year":2018,"month":4,"date":30,"site":"长沙 湖南大剧院","n":"5","class":"","info":"巡演第五场，长沙站，也唱好了！","url":"http://weibo.com/1759006061/Geximieho"},
{"year":2018,"month":6,"date":10,"site":"成都 锦城艺术宫","n":"6","class":"","info":"总在栀子花开的时候来成都。","url":"http://weibo.com/1759006061/GkJShE1Aq"},
{"year":2019,"month":5,"date":10,"site":"上海 1862艺术中心","n":"","class":"","info":"演出完最开心😃<br>&#12288;&#12288;这时候应该趁夜色溜达一下<br>&#12288;&#12288;还是应该赶紧休息？<br>&#12288;&#12288;你说呢～ ​​​​","url":"http://weibo.com/1759006061/HtAZtlMDC"},
];
historylist2.sort(function (a,b){return 10000*(a.year-b.year)+100*(a.month-b.month)+(a.date-b.date);});