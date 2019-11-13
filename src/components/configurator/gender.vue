<template>
	<section>
		<button @click='male'>
			<malesvg class="malesvg"></malesvg>
			<p>{{$t('thirdPage.gender.male')}}</p>
		</button>
		<button @click='female'>
			<femalesvg class="femalesvg"></femalesvg>
			<p>{{$t('thirdPage.gender.female')}}</p>
		</button>
	</section>
</template>

<script>
export default {
	name:'gender',
	components:{
		malesvg:() => import(/* webpackChunkName: "malesvg", webpackPrefetch: true */ '../SVG/maleSVG.vue'),
		femalesvg:() => import(/* webpackChunkName: "femalesvg", webpackPrefetch: true */ '../SVG/femaleSVG.vue')
	},
	methods:{
		male(){
			this.$store.dispatch('GET_GENDER', 'male')
		},
		female(){
			this.$store.dispatch('GET_GENDER', 'female')
		}
	}
}
</script>

<style scoped>
.malesvg, .femalesvg{
	width: 22vw;
	fill: #5bc8ff;
}
.femalesvg{
	fill: #f5a9a9
}
button{
	background-color: #fff;
	position: relative;
	border: none;
	border-radius: 0.5vw;
	padding: 0.5vw;
	cursor: pointer;
	height: 25vw;
	width: 25vw;
}
p{
	position: absolute;
	bottom: 0.5vw;
	right: 0.5vw;
	font-size: 1.5vw;
	font-weight: 200;
}
</style>