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
	name:'accessoriesItems',
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
		overflow-y: scroll;
		height: 23vw;
	}
	.button{
		margin-bottom: 0.4vw;
		width: 9.4vw;
		height: 10.7vw;
		cursor: pointer;
		transition: 0.3s;
		border-radius: 0.5vw;
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
	button:nth-of-type(4) img{
		height: 80%;
		width: initial;
	}

</style>