<template>
	<section :class="{scroll:items.length >=11}">
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
		justify-content: space-detween;
		flex-wrap: wrap;
		height: 23vw;
	}
	.scroll{
		overflow-y: scroll;
	}
	.button{
		margin-bottom: 0.2vw;
		width: 9.9vw;
		height: 11vw;
		cursor: pointer;
		transition: 0.3s;
		background: linear-gradient(rgba(250, 238, 253, 0.001), rgba(247, 158, 255, 0.5));
		border: none;
	}
	.button:hover{
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	img{
		height: 100%;
	}

</style>