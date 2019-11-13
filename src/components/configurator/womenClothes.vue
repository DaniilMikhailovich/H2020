<template>
	<section>
		<h1 class="clothesTitle">Clothes</h1>
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
		hairstyle: () => import(/* webpackChunkName: "hairstyle", webpackPrefetch: true */ '../configurator/hairstyleFemale.vue'),
		jackets: () => import(/* webpackChunkName: "jackets", webpackPrefetch: true */ '../configurator/jackets.vue'),
		shirts: () => import(/* webpackChunkName: "shirts", webpackPrefetch: true */ '../configurator/shirts.vue'),
		pants: () => import(/* webpackChunkName: "pants", webpackPrefetch: true */ '../configurator/pants.vue'),
		accessories: () => import(/* webpackChunkName: "accessories", webpackPrefetch: true */ '../configurator/accessories.vue'),
	},
	data(){
		return{
			currentTab: 'hairstyle',
			tabs:[
				{id:1, name:'hairstyle', svg:'hairstylesvg'},
				{id:2, name:'shirts', svg:'shirtsvg'},
				{id:3, name:'pants', svg:'pantssvg'},
				{id:4, name:'jackets', svg:'suitsvg'},
				{id:5, name:'shoes', svg:'shoessvg'},
				{id:6, name:'accessories', svg:'accessoriessvg'}
				]
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
		background-color: #cdcdcd;
		border-radius: 0.5vw;
		border: none;
		padding: 0.5vw .5vw;
		font-size: 1.5vw;
		cursor: pointer;
		box-shadow: 3vw 3vw 10vw #000;
		width: 5vw;
	}
	.button:hover{
		background-color: #ac40f1;
	}
	.button.active{
		background-color: #ac40f1;
	}
	.v-enter-active, .v-leave-active{
		transition: opacity .2s;
	}
	.v-enter, .v-leave-to{
		opacity: 0;
	}
</style>