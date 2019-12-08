var book=[{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "诗经",FILE: "file/",F_EVAL: "line.length<20 && (line.indexOf('风')==1 || line.indexOf('雅')==1 || line.indexOf('风')==1)",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "尚书",FILE: "file/",F_EVAL: "line.indexOf('　　')==0 && line.length<18 && line.indexOf('书')==3",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "周礼",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('.')==1"},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "仪礼",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('	')!=0 && line.indexOf('第')>2 && line.indexOf('第')<8", },
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "礼记",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('　　《礼记')==0",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "周易",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('　　')==0 && line[4]=='.'",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "春秋左传",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('　　◇')==0",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "春秋公羊传",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('公（经')==3",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "春秋谷梁传",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('公（经')==3",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "论语",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('第')==4",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "尔雅",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('释')==2 && line.indexOf('第')==4",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "孝经",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('○')==2",},
{F_GROUP: "古籍",S_GROUP: "十三经",TITLE: "孟子",FILE: "file/",F_EVAL: "line.length<20 && line.indexOf('卷')==2",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "史记",FILE: "file/",F_EVAL: "line.length<35 && line.indexOf('卷')==0",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "汉书",FILE: "filel/",F_EVAL: "line.length<35 && line.indexOf('卷')==0",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "后汉书",FILE: "filel/",F_EVAL: "line.length<35 && (line.indexOf('后汉书卷')==0 || line.indexOf('后汉书志')==0)"},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "三国志",FILE: "filel/",F_EVAL: "line.indexOf('志卷')==3 && line.indexOf('证')==-1",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "晋书",FILE: "filel/",F_EVAL: "line[0]!='　' && (line[1]=='第' || line[2]=='第')",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "宋书",FILE: "filel/",F_EVAL: "(line[1]=='第' || line[2]=='第') && line.length<30 && line.length>6",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "南齐书",FILE: "file/",F_EVAL: "(line[1]=='第' || line[2]=='第') && line.length<30",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "梁书",FILE: "file/",F_EVAL: "(line[1]=='第' || line[2]=='第') && line.length<50 && line[0]!='　'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "陈书",FILE: "file/",F_EVAL: "line[2]=='第' && line.length<30",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "魏书",FILE: "filel/",F_EVAL: "line[0]!='　' && (line[1]=='第' || line[2]=='第')",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "北齐书",FILE: "file/",F_EVAL: "line[0]=='第' && line.length<80",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "周书",FILE: "file/",F_EVAL: "line[2]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "隋书",FILE: "filel/",F_EVAL: "line[0]!='　' && (line[1]=='第' || line[2]=='第')",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "南史",FILE: "filel/",F_EVAL: "line.indexOf('南史卷')>=0 && line.length<30",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "北史",FILE: "filel/",F_EVAL: "(line[2]=='第' || line[3]=='第') && line.length<30",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "旧唐书",FILE: "filel/",F_EVAL: "(line[3]=='第' || line[4]=='第' || line[2]=='●') && line.indexOf('。')<0 && line.indexOf('：')<0",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "新唐书",FILE: "filel/",F_EVAL: "(line[2]=='第' || line[3]=='第') && line.length<30 && line.length>6"},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "新五代史",FILE: "file/",F_EVAL: "line.length<30 && line.indexOf('第')>1 && line[0]!='	'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "旧五代史",FILE: "file/",F_EVAL: "line.length<30 && line[0]!='	' && line.indexOf('。')<0 && line.indexOf('：')<0 && line.indexOf('（')<0 && line.indexOf('-')<0",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "宋史",FILE: "filel/",F_EVAL: "(line[1]=='第' || line[2]=='第'|| line[3]=='第') && line.length<30 && line[0]!='　'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "辽史",FILE: "file/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "金史",FILE: "filel/",F_EVAL: "(line[1]=='第' || line[2]=='第') && line.length<12",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "元史",FILE: "filel/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "明史",FILE: "filel/",F_EVAL: "(line[1]=='第' || line[2]=='第') && line.length<36 && line[0]!='　'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "清史稿",FILE: "filel/",F_EVAL: "(line.indexOf('本纪')==2 || line.indexOf('志')==2 || line.indexOf('表')==2 || line.indexOf('列传')==2) && line.length<20 && line.length>5 && line.indexOf('略')==-1",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "战国策",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "国语",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "竹书纪年",FILE: "file/",F_EVAL: "line[0]=='竹'",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "资治通鉴",FILE: "filel/",F_EVAL: "line.length<12 && line.indexOf('●卷第')==0",},
{F_GROUP: "古籍",S_GROUP: "史",TITLE: "新元史",FILE: "filel/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "楚辞",FILE: "file/",F_EVAL: "line.indexOf('	')!=0 && line.length<12 && line.indexOf('作者')==-1 && line.indexOf('：')==-1 && line.indexOf('。')==-1 && line.indexOf('？')==-1 && line.indexOf('，')==-1",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "乐府诗集",FILE: "file/",F_EVAL: "line[0]=='卷' && line.length<16",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "宋词三百首",FILE: "file/",F_EVAL: "(line.indexOf('、【')>0 && line.indexOf('、【')<5 )|| line.indexOf('首)')>0",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "唐诗三百首",FILE: "file/",F_EVAL: "line.indexOf('：')>1 && line[0]<4",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "全唐诗",FILE: "filel/",F_EVAL: "line[0]==' ' && line[3]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "玉台新咏",FILE: "file/",F_EVAL: "line[0]=='●'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "古诗源",FILE: "file/",F_EVAL: "line[0]=='●'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "古谣谚",FILE: "file/",F_EVAL: "line[0]=='卷' && line[3]!='。'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "千家诗",FILE: "file/",F_EVAL: "line[2]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "千字文",FILE: "file/",F_EVAL: "line[0]=='千'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "三字经",FILE: "file/",F_EVAL: "line[1]=='.'",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "笠翁对韵",FILE: "file/",F_EVAL: "line[2]==' ' || line[3]==' '",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "声律启蒙",FILE: "file/",F_EVAL: "line[1]==' ' || line[2]==' '",},
{F_GROUP: "古籍",S_GROUP: "诗文",TITLE: "增广贤文",FILE: "file/",F_EVAL: "line[0]=='增'",},
{F_GROUP: "古籍",S_GROUP: "随笔",TITLE: "围炉夜话",FILE: "file/",F_EVAL: "line[1]=='围'",},
{F_GROUP: "古籍",S_GROUP: "随笔",TITLE: "小窗幽记",FILE: "file/",F_EVAL: "line.indexOf('卷')==0",},
{F_GROUP: "古籍",S_GROUP: "随笔",TITLE: "小窗自记",FILE: "file/",F_EVAL: "line.indexOf('小')==0",},
{F_GROUP: "古籍",S_GROUP: "随笔",TITLE: "幽梦影",FILE: "file/",F_EVAL: "line.indexOf('幽梦影')==2",},
{F_GROUP: "古籍",S_GROUP: "随笔",TITLE: "夜航船",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "随笔",TITLE: "菜根谭",FILE: "file/",F_EVAL: "line.length<12 && line.indexOf('●')==4",},
{F_GROUP: "古籍",S_GROUP: "杂集",TITLE: "古文观止",FILE: "file/",F_EVAL: "line.indexOf('卷')==0 || line.indexOf('【')==0",},
{F_GROUP: "古籍",S_GROUP: "杂集",TITLE: "吕氏春秋",FILE: "file/",F_EVAL: "line[0]=='《'",},
{F_GROUP: "古籍",S_GROUP: "杂集",TITLE: "春秋繁露",FILE: "file/",F_EVAL: "line[2]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "杂集",TITLE: "全唐文",FILE: "filel/",F_EVAL: "line[4]=='●'",},
{F_GROUP: "古籍",S_GROUP: "杂集",TITLE: "昭明文选",FILE: "filel/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "红楼梦",FILE: "filel/",F_EVAL: "line.length>10 && line.length<40 && line.indexOf('第')==0 && line.indexOf('回')>1 && line.indexOf('回')<8",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "三国演义",FILE: "file/",F_EVAL: "line.indexOf('第')>0 && line.indexOf('第')<3 && line.indexOf('回')>0 && line.indexOf('回')<8",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "水浒传",FILE: "filel/",F_EVAL: "line.length>10 && line.length<28 && line.indexOf('第')==0 && line.indexOf('回')>1 && line.indexOf('回')<6",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "西游记",FILE: "filel/",F_EVAL: "line.length>10 && line.length<28 && line.indexOf('第')==0 && line.indexOf('回')>1 && line.indexOf('回')<6",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "封神演义",FILE: "file/",F_EVAL: "line.length>10 && line.length<18 && line.indexOf('第')==2 && line.indexOf('回')>3 && line.indexOf('回')<9",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "金瓶梅",FILE: "filel/",F_EVAL: "line.length>10 && line.length<28 && line.indexOf('第')==0 && line.indexOf('回')>1 && line.indexOf('回')<6",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "镜花缘",FILE: "file/",F_EVAL: "line[4]=='第' && line.indexOf('回')>5 && line.indexOf('回')<10 && line.indexOf('0')<0",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "聊斋志异",FILE: "file/",F_EVAL: "line.length<8 && line.indexOf(' ')==-1",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "儒林外史",FILE: "file/",F_EVAL: "line.indexOf('第')>0 && line.indexOf('第')<3 && line.indexOf('回')>0 && line.indexOf('回')<8",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "东周列国志",FILE: "filel/",F_EVAL: "line[2]=='第' && line.length<40",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "搜神记",DYNASTY: "东晋",FILE: "file/",F_EVAL: "line[0]=='搜'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "西厢记",DYNASTY: "元",FILE: "file/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "老残游记",FILE: "file/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "窦娥冤",FILE: "file/",F_EVAL: "line.indexOf('《')==0",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "喻世明言",FILE: "file/",F_EVAL: "line[4]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "警世通言",FILE: "file/",F_EVAL: "line[4]=='警'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "醒世恒言",FILE: "file/",F_EVAL: "line[0]=='第' || line[1]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "型世言",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "初刻拍案惊奇",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "二刻拍案惊奇",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "官场现形记",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "隋唐演义",FILE: "filel/",F_EVAL: "line[2]=='第' && line.length<29 && line.length>16",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "三侠五义",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "七侠五义",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "七剑十三侠",FILE: "filel/",F_EVAL: "line[0]=='第' && line.length>16",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "彭公案",FILE: "filel/",F_EVAL: "line[2]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "狄公案",DYNASTY: "清",FILE: "file/",F_EVAL: "line[0]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "施公案",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "龙图公案",FILE: "filel/",F_EVAL: "line[2]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "儿女英雄传",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "醒世姻缘传",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "说岳全传",FILE: "file/",F_EVAL: "line[2]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "济公全传",DYNASTY: "清",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "飞龙全传",FILE: "filel/",F_EVAL: "line[0]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "梼杌闲评",FILE: "filel/",F_EVAL: "line[0]=='梼'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "歧路灯",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "花月痕",DYNASTY: "清",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "二十年目睹之怪现状",FILE: "filel/",F_EVAL: "line[0]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "绿野仙踪",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "孽海花",FILE: "filel/",F_EVAL: "line[0]=='第' || line[1]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "九尾龟",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "青楼梦",FILE: "filel/",F_EVAL: "line[1]=='第'",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "品花宝鉴",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "海上花列传",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "禅真逸史",FILE: "file/",F_EVAL: "line[3]=='第' && line.length<29",},
{F_GROUP: "古籍",S_GROUP: "叙事",TITLE: "女仙外史",FILE: "filel/",F_EVAL: "line[0]=='第'",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "本草纲目",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "金匮要略",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "黄帝内经灵枢",FILE: "file/",F_EVAL: "line.indexOf('第')>0 && line.indexOf('第')<12",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "黄帝内经素问",FILE: "file/",F_EVAL: "line.indexOf('第')>5 && line.indexOf('第')<16",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "伤寒论",FILE: "file/",F_EVAL: "line[2]=='辨'",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "神农本草经",FILE: "file/",F_EVAL: "line[2]=='神' || line[3]=='部' || line[4]=='部'",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "肘后备急方",FILE: "file/",F_EVAL: "line.indexOf('第')>5 && line.indexOf('第')<18 && line.length<20 && line.indexOf('。')==-1",},
{F_GROUP: "古籍",S_GROUP: "医书",TITLE: "备急千金要方",FILE: "file/",F_EVAL: "line[2]=='卷' || (line[2]=='《' && line[3]=='备')",},
{F_GROUP: "古籍",S_GROUP: "佛经",TITLE: "金刚经",FILE: "file/",F_EVAL: "line.indexOf('第')==0",},
{F_GROUP: "古籍",S_GROUP: "佛经",TITLE: "六祖坛经",FILE: "file/",F_EVAL: "line[1]=='.'",},
{F_GROUP: "古籍",S_GROUP: "佛经",TITLE: "心经",FILE: "file/",F_EVAL: "line.indexOf('摩')>0",},
{F_GROUP: "古籍",S_GROUP: "佛经",TITLE: "四十二章经",FILE: "file/",F_EVAL: "line[2]=='四'",},
{F_GROUP: "古籍",S_GROUP: "佛经",TITLE: "正法华经",FILE: "file/",F_EVAL: "line.indexOf('品第')>0",},
{F_GROUP: "古籍",S_GROUP: "道藏",TITLE: "道德经",FILE: "file/",F_EVAL: "line.length<12 && line.indexOf('章')>0 && line.indexOf('章')<6",},
{F_GROUP: "古籍",S_GROUP: "道藏",TITLE: "庄子",FILE: "file/",F_EVAL: "line.indexOf('卷')==2",},
{F_GROUP: "古籍",S_GROUP: "道藏",TITLE: "列子",FILE: "file/",F_EVAL: "line[2]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "道藏",TITLE: "五灯会元",FILE: "filel/",F_EVAL: "line.indexOf('五灯会元')==2",},
{F_GROUP: "古籍",S_GROUP: "道藏",TITLE: "云笈七签",FILE: "filel/",F_EVAL: "line.indexOf('云笈七签')==2",},
{F_GROUP: "古籍",S_GROUP: "道藏",TITLE: "抱朴子",FILE: "file/",F_EVAL: "line.indexOf('卷')==0 || line.indexOf('附录')==0 || line.indexOf('抱朴子')==0 || line.indexOf('卷第')==4",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "墨子",FILE: "file/",F_EVAL: "line.length<18 && line.indexOf('第')>=3 && line.indexOf('第')<=8",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "孙子兵法",FILE: "file/",F_EVAL: "line.indexOf('篇')==3 || line.indexOf('篇')==4",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "三十六计",FILE: "file/",F_EVAL: "line.indexOf('○')>0",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "孙膑兵法",FILE: "file/",F_EVAL: "line[0]=='『'",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "六韬",FILE: "file/",F_EVAL: "line[4]=='第'",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "黄帝阴符经",FILE: "file/",F_EVAL: "line[0]=='●'",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "荀子",FILE: "file/",F_EVAL: "line.length<8",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "鬼谷子",FILE: "file/",F_EVAL: "line.indexOf('.')==1",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "管子",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "商君书",FILE: "file/",F_EVAL: "line[2]=='第'",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "韩非子",FILE: "file/",F_EVAL: "(line.indexOf('韩非子卷')==2 && line.indexOf('竟')==-1) || (line[3]!='　' && line.indexOf('第')>=4 && line.indexOf('第')<=9)",},
{F_GROUP: "古籍",S_GROUP: "诸子",TITLE: "公孙龙子",FILE: "file/",F_EVAL: "(line[4]=='第' || line[5]=='第') && line.length<12",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "曾国藩家书",FILE: "file/",F_EVAL: "line.length<20 && (line.indexOf('国藩')==3 || line.indexOf('国藩')==4 || line.indexOf('：')>5 )",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "茶经",FILE: "file/",F_EVAL: "line[2]=='●'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "传习录",FILE: "file/",F_EVAL: "line[5]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "朱子语类",FILE: "filel/",F_EVAL: "line.indexOf('朱子语类')==2",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "九章算术",FILE: "file/",F_EVAL: "line[2]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "开元占经",FILE: "filel/",F_EVAL: "line.indexOf('开元占经　卷')==2",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "山海经",FILE: "file/",F_EVAL: "line.indexOf('山海经卷之')==2 && line.indexOf('竟')==-1",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "水经注",FILE: "file/",F_EVAL: "line.indexOf('卷')==0",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "天工开物",FILE: "file/",F_EVAL: "line[0]=='●'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "梦溪笔谈",FILE: "file/",F_EVAL: "line.length<18 && (line.indexOf('卷')==2 || line.indexOf('序')==2|| line.indexOf('笔')==3)",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "徐霞客游记",FILE: "file/",F_EVAL: "line.indexOf('.')==1",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "幼学琼林",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "贞观政要",FILE: "file/",F_EVAL: "line.indexOf('第')>=2 && line.indexOf('第')<=10 && line[0]!=' '",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "说苑",FILE: "file/",F_EVAL: "line[0]=='卷'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "林泉高致集",FILE: "file/",F_EVAL: "line[0]=='●'",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "经史百家杂钞",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "颜氏家训",FILE: "file/",F_EVAL: "line.indexOf('《')==0",},
{F_GROUP: "古籍",S_GROUP: "其它",TITLE: "弟子规",FILE: "file/",F_EVAL: "line[0]=='●'",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "阿Q正传",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "白鹿原",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "边城",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "茶馆",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "芙蓉镇",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "红高粱",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "呼兰河传",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "黄金时代",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "活着",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "家",AUTHOR: "巴金",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "京华烟云",AUTHOR: "林语堂",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "孔乙己",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "狂人日记",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "老残游记",AUTHOR: "刘鹗",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "鹿鼎记",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "骆驼祥子",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "穆斯林的葬礼",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "呐喊",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "撒哈拉的故事",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "色戒",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "射雕英雄传",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "神雕侠侣",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "受戒",AUTHOR: "汪曾祺",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "四世同堂",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "围城",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "我与地坛",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "笑傲江湖",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "子夜",AUTHOR: "茅盾",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "流浪地球",AUTHOR: "刘慈欣",FILE: "filel/",F_EVAL: "line[1]=='.'",},
{F_GROUP: "今人",S_GROUP: "小说",TITLE: "临高启明",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "柳如是别传",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "人间词话",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "荒芜英雄路",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "秦腔",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "中国哲学简史",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "这个世界会好吗",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "人心与人生",},
{F_GROUP: "今人",S_GROUP: "其它",TITLE: "云雀叫了一整天",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "国富论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "天演论",FILE: "file/",F_EVAL: "line.length>2 && line.length<10 && line.indexOf('：')<0 && line[0]!='回' && line[0]!='天'",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "战争论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "正义论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "政府论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "资本论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "君主论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "语言论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "社会契约论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "权力意志论",AUTHOR: "尼采",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "人类理解论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "人类理智新论",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "伦理学",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "政治学",AUTHOR: "亚里士多德",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "形而上学",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "尼各马可伦理学",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "精神现象学",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "人口原理",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "经济学原理",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "论自由",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "论法的精神",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "沉思录",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "忏悔录",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "西方哲学史",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "悲剧的诞生",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "纯粹理性批判",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "武士道",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "菊与刀",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "理想国",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "拿破仑法典",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "奥本海国际法",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "第一哲学沉思集",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "苏菲的世界",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "存在与虚无",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "新工具",},
{F_GROUP: "外国",S_GROUP: "人文",TITLE: "新教伦理与资本主义精神",AUTHOR: "马克斯·韦伯",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "荷马史诗",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "神曲",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "吉檀迦利",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "罗摩衍那",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "古今集",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "万叶集",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "枕草子",FILE: "file/",F_EVAL: "line[0]=='●' && line.length<18",},
{F_GROUP: "外国",S_GROUP: "诗文随笔",TITLE: "徒然草",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "爱丽丝漫游仙境",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "安娜·卡列尼娜",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "安徒生童话",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "傲慢与偏见",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "巴黎圣母院",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "百年孤独",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "包法利夫人",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "悲惨世界",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "变形记",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "茶花女",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "达·芬奇密码",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "等待戈多",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "福尔摩斯探案集",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "父与子",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "复活",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "钢铁是怎样炼成的",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "格林童话",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "哈利波特",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "哈姆雷特",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "红与黑",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "呼啸山庄",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "基督山伯爵",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "Jane Eyre",FILE: "filel/",F_EVAL: "line.indexOf('Chapter')==0",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "静静的顿河",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "老人与海",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "李尔王",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "鲁滨逊漂流记",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "罗密欧与朱丽叶",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "洛丽塔",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "绿野仙踪",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "马可·波罗游记",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "麦田里的守望者",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "萌芽",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "名利场",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "牛虻",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "挪威的森林",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "飘",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "杀死一只知更鸟",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "上尉的女儿",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "少年Pi的奇幻漂流",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "少年维特之烦恼",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "十日谈",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "A Tale of Two Cities",FILE: "filel/",F_EVAL: "line.indexOf('Chapter')==0",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "死魂灵",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "汤姆·索亚历险记",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "汤姆叔叔的小屋",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "唐吉诃德",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "玩偶之家",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "威尼斯商人",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "Oliver Twist",FILE: "filel/",F_EVAL: "line.indexOf('Chapter')==0",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "小王子",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "一九八四",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "一千零一夜",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "伊索寓言",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "尤利西斯",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "源氏物语",FILE: "filel/",F_EVAL: "line.indexOf('第')==1 && line.length<15",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "约翰·克里斯朵夫",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "战争与和平",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "指环王",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "追忆似水年华",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "罪与罚",},
{F_GROUP: "外国",S_GROUP: "小说",TITLE: "蝇王",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "几何原本",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "昆虫记",AUTHOR: "让-亨利·卡西米尔·法布尔",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "梦的解析",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "人性的弱点",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "寂静的春天",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "圣经",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "古兰经",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "时间简史",},
{F_GROUP: "外国",S_GROUP: "其它",TITLE: "物种起源",},
];