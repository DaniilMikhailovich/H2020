<template>
	<section>
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="drawOnCanvas(item.src)">
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
		justify-content: space-around;
		background-color: #fff;
		flex-wrap: wrap;
	}
	.button{
		width: 2vw;
		height: 2vw;
	}

</style>