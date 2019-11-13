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
		width: 8vw;
		height: 8vw;
		flex-basis: 20%;
		cursor: pointer;
	}
	img{
		width: 100%;
	}

</style>