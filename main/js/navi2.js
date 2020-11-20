var div=document.createElement("div");
div.innerHTML=`
<div id="navi" v-cloak>
	<navi2 :lang="lang" :langid="langid" :page="page" :navinames="navinames" :current="current" :state="state"></navi2>
</div>
`;
document.body.appendChild(div);

Vue.component('navi2', {
	props:['lang','langid','page','navinames','current','state'],
	methods:{
	},
	template: 
	`<div id="navi2back">
		<div id="navi2">
			<div id="navi2logo" @click="window.location.href='../../index.html'"></div>
			<div id="currentpagename">{{navinames[langid][page[current]]}}</div>
			<div id="lang"><a href="javascript:;" @click="langid=(parseInt(langid)+1)%2;sessionStorage.setItem('langid',langid);location.reload();">{{lang.lang[(parseInt(langid)+1)%2]}}</a></div>
			<ul id="menu">
				<li>
					<input id="check02" type="checkbox" name="menu" />
					<label for="check02" @click="state=!state"><span>{{state?'≡':'×'}}</span></label>
					<ul class="submenu">
						<li v-for="(item, i) in page">
							<a href="javascript:;" @click="window.location.href='../'+page[i]+'/index.html'" :class="(i==current?'active':'')">
								{{navinames[langid][page[i]]}}</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>`,
});

var navi=new Vue({
	el: '#navi',
	data:{ 
	},
});