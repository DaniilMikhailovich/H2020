<template>
	<section>
		<h1 class="clothesTitle">{{$t('thirdPage.clothes.clothes')}}</h1>
		<hr class="separate">
		<button
			v-for="tab in tabs"
			v-bind:key="tab.id"
			v-bind:class="['button', { active: currentTab === tab.name }]"
			v-on:click="currentTab = tab.name"><component :is="tab.svg" :class="[tab.svg,{ active: currentTab === tab.name }]"></component></button>
		<transition mode="out-in">
		<component :is="currentTab" class="currentTab" ></component>
		</transition>
	</section>
</template>

<script>
export default {
	name:'clothes',
	components:{
		hairstylesvg:() => import(/* webpackChunkName: "hairstylesvg", webpackPrefetch: true */ '../SVG/hairstyleSVG.vue'),
		shirtsvg:() => import(/* webpackChunkName: "shirtsvg", webpackPrefetch: true */ '../SVG/shirtSVG.vue'),
		pantssvg:() => import(/* webpackChunkName: "pantssvg", webpackPrefetch: true */ '../SVG/pantsSVG.vue'),
		suitsvg:() => import(/* webpackChunkName: "suitsvg", webpackPrefetch: true */ '../SVG/suitSVG.vue'),
		shoessvg:() => import(/* webpackChunkName: "shoessvg", webpackPrefetch: true */ '../SVG/shoesSVG.vue'),
		accessoriessvg:() => import(/* webpackChunkName: "accessoriessvg", webpackPrefetch: true */ '../SVG/accessoriesSVG.vue'),
	},
	data(){
		return{
			currentTab: 'Hairstyle',
			tabs:[
				{id:1, name:'Hairstyle', svg:'hairstylesvg',getter:''},
				{id:2, name:'Shirts', svg:'shirtsvg'},
				{id:3, name:'Pants', svg:'pantssvg'},
				{id:4, name:'Suits', svg:'suitsvg'},
				{id:5, name:'Shoes', svg:'shoessvg'},
				{id:6, name:'Accessories', svg:'accessoriessvg'}
				]
		}
	}
}
</script>

<style scoped>
	section{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 1vw;
	}
	.clothesTitle{
		flex-basis: 100%;
		color: #fff;
		font-size: 3vw;
		font-weight: 300;
	}
	.separate{
		margin: 1vw 0vw;
		flex-basis: 100%;
		height: 0.1vw;
	}
	.hairstylesvg, .shirtsvg, .accessoriessvg{
		width: 2vw;
	}
	.suitsvg, .pantssvg, .shoessvg{
		width: 3vw;
	}
	.hairstylesvg.active, .shirtsvg.active, .pantssvg.active, .accessoriessvg.active, .suitsvg.active, .shoessvg.active{
		fill: #ffffff;
	}
	.currentTab{
		flex-basis: 100%;
	}
	.button{
		outline: none;
		position: relative;
		display: inline-block;
		color: #E0FFFF;
		overflow: hidden;
		background-color: rgba(68, 68, 68, 0.493);
		box-shadow: 0vw 0vw 1vw#000;
		border: none;
		transition: 0.3s;
		padding: 0.5vw 0.5vw;
		font-size: 1.5vw;
		cursor: pointer;
		width: 9.65vw;
	}
	.button:hover{
		background-color: #ac40f1;
	}
	.button.active{
		background-color: #ac40f1;
		border: 0.1vw solid #fff;
		border-bottom: none;
		box-shadow: 0vw 0vw 2vw#000;
	}
	.button:not(.active){
		border-bottom: 0.1vw solid #fff;
	}
	.v-enter-active, .v-leave-active{
		transition: opacity .2s;
	}
	.v-enter, .v-leave-to{
		opacity: 0;
	}
</style>