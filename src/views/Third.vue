<template>
	<div id="app">
		<header>Human 2020</header>
		<h1 class="BackNumber">2020</h1>
		<main>
			<section class="workSpace">
				<section class="progressBar">
					<personsvg class="personSVG" :class="[{'active':this.$route.path === firstStep}, {'active':this.$route.path === secondStepM},{'active': this.$route.path === secondStepW}]"></personsvg>
					<arrowsvg class="arrowSVG" :class="[{'active':this.$route.path === secondStepM},{'active': this.$route.path === secondStepW}]"></arrowsvg>
					<hangersvg class="hangerSVG" :class="[{'active':this.$route.path === secondStepM},{'active': this.$route.path === secondStepW}]"></hangersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<seekersvg class="seekerSVG"></seekersvg>
					<arrowsvg class="arrowSVG"></arrowsvg>
					<awardsvg class="awardSVG"></awardsvg>
				</section>
				<section class="configurator">
					<router-view/>
				</section>
			</section>
			<section class="canvascontainer" ref="canvascontainer">
				<v-stage ref="stage" :config="stage">
					<v-layer>
						<v-text :config="{text: humanName, fontSize:60, x:posX, y:50}"></v-text>
						<v-image :config="{image:podium, x: 330, y:1040, scale:{x:1.8,y:1.8}}"></v-image>
						<v-image :config="{image:question, x: 380, y:450, scale:{x:.8,y:.8}}"></v-image>
						<v-image :config="{image:human, x: 350, y:200, scale:{x:1.8,y:1.8}}"></v-image>
						<v-image :config="{image:hair, x:this.$store.getters.HUMAN_HEAD.posX,y:this.$store.getters.HUMAN_HEAD.posY, scale:{x:4,y:4}}"></v-image>
					</v-layer>
				</v-stage>
			</section>
		</main>
		<footer><router-link is="button" @click="goToBack" class="GoBack_button">Go back</router-link></footer>
	</div>
</template>

// $KonvaImg = $vm0.$refs.stage.getStage().toDataURL({pixelRatio: 3})

<script>
// const width = document.querySelector('#canvas').offsetWidth;
// const height = document.querySelector('#canvas').offsetHeight;
export default {
	name: 'thirdPage',
	data(){
		return{
			stage:{
				width: this.stageWidth,
				height: this.stageHeight
			},
			stageWidth:1000,
			stageHeight:1233,
			human:null,
			podium:null,
			question:null,
			hair:null,
			hairPos:null,
			canvascontainer:'',
			posX:'',
			firstStep: '/create/personalisation',
			secondStepM: '/create/man_clothes',
			secondStepW: '/create/women_clothes',
		}
	},
	computed:{
		humanLink(){
			if(this.$store.getters.GENDER ==='male'){
				return require('../assets/boy.png')
			} else if(this.$store.getters.GENDER ==='female'){
				return require('../assets/girl.png')
			} else return null
		},
		humanName(){
			return this.$store.getters.HUMAN_NAME
		},
		humanNameLenght(){
			return this.$store.getters.HUMAN_NAME.length
		},
		hairSrc(){
			return this.$store.getters.HUMAN_HEAD.src
		}
	},
	watch:{
		humanLink: function(){
			this.newGender()
		},
		humanName: function(){
			this.posX = this.calcPosName()
		},
		hairSrc:function(){
			this.newHair()
		}
	},
	components:{
		personsvg:() => import(/* webpackChunkName: "personSVG" */ '../components/SVG/personSVG.vue'),
		arrowsvg:() => import(/* webpackChunkName: "arrowSVG" */ '../components/SVG/arrowSVG.vue'),
		hangersvg:() => import(/* webpackChunkName: "hangerSVG" */ '../components/SVG/hangerSVG.vue'),
		seekersvg:() => import(/* webpackChunkName: "seekerSVG" */ '../components/SVG/seekerSVG.vue'),
		awardsvg:() => import(/* webpackChunkName: "awardSVG" */ '../components/SVG/awardSVG.vue')
	},
	methods: {
		goToBack(){
			this.$router.push('/evolve/1')
		},
		newGender(){
			const image = new window.Image()
			image.src =  this.humanLink
			image.onload = () =>{
			this.human=image
			this.question=null
			}
		},
		newHair(){
			const image = new window.Image()
			image.src = this.hairSrc
			image.onload = () =>{
				this.hair=image
			}
		},
		changeCanvas(){
			this.canvascontainer = this.$refs.canvascontainer
			if (!this.canvascontainer){
				return
			}
			var width = this.canvascontainer.offsetWidth
			var scale = width/this.stageWidth
			this.stage.width = this.stageWidth*scale
			this.stage.height = this.stageHeight*scale
			this.stage.scaleX = scale
			this.stage.scaleY = scale
		},
		calcPosName(){
			return (this.stageWidth/2 - (this.humanNameLenght * 24)/2)
		}
	},
	created(){
		window.addEventListener("resize", this.changeCanvas)
		const image = new window.Image()
		const question = new window.Image()
		question.src = require('../assets/question.png')
		image.src =  require('../assets/podium.png')
		image.onload = () =>{
			this.podium=image
		}
		question.onload =() =>{
			this.question=question
		}
	},
	mounted(){
		this.changeCanvas(),
		this.newGender(),
		this.posX = this.calcPosName(),
		this.newHair()
	}
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
footer{
	display: flex;
	width: 95vw;
	align-items: flex-start;
}
.progressBar{
	height: 6vw;
	width: 60vw;
	border-radius: .3vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	fill: rgb(189, 189, 189);
}
.active{
	fill: #fff;
}
.configurator{
	height: 30vw;
	width: 60vw;
	border-radius: .5vw;
	background-color: rgba(0, 0, 0, 0.25);
}
.canvascontainer{
	height: 37vw;
	width: 30vw;
	border-radius: .5vw;
	background-color: rgb(255, 255, 255);
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
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
	.BackNumber{
		transform: rotate(-10deg);
		font-size: 45vw;
	}
	.GoBack_button{
		background: none;
		border: none;
		font-size: 1.5vw;
		color: #fff;
		font-weight: 300;
		cursor: pointer;
		z-index: 100;
		box-shadow: 0vw 0vw 15vw 1vw #000;
		padding: 0.1vw 2vw 0.3vw 2vw;
		border-radius: 3vw;
		display: flex;
		align-items: baseline;
	}
	.GoBack_button::before{
		content: "←";
		font-size: 2vw;
		text-decoration: none;
	}
}
</style>