<template>
	<section>
		<div class="topConfMenu">
			<h1 class="clothesTitle">{{$t('thirdPage.clothes.clothes')}}</h1>
			<div class="rightButtonGroup">
				<router-link is="button" @click="goToBack" class="GoBack_button"><arrowsvg class="arrowbutton"></arrowsvg></router-link>
				<router-link is="button" @click="Reset" class="GoBack_button"><resetsvg class="arrowbutton"></resetsvg></router-link>
				<router-link is="button" @click="goToNext" class="GoNext_button"><arrowsvg class="arrowright"></arrowsvg></router-link>
			</div>
		</div>
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
		hairstylesvg:() => import(/* webpackChunkName: "hairstylesvg", webpackPrefetch: 979 */ '../SVG/hairstyleSVG.vue'),
		shirtsvg:() => import(/* webpackChunkName: "shirtsvg", webpackPrefetch: 978 */ '../SVG/shirtSVG.vue'),
		pantssvg:() => import(/* webpackChunkName: "pantssvg", webpackPrefetch: 977 */ '../SVG/pantsSVG.vue'),
		jacketsvg:() => import(/* webpackChunkName: "jacketvgw", webpackPrefetch: 940 */ '../SVG/jacketSVG.vue'),
		shoessvg:() => import(/* webpackChunkName: "shoessvg", webpackPrefetch: 975 */ '../SVG/shoesSVG.vue'),
		accessoriessvg:() => import(/* webpackChunkName: "accessoriessvg", webpackPrefetch: 974 */ '../SVG/accessoriesSVG.vue'),
		vehiclesvg:() => import(/* webpackChunkName: "vehiclesvg", webpackPrefetch: 950 */ '../SVG/vehicleSVG.vue'),
		hairstyle: () => import(/* webpackChunkName: "hairstyle", webpackPrefetch: 973 */ '../configurator/hairstyleFemale.vue'),
		jackets: () => import(/* webpackChunkName: "jackets", webpackPrefetch: 970 */ '../configurator/jackets.vue'),
		vehicles: () => import(/* webpackChunkName: "vehicles", webpackPrefetch: 947 */ '../configurator/vehicles.vue'),
		shirts: () => import(/* webpackChunkName: "shirts", webpackPrefetch: 972 */ '../configurator/shirts.vue'),
		pants: () => import(/* webpackChunkName: "pants", webpackPrefetch: 971 */ '../configurator/pants.vue'),
		accessories: () => import(/* webpackChunkName: "accessories", webpackPrefetch: 968 */ '../configurator/accessories.vue'),
		shoes: () => import(/* webpackChunkName: "shoes", webpackPrefetch: 969 */ '../configurator/shoes.vue'),
		arrowsvg:() => import(/* webpackChunkName: "arrowSVG" */ '../SVG/arrowSVG.vue'),
		resetsvg:() => import(/* webpackChunkName: "resetSVG" */ '../SVG/resetSVG.vue')
	},
	data(){
		return{
			currentTab: 'hairstyle',
			tabs:[
				{id:1, name:'hairstyle', svg:'hairstylesvg'},
				{id:2, name:'shirts', svg:'shirtsvg'},
				{id:3, name:'pants', svg:'pantssvg'},
				{id:4, name:'jackets', svg:'jacketsvg'},
				{id:5, name:'shoes', svg:'shoessvg'},
				{id:7, name:'accessories', svg:'accessoriessvg'},
				{id:8, name:'vehicles', svg:'vehiclesvg'}
				]
		}
	},
	methods: {
		goToBack(){
			this.$router.push('/create/personalisation')
		},
		goToNext(){
			this.$router.push('/create/just_a_little')
    },
		Reset(){
			this.$router.push('/create/personalisation'),
			this.$store.dispatch('GET_GENDER', null),
			this.$store.dispatch('PUSH_NAME', '')
		}	
	},
}
</script>

<style scoped>
.GoBack_button{
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: #fff;
	border: none;
}
.GoNext_button{
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: #ac40f1;
	border-radius: 50%;
	padding: 0.5vw;
	border: none;
	box-shadow: none;
	animation: cycle 2s linear infinite;
}
	section{
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 1vw;
		width: 100%;
	}
	.topConfMenu{
		display: flex;
		justify-content: space-between;
		flex-basis: 100%;
	}
	.rightButtonGroup{
		display: flex;
	}
	.rightButtonGroup>button {
		margin-right: 2vw;
		border: none;
	}
	.clothesTitle{
		color: #ac40f1;
		font-size: 6vw;
		font-weight: 300;
	}
	.separate{
		margin: 1vw 0vw;
		flex-basis: 100%;
		height: 0.1vw;
		border: 0.1vw solid #ac40f1;
		background-color: #ac40f1;
		margin-bottom: 2vw;
	}
	.hairstylesvg, .shirtsvg, .accessoriessvg{
		width: 5vw;
	}
	.suitsvgw, .pantssvg,.jacketsvg, .vehicle, .shoessvg{
		width: 6vw;
	}
	.hairstylesvg.active, .vehiclesvg.active, .jacketsvg.active, .shirtsvg.active, .pantssvg.active, .accessoriessvg.active, .suitsvgw.active, .shoessvg.active{
		fill: #ffffff;
	}
	.currentTab{
		flex-basis: 100%;
	}
	.arrowbutton{
		width: 8vw;
		fill: #ac40f1;
		margin-right: 0.5vw;
	}
	.arrowright{
		width: 8vw;
		fill: rgb(255, 255, 255);
		margin-left: 0.5vw;
		transform: rotate(180deg);
	}
	.button{
		border-radius: 0.5vw;
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
		width: calc(var(--vh, 1vh) * 6);
		height: calc(var(--vh, 1vh) * 6)
	}
	.button:hover{
		background-color: #ac40f1;
	}
	.button.active{
		background-color: #ac40f1;
		box-shadow: 0vw 0vw 1vw#000;
	}
	.v-enter-active, .v-leave-active{
		transition: opacity .2s;
	}
	.v-enter, .v-leave-to{
		opacity: 0;
	}
@media screen and (min-width: 760px) and (max-width: 999px) {
}


@media screen and (min-width: 1000px), (orientation: landscape){
	section{
		justify-content: flex-start;
	}
	.rightButtonGroup{
		display: none;
	}
	.separate{
		border: 0.1vw solid #fff;
		margin-bottom: 1vw;
	}
	.hairstylesvg, .shirtsvg, .accessoriessvg{
		width: 2vw;
	}
	.suitsvgw, .pantssvg, .vehiclesvg, .jacketsvg, .shoessvg{
		width: 3vw;
	}
	.button{
		border-radius: initial;
		width: 7.5vw;
		height: 4vw;
	}
	.button.active{
		border: 0.1vw solid #fff;
		border-bottom: none;
		box-shadow: 0vw 0vw 2vw#000;
	}
	.button:not(.active){
		border-bottom: 0.1vw solid #fff;
	}
	.clothesTitle{
		color: #fff;
		font-size: 2.5vw;
	}
}
</style>