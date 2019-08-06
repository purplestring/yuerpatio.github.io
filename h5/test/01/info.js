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
{ "img":"images/6.jpg","info":["Qu Yuan fENG hE","曲院风荷的优雅曲院风荷的优雅曲院风荷的优"]},
{ "img":"images/7.jpg","info":["Qu Yuan fENG hE","夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚"]},
{ "img":"images/8.jpg","info":["Qu Yuan fENG hE","秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事"]},
{ "img":"images/9.jpg","info":["Qu Yuan fENG hE","集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光"]},
{ "img":"images/10.jpg","info":["Qu Yuan fENG hE","茅家铺的清新茅家铺的清新茅家铺的清新"]},
{ "img":"images/11.jpg","info":["Qu Yuan fENG hE","美丽洲的神秘"]},
{ "img":"images/12.jpg","info":["Qu Yuan fENG hE","曲院风荷的优雅曲院风荷的优雅曲院风荷的优"]},
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
{ "Home":"首页","About":"关于","Photos":"照片","News":"最新","Contacts":"联系"},
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

