<template>
	<div id="app">
		<header>Human 2020</header>
		<h1 class="BackNumber">2020</h1>
		<main>
			<section class="workSpace">
				<article class="progressBar">
					<personsvg class="personSVG"></personsvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<hangersvg class="hangerSVG"></hangersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<seekersvg class="seekerSVG"></seekersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<awardsvg class="awardSVG"></awardsvg>
				</article>
				<article class="configurator">
					Configurstor
				</article>
			</section>
			<div class="canvas">
				<canvas id="canvas" ref="canvas"></canvas>
			</div>
		</main>
		<footer><router-link is="button" @click="canvasImage" class="BottomQuote_button GoBack_button">Go back</router-link></footer>
	</div>
</template>

<script>
export default {
	name: 'thirdPage',
	data:function(){
		return{
			humanImg: null,
			gender:'female'
		}
	},
	components:{
		personsvg:() => import(/* webpackChunkName: "personSVG" */ '../components/SVG/personSVG.vue'),
		arrowsvg:() => import(/* webpackChunkName: "arrowSVG" */ '../components/SVG/arrowSVG.vue'),
		hangersvg:() => import(/* webpackChunkName: "hangerSVG" */ '../components/SVG/hangerSVG.vue'),
		seekersvg:() => import(/* webpackChunkName: "seekerSVG" */ '../components/SVG/seekerSVG.vue'),
		awardsvg:() => import(/* webpackChunkName: "awardSVG" */ '../components/SVG/awardSVG.vue')
	},
	computed:{
		humanLink(){
			if(this.gender ==='male'){
				return require('../assets/boy.png')
			}
			return require('../assets/girl.png')
		}
	},
	methods: {
		goToBack(){
			this.$router.push('/evolve')
		},
		canvasImage: function(){
			var x = this.$refs.canvas
			var canvas = x.getContext('2d')
			var image = new Image()
			image.src = this.humanLink
			image.addEventListener("load", function(){
				canvas.drawImage(image,0,0)
			}, false)
		}
	},
	mounted(){
		this.canvasImage()
	}
	// created(){
	// 	this.humanImg = new window.Image(),
	// 	this.humanImg.src = require('../assets/girl.png')
	// },
	// mounted(){
	// 	this.canvas=this.$refs.canvas,
	// 	this.ctx=this.canvas.getContext('2d'),
	// 	this.humanImg.onload = function(){
	// 		this.ctx.drawImage(this.humanImg, 0,0)
	// 	}
		
	// }
}
</script>

<style scoped>
.personSVG, .awardSVG, .seekerSVG, .hangerSVG{
	height: 5.5vw;
}
.arrowSVG{
	height: 3vw;
	transform: rotate(180deg);
}

.progressBar{
	height: 6vw;
	width: 50vw;
	border-radius: .3vw;
	margin-bottom: 10vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.configurator{
	height: 30vw;
	width: 50vw;
	border-radius: .3vw;
	background-color: rgba(0, 0, 0, 0.4);
}
.canvas{
	height: 80%;
	width: 30vw;
	border-radius: .3vw;
	background-color: #fff;
}
canvas{
	width: 100%;
	height: 100%;
}
.workSpace{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
#app{
	display: flex;
}
main{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;
	align-items: initial
}
header{
	display: none;
}
.BackNumber{
	color: azure;
	transform: rotate(-64deg);
	font-size: 70vw;
	color: #000;
	opacity: 0.1;
	position: absolute;
	z-index: 0;
}
.GoBack_button{
	margin-bottom: 1vw;
}

@media screen and (min-width: 1000px), (orientation: landscape){
	.BackNumber{
		transform: rotate(-10deg);
		font-size: 45vw;
	}
	.BottomQuote_button{
		padding: 0vw 2vw;
		font-size: 2vw;
		line-height: 3vw;
	}
}
</style>