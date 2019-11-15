<template>
	<section>
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="drawOnCanvas(item)">
			<img :src="item.src" alt="">
		</button>
	</section>
</template>

<script>
export default {
	props: ['items','type'],
	name:'hairitems',
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
		margin-bottom: 0.4vw;
		width: 9.4vw;
		height: 8.5vw;
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
	.button:nth-of-type(3) img{
    height: initial;
    width: 80%;
	}
	img{
		height: 60%;
	}
</style>