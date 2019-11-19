<template>
	<section>
		<input @keyup.enter="goToNext" type="text" maxlength="25" v-model="humanName" :placeholder="$t('thirdPage.name.placeholder')">
		<router-link is="button" class="Next_Button"  @click="goToNext">{{$t('thirdPage.name.next')}}</router-link>
	</section>
</template>

<script>
export default {
	name:'name',
	data(){
		return{
			humanName:this.$store.getters.HUMAN_NAME
		}
	},
	watch:{
		humanName: function(){
			this.$store.dispatch('PUSH_NAME', this.humanName)
		}
	},
	methods: {
		goToNext(){
			if(this.$store.getters.GENDER==='male') {
				this.$router.push('/create/man_clothes')
			} else if(this.$store.getters.GENDER==='female'){
				this.$router.push('/create/women_clothes')
			} else alert('Set gender of you human2020')
		},
	},
}
</script>
<style scoped>
	input{
		user-select: all;
		outline: none;
		background-color: transparent;
		width: 85vw;
		height: 9vw;
		text-align: center;
		font-size: 8vw;
		border: none;
		box-shadow: none;
		border-bottom: 0.1vw solid #ac40f1;
		caret-color: #ac40f1;
		color: #ac40f1;
		margin-bottom: 10vw;
	}
	.currentTab{
		flex-direction: column;
		align-items: center;
		margin-top: 7vw;
	}
	.Next_Button{
		border-radius: 5vw;
		background: #ac40f1;
		border: 0.1vw solid #ac40f1;
		color: #fff;
		font-size: 7vw;
		padding: 0.3vw 8vw;
		cursor: pointer;
		box-shadow: 0vw 0vw 0.8vw #000;
		text-shadow: 0vw 0vw 0.4vw #000;
	}
	.Next_Button:active{
		box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
	}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape){
	input{
		user-select: all;
		outline: none;
		background-color: transparent;
		width: 40vw;
		height: 5vw;
		text-align: center;
		font-size: 4vw;
		border: none;
		box-shadow: none;
		border-bottom: 0.1vw solid #fff;
		caret-color: #ac40f1;
		color: #fff;
		margin-bottom: 4vw;
	}
	.currentTab{
		flex-direction: column;
		align-items: center;
		margin-top: 7vw;
	}
	.Next_Button{
		border-radius: 2.5vw;
		background: #ac40f1;
		border: 0.1vw solid #ac40f1;
		color: #fff;
		font-size: 2.5vw;
		padding: 0.2vw 3vw;
		cursor: pointer;
		box-shadow: 0vw 0vw 0.2vw #000;
		text-shadow: 0vw 0vw 0.1vw #000;
	}
	.Next_Button:active{
		box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
	}
}
@media screen and (max-width: 1000px) and (orientation: landscape),(max-width: 1000px) and (orientation: portrait){
	input:focus{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100vw;
		user-select: all;
		outline: none;
		background-color: #fff;
		height: 100vh;
		text-align: center;
		font-size: 8vw;
		border: none;
		border-bottom: 0.1vw solid #ac40f1;
		caret-color: #ac40f1;
		color: #ac40f1;
	}
}
</style>