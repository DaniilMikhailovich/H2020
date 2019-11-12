<template>
	<section>
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="drawOnCanvas(item.src)">
			<img :src="item.src" alt="">
			<!-- src = ~@/assets/2020.png запихнуть в виде пропса--> 
		</button>
	</section>
</template>

<script>
export default {
	props: ['items','type'],
	// прототип массива items в стейте стора
	// items:[
	// 	{
	// 	id: '1',
	// 	src: '~@/assets/2020.png',
	// 	},
	// 	{
	// 	id: '2',
	// 	src: '~@/assets/2021.png',
	// 	}
	// ]
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