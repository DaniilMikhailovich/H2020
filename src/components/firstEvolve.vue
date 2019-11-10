<template>
	<main>
			<div class="character">
				<img src="~@/assets/greek.png" alt="greek">
			</div>
			<section class="submenu">
				<h2>{{$t('secondPage.evolution.greek')}}</h2>
				<router-link is="button" @click="goToNext" class="evolve" >{{$t('secondPage.evolution.evolve')}}</router-link>
			</section>
		</main>
</template>

<script>
export default {
	name:'firstEvolve',
	methods: {
		goToNext(){
			this.$router.push('/evolve/2')
		},
	}
}
</script>

<style scoped>
main{
	flex-direction: row;
}
.character{
	width: 55vw;
	margin-right: 5vw;
}
img{
	width: 55vw;
}
.submenu{
	text-align: center;
	width: 25vw;
	color: #20252a;
	font-family: "Source", sans-serif;
}
.submenu h2{
	font-size: 7vw;
	font-weight: 300;
	margin-bottom: 2vw;
}
.evolve{
	outline: none;
	position: relative;
	display: inline-block;
	border: none;
	overflow: hidden;
	border-radius: 4vw;
	padding: 0.5vw 3vw;
	font-size: 5.5vw;
	font-weight: 400;
	color: #E0FFFF;
	background-color: #ac40f1;
	cursor: pointer;
	box-shadow: 1vw 1vw 5vw #000;
}
.evolve::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
	filter: blur(2vw);
	width: 9vw;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(-3vw) skewX(-45deg);
  animation: move-light 1.7s infinite;
}
</style>