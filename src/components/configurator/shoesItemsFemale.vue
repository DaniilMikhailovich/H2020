<template>
	<section>
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="drawOnCanvas(item)">
			<img :src="item.icon" alt="">
		</button>
	</section>
</template>

<script>
export default {
	props: ['items','type'],
	name:'clothesitems',
	methods:{
		drawOnCanvas(elem){
			this.$store.dispatch('PUSH_'+this.type, elem)

		}
	}
}
</script>

<style scoped>
	section{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 1vw;
	}
	.button{
		margin-bottom: 0.2vw;
		width: 12.5vw;
		height: 11vw;
		border-radius: 0.5vw;
		cursor: pointer;
		transition: 0.5s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
	}
	.button:hover {
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	img{
		width: 80%;
	}
	button:nth-of-type(3) img{
		height :90%;
		width: initial;
	}
	button:nth-of-type(4) img, button:nth-of-type(2) img{
		height :60%;
		width: initial;
	}

</style>