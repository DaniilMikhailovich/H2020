<template>
	<section>
		<input type="text" maxlength="25" v-model="humanName" placeholder="Enter the name...">
		<!-- Роутер линк обязательно запилить вариативным в зависимости от гендера, просто пушим разные роуты в зависимости от значения gender -->
		<router-link is="button" class="Next_Button" @click="goToNext">{{$t('thirdPage.name.next')}}</router-link>
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
	}
}
</script>
<style scoped>
		span{
			font-size: 60px;
		}
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
		}
</style>