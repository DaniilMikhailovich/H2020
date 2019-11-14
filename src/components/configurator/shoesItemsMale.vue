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
		cursor: pointer;
		transition: 0.5s;
		background: linear-gradient(rgba(250, 238, 253, 0.001), rgba(247, 158, 255, 0.5));
		border: none;
	}
	.button:hover {
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	img{
		width: 100%;
	}
</style>