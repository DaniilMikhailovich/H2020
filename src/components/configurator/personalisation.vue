<template>
	<section>
		<button
			v-for="tab in tabs"
			v-bind:key="tab.id"
			v-bind:class="['button', { active: currentTab === tab.component }]"
			v-on:click="currentTab = tab.component">{{ tab.text }}</button>
		<transition mode="out-in">
		<component :is="currentTab" class="currentTab" ></component>
		</transition>
	</section>
</template>


<script>
export default {
	name:'personalisation',
	components:{
		Gender: () => import(/* webpackChunkName: "gender", webpackPrefetch: true */ './gender.vue'),
		Name: () => import(/* webpackChunkName: "name", webpackPrefetch: true */ './name.vue')
	},
	data(){
		return{
			currentTab: 'Gender',
			tabs:[
				{id:'1', text: this.$t('thirdPage.gender.gender'), component: 'Gender'},
				{id:'2', text: this.$t('thirdPage.name.name'), component: 'Name'}
			]
		}
	},
}
</script>


<style scoped>
	section{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 1vw;
		margin-top: 1vw;
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
		padding: 0.5vw 2vw;
		font-size: 1.5vw;
		cursor: pointer;
		box-shadow: 3vw 3vw 10vw #000;
		width: 25vw;
		height: 4vw;
	}
	.currentTab{
		flex-basis: 100%;
		padding: 1vw 0;
		justify-content: space-around;
	}
	.button:hover{
		background-color: #ac40f1;
	}
	.button.active{
		background-color: #ac40f1;
	}
	.v-enter-active {
		transition: opacity .2s;
	}
	.v-leave-active{
		transition: opacity .2s;
	}
	.v-enter, .v-leave-to{
		opacity: 0;
	}
</style>