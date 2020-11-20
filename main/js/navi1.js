document.body.innerHTML+=`
<div id="navi" v-cloak>
	<navi1 :lang="lang" :langid="langid" :page="page" :navinames="navinames" :current="current" :state="state"></navi1>
</div>
`;

Vue.component('navi1', {
	props:['lang','langid','page','navinames','current','state'],
	icon:'≡',
	methods:{
	},
	template: 
	`<div id="navi1">
		<div id="navi1logo" @click="window.location.href='../../index.html'"></div>
		<ul id="navi">
			<li v-for="(item, i) in page">
				<span href="javascript:;" @click="window.location.href='../'+page[i]+'/index.html'" :class="(i==current?'active':'')">{{navinames[langid][page[i]]}}</span>
			</li>
		</ul>
		<div id="lang" @click="langid=(parseInt(langid)+1)%2;sessionStorage.setItem('langid',langid);location.reload();">{{lang.lang[(parseInt(langid)+1)%2]}}</div>
	</div>`,
});

var navi=new Vue({
	el: '#navi',
	data:{ 
	},
});