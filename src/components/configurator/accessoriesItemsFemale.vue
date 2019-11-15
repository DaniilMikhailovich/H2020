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
		border-radius: 0.5vw;
		height: 11vw;
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
	}
	.button:hover {
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	img{
		width: 60%;
	}
	.button:nth-of-type(3) img, .button:nth-of-type(8) img, .button:nth-of-type(4) img{
		height: initial;
		width: 40%;
	}
	.button:nth-of-type(7) img{
		width: 30%;
	}
</style>