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
{"title":["Coffee","咖啡"],"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic.","01 探索火星七年，行驶21公里（13英里），攀登了368米（1207英尺），在火星表面钻洞22次，发现远古火星的环境条件有利于生命的存在"]},
{"title":["Tea","茶"],"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic.","02 朱诺号最近飞掠木星时，拍摄到了这张引人注目的美景，除了反气旋风暴木星大红斑外，我们还能看到色彩斑斓的南赤道带，以及白色为主的南部热带区域。"]},
{"title":["Milk","牛奶"],"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudi andae sint et molestiae non recusandae itaque earum rerum hic.","03 卡西尼号的旅程已接近尾声，2017年9月15日，卡西尼号将比历史上任何一次都接近土星，他将坠向土星大气层。未来NASA将发射专门的探测生命的航天器去往土卫二，使命只有一个，寻找生命。"]},
];
	
//Waterfall
var waterpics=[
{ "img":"images/1.jpg","info":["Qu Yuan fENG hE","夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚"]},
{ "img":"images/2.jpg","info":["Qu Yuan fENG hE","秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事"]},
{ "img":"images/3.jpg","info":["Qu Yuan fENG hE","集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光"]},
{ "img":"images/4.jpg","info":["Qu Yuan fENG hE","茅家铺的清新茅家铺的清新茅家铺的清新"]},
{ "img":"images/5.jpg","info":["Qu Yuan fENG hE","美丽洲的神秘"]},
{ "img":"images/black cat.svg","info":["A black cat is a domestic cat with black fur that may be a mixed or specific breed, or a common domestic cat of no particular breed. ","黑猫属于猫科动物，泛指毛色通身黑色的猫。古书记载黑猫为镇宅、辟邪、招财之物。黑猫与孟买猫非常的类似，它们的身体也呈现漆黑色。"]},
{ "img":"images/eat1.svg","info":["Qu Yuan fENG hE","夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚"]},
{ "img":"images/8.jpg","info":["Qu Yuan fENG hE","秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事"]},
{ "img":"images/camera.svg","info":["A camera is an optical instrument to capture still images or to record moving images, which are stored in a physical medium such as in a digital system or on photographic film. ","最早的照相机结构十分简单，仅包括暗箱、镜头和感光材料。"]},
{ "img":"images/glasses.svg","info":["Glasses, also known as eyeglasses or spectacles, are devices consisting of glass or hard plastic lenses mounted in a frame that holds them in front of a person's eyes, typically using a bridge over the nose and arms which rest over the ears.","据说是一位名叫阿尔马托的光学家和一位生活在比萨市的意大利人斯皮纳发明的。"]},
{ "img":"images/shoes.svg","info":["A shoe is an item of footwear intended to protect and comfort the human foot, while the wearer is doing various activities.","以皮、布、木、草、塑料丝等为材料制作的穿在脚上、走路时着地的物品，是人类必不可少的生活用品。"]},
{ "img":"images/bag.svg","info":["A bag (also known regionally as a sack) is a common tool in the form of a non-rigid container. ","布艺包的面料一般为帆布、牛仔、棉的内衬一般为尼龙和棉质，一般来说，布艺包都可干洗或者水洗，条纹较多、颜色较亮丽的布艺包一定要干洗，否则会褪色。"]},
];	

//News
var news=[
{ "date":["Wednesday, 10 August 2011 4:14","2011年8月10日 4:14，星期三"],"title":["imus qui blanditii","第二张专辑《范特西》"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","发行个人第二张专辑《范特西》，专辑名称来自英文“Fantasy”的音译[10]；凭借这张专辑周杰伦在2002年度台湾第13届金曲奖颁奖典礼中斩获“最佳作曲人奖”、“最佳专辑制作人奖”以及“最佳流行音乐演唱专辑奖”等五项大奖。"]},
{ "date":["Tuesday, 2 August 2011 16:32","2011年8月2日 16:32，星期二"],"title":["iis praesentium volupt","第三张专辑《八度空间》"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","发行个人第三张专辑《八度空间》；9月28日个人首次世界巡回演唱会“THE ONE”于台北市立体育场拉开帷幕。"]},
{ "date":["Monday, 8 August 2011 6:18","2011年8月8日 6:18，星期一"],"title":["tiis praesentium","《时代》杂志专访"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","出道仅三年便接受美国《时代》杂志专访，并成为亚洲版的封面人物[7]；周杰伦是继王菲、张惠妹之后，第三位出现在《时代》杂志亚洲版封面的华人歌手，并被该杂志赞誉为“新一代亚洲流行天王”[7]；2003年7月，全亚洲超过50家电台定7月16日为周杰伦日，并同步首播其第四张个人新专辑《叶惠美》中的主打歌曲《以父之名》[12]，此后每张专辑必定有一首中国风的歌曲。"]},
{ "date":["Wednesday, 10 August 2011 14:14","2011年8月10日 14:14，星期三"],"title":["At vero eos et accusamus","第五张专辑《七里香》"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","发行个人第五张专辑《七里香》，并凭借该专辑首次获得世界音乐大奖“大中华区最畅销艺人”[13]；同时，根据国际唱片业协会IFPI的统计，专辑七里香销量位居年度世界第42位，[14]；同年以歌曲《龙拳》首次亮相春节联欢晚会。"]},
];	

var lang=["EN","中"];

var navinames= [
{ "Home":"Home","About":"About","Photos":"Photos","News":"News","Contacts":"Contacts"},
{ "Home":"首页","About":"关于","Photos":"图册","News":"最新","Contacts":"联系"},
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
["更多信息：","集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光"],
];

var historylist= [
{"year":2004,"month":3,"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id","风光集贤亭的风光集贤亭的风光集贤亭的风"]},
{"year":2007,"month":7,"info":["Namlibero tempore, cum soluta nobis est eligendi optio","茅家铺的清新茅家铺的清"]},
{"year":2011,"month":12,"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque","的夜晚夫子庙的夜晚夫子庙的"]},
{"year":2019,"month":5,"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque","的夜晚夫子庙的夜晚夫子庙的"]},
{"year":2014,"month":2,"info":["Namlibero tempore, cum soluta nobis est eligendi optio cumque","夫子庙的夜晚夫子庙子庙的夜晚夫子庙的"]},
];

