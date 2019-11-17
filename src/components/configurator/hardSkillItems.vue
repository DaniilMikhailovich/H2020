<template>
	<section :class="{scroll:items.length >=11}">
		<button class="button"
			v-for="item in items"
			v-bind:key="item.id"
			v-on:click="saveToStore(item.skill)">
			<p>{{ item.skill }}</p>
		</button>
	</section>
</template>

<script>
export default {
	props: ['items'],
	name:'hardSkillItems',
	methods:{
		saveToStore(elem){
			this.$store.dispatch('PUSH_HARDSKILL_NAME', elem)
		}
	}
}
</script>

<style scoped>
	section{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 23vw;
	}
	.scroll{
		overflow-y: scroll;
	}
	.button{
		margin-bottom: 0.4vw;
		width: 9.4vw;
		height: 11vw;
		cursor: pointer;
		border-radius: 0.5vw;
		transition: 0.3s;
		background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
		border: none;
	}
	.button:hover{
		transform: scale(1.1);
		background: none;
		transition: 0.3s;
	}
	img{
		height: 80%;
	}

</style>