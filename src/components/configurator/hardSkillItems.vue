<template>
	<section class="items" :class="[{scrollM:items.length >=1},{scrollD:items.length >=11}]">
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="saveToStore(item.skill)">
			<p>{{$t(item.skill)}}</p>
			<component class="hardsvg" :is="item.svg"></component>
		</button>
	</section>
</template>

<script>
export default {
	props: ['items'],
	components:{
		bloggersvg:() => import(/* webpackChunkName: "bloggerSVG", webpackPrefetch: 750 */ '../SVG/bloggerSVG.vue'),
		armysvg:() => import(/* webpackChunkName: "armySVG", webpackPrefetch:  749 */ '../SVG/armySVG.vue'),
		esportsvg:() => import(/* webpackChunkName: "esportSVG", webpackPrefetch: 748 */ '../SVG/esportSVG.vue'),
		itsvg:() => import(/* webpackChunkName: "itSVG", webpackPrefetch: 747 */ '../SVG/itSVG.vue'),
		bussinessmansvg:() => import(/* webpackChunkName: "bussinessManSVG", webpackPrefetch: 746 */ '../SVG/bussinessManSVG.vue'),
		bussinesstrainersvg:() => import(/* webpackChunkName: "bussinessTainerSVG", webpackPrefetch: 745 */ '../SVG/bussinessTrainerSVG.vue'),
		managersvg:() => import(/* webpackChunkName: "managerSVG", webpackPrefetch: 744 */ '../SVG/managerSVG.vue'),
		minersvg:() => import(/* webpackChunkName: "minerSVG", webpackPrefetch: 743 */ '../SVG/minerSVG.vue'),
		psychologsvg:() => import(/* webpackChunkName: "psychologSVG", webpackPrefetch: 742 */ '../SVG/psychologSVG.vue'),
		ubersvg:() => import(/* webpackChunkName: "uberSVG", webpackPrefetch: 741 */ '../SVG/uberSVG.vue'),
		teachersvg:() => import(/* webpackChunkName: "teacherSVG", webpackPrefetch: 740 */ '../SVG/teacherSVG.vue'),
		doctorsvg:() => import(/* webpackChunkName: "doctorSVG", webpackPrefetch: 739 */ '../SVG/doctorSVG.vue'),
		politiciansvg:() => import(/* webpackChunkName: "politicianSVG", webpackPrefetch: 738 */ '../SVG/politicianSVG.vue'),
		engineersvg:() => import(/* webpackChunkName: "engineerSVG", webpackPrefetch: 737 */ '../SVG/engineerSVG.vue'),
		artistsvg:() => import(/* webpackChunkName: "artistSVG", webpackPrefetch: 736 */ '../SVG/artistSVG.vue'),
		hookahmansvg:() => import(/* webpackChunkName: "hookahmanSVG", webpackPrefetch: 735 */ '../SVG/hookahmanSVG.vue'),
		lawyersvg:() => import(/* webpackChunkName: "lawyerSVG", webpackPrefetch: 734 */ '../SVG/lawyerSVG.vue'),
		athletesvg:() => import(/* webpackChunkName: "athleteSVG", webpackPrefetch: 733 */ '../SVG/athleteSVG.vue'),
		bankersvg:() => import(/* webpackChunkName: "bankerSVG", webpackPrefetch: 732 */ '../SVG/bankerSVG.vue'),
		unemployedsvg:() => import(/* webpackChunkName: "unemployedSVG", webpackPrefetch: 731 */ '../SVG/unemployedSVG.vue'),
		paintersvg:() => import(/* webpackChunkName: "painterSVG", webpackPrefetch: 730 */ '../SVG/painterSVG.vue'),
		photographersvg:() => import(/* webpackChunkName: "photographerSVG", webpackPrefetch: 729 */ '../SVG/photographerSVG.vue'),
		journalistsvg:() => import(/* webpackChunkName: "journalistSVG", webpackPrefetch: 728 */ '../SVG/journalistSVG.vue'),
		writersvg:() => import(/* webpackChunkName: "writerSVG", webpackPrefetch: 727 */ '../SVG/writerSVG.vue'),
		musiciansvg:() => import(/* webpackChunkName: "musicianSVG", webpackPrefetch: 726 */ '../SVG/musicianSVG.vue'),
		womansvg:() => import(/* webpackChunkName: "womanSVG", webpackPrefetch: 725 */ '../SVG/womanSVG.vue'),
		modelsvg:() => import(/* webpackChunkName: "modelSVG", webpackPrefetch: 724 */ '../SVG/modelSVG.vue'),
		piarsvg:() => import(/* webpackChunkName: "piarSVG", webpackPrefetch: 723 */ '../SVG/piarSVG.vue'),
		reportersvg:() => import(/* webpackChunkName: "reporterSVG", webpackPrefetch: 722 */ '../SVG/reporterSVG.vue'),
		designersvg:() => import(/* webpackChunkName: "designerSVG", webpackPrefetch: 721 */ '../SVG/designerSVG.vue')
	},
	name:'hardSkillItems',
	methods:{
		saveToStore(elem){
			this.$store.dispatch('PUSH_HARDSKILL_NAME', elem)
		}
	}
}
</script>

<style scoped>
	section{
		display: flex;
		overflow: hidden;
		justify-content: space-between;
		flex-wrap: nowrap;
		height: 60vw;
	}
	.scrollM{
		overflow-x: scroll;
		flex-wrap: nowrap;
	}
	.button{
		font-size: 6vw;
		color: #ac40f1;
		margin-bottom: 0.4vw;
		width: 41vw;
		height: calc(var(--vh, 1vh) * 30);
		margin-top: calc(var(--vh, 1vh) * 0.5);
		margin-right: calc(var(--vh, 1vh) * 0.7);
		cursor: pointer;
		flex-shrink: 0;
		transition: 0.3s;
		background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
		border: none;
		border-radius: 1vw;
	}
	.button::-moz-focus-outer{
		border: none;
	}
	.button:hover, .button:focus{
		transform: scale(1.05);
		background: none;
		transition: 0.3s;
		border: 0.2vw solid #ac40f1;
	}
	.hardsvg{
		width: 75%;
		margin-top: 1vw;
	}
@media screen and (min-width: 760px) and (max-width: 999px) {
	.hardsvg{
		width: 60%;
		margin-top: 1vw;
	}
}


@media screen and (min-width: 1000px), (orientation: landscape){
	section{
		flex-wrap: wrap;
		height: 27vw;
	}
	.scrollD{
		overflow-y: scroll;
	}
	.scrollM{
		overflow-x: hidden;
		flex-wrap: wrap;
	}
	.button{
		font-size: 1.5vw;
		color: rgb(48, 2, 173);
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
		width: 9.5vw;
		height: 12vw;
		border-radius: 0.5vw;
		margin: 0vw 0.4vw 0.4vw 0vw;
	}
	.button:hover{
		transform: scale(1.05);
		background: none;
		transition: 0.3s;
		color: #ffffff;
	}
	.button:focus{
		transform: scale(1.05);
		background: none;
		transition: 0.3s;
		color: #ffffff;
	}
	.hardsvg{
		width: 60%;
		margin-top: 1vw;
	}
}
@media screen and (max-width: 999px) and (orientation: landscape){
	.items{
		flex-wrap: nowrap;
		height: 23vw;
	}
	.scrollD{
		overflow-y: hidden;
	}
	.scrollM{
		overflow-x: scroll;
	}
	.button{
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
		width: 14vw;
		height: 18vw;
		border-radius: 0.5vw;
		margin-right: 1vw;
		font-size: 2vw;
	}
}
</style>