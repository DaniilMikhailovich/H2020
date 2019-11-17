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
	width: 46vw;
	fill: #5bc8ff;
}
.femalesvg{
	fill: #f5a9a9
}
button{
	background-color: #fff;
	position: relative;
	border: none;
	border-radius: 1vw;
	padding: 1vw;
	cursor: pointer;
	height: 51vw;
	width: 47vw;
	outline: none;
	background-color: rgb(226, 226, 226);
}
button:focus{
	border: 0.15vw solid #ac40f1;
	padding: 0.85vw;
}
p{
	position: absolute;
	bottom: 1vw;
	right: 1vw;
	font-size: 4vw;
	font-weight: 400;
	color: #ac40f1;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
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
	font-size: 2vw;
	font-weight: 200;
	color: #ac40f1;
}
}
</style>