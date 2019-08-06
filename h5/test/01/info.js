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
{ "img":"images/black cat.svg","info":["Qu Yuan fENG hE","曲院风荷的优雅曲院风荷的优雅曲院风荷的优"]},
{ "img":"images/7.jpg","info":["Qu Yuan fENG hE","夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚"]},
{ "img":"images/8.jpg","info":["Qu Yuan fENG hE","秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事"]},
{ "img":"images/camera.svg","info":["A camera is an optical instrument to capture still images or to record moving images, which are stored in a physical medium such as in a digital system or on photographic film. ","最早的照相机结构十分简单，仅包括暗箱、镜头和感光材料。"]},
{ "img":"images/glasses.svg","info":["Glasses, also known as eyeglasses or spectacles, are devices consisting of glass or hard plastic lenses mounted in a frame that holds them in front of a person's eyes, typically using a bridge over the nose and arms which rest over the ears.","据说是一位名叫阿尔马托的光学家和一位生活在比萨市的意大利人斯皮纳发明的。"]},
{ "img":"images/shoes.svg","info":["A shoe is an item of footwear intended to protect and comfort the human foot, while the wearer is doing various activities.","以皮、布、木、草、塑料丝等为材料制作的穿在脚上、走路时着地的物品，是人类必不可少的生活用品。"]},
{ "img":"images/bag.svg","info":["A bag (also known regionally as a sack) is a common tool in the form of a non-rigid container. ","布艺包的面料一般为帆布、牛仔、棉的内衬一般为尼龙和棉质，一般来说，布艺包都可干洗或者水洗，条纹较多、颜色较亮丽的布艺包一定要干洗，否则会褪色。"]},
];	

//News
var news=[
{ "date":["Wednesday, 10 August 2011 4:14","2011年8月10日 4:14，星期三"],"title":["imus qui blanditii","子庙的夜晚夫子庙的夜晚"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","Z-index 可用于将在一个元素放置于另一元素之后。"]},
{ "date":["Tuesday, 2 August 2011 16:32","2011年8月2日 16:32，星期二"],"title":["iis praesentium volupt","曲院风荷的优雅曲院风荷的"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","Z-index 可用于将在一个元素放置于另一元素之后。"]},
{ "date":["Monday, 8 August 2011 6:18","2011年8月8日 6:18，星期一"],"title":["tiis praesentium","茅家铺的清新茅家铺的清新"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","JavaScript 是世界上最流行的脚本语言。最流行的脚本语言"]},
{ "date":["Wednesday, 10 August 2011 14:14","2011年8月10日 14:14，星期三"],"title":["At vero eos et accusamus","茅家铺的清新茅的清新"],"info":["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","Z-index 可用于将在一个元素放置于另一元素之后。"]},
];	

var lang=["EN","中"];

var navinames= [
{ "Home":"Home","About":"About","Photos":"Photos","News":"News","Contacts":"Contacts"},
{ "Home":"首页","About":"关于","Photos":"图册","News":"最新","Contacts":"联系"},
];

var address= [
["Our Contacts","Country:","USA","State:","California","City:","San Diego","Telephone:","+354 5635600","Email:","smartnet@mail.com"],
["联系方式","省份:","淮海省","城市:","桐滨市","地址:","乌古木大街117号","电话:","1585635600X","Email:","abc@abc.com"],
];

var contactform= [
["Contact Form","Your Name:","Your E-mail:","Your Message:","Send","Clear"],
["留言板","姓名:","邮箱:","内容:","发送","清空"],
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

