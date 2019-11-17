<template>
  <section>
    <h1 class="clothesTitle">HARD Skill</h1>
	<hr class="separate">
	<hardskillitems :items="array"></hardskillitems>
	<transition>
      <router-link v-if="buttonTrigger" is="button" class="Next_Button" @click="goToNext">Next</router-link>
    </transition>
  </section>
</template>

<script>
export default {
	name:'hardSkill',
	components:{
		hardskillitems: () => import(/* webpackChunkName: "hardskillitems", webpackPrefetch: true */ '../configurator/hardSkillItems.vue')
	},
	computed:{
		array(){
			return this.$store.state.hardSkillArray.hardSkill
		},
		buttonTrigger(){
			if(this.$store.getters.HARDSKILLNAME !== ''){
				return true
			} return false
		}
	},
	methods:{
        goToNext(){
            this.$router.push('/create/soft_skill')
        }
    },
}
</script>

<style scoped>
    section{
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 1vw;
        width: 100%;
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
	.Next_Button{
		border-radius: 2.5vw;
		background: #ac40f1;
		border: 0.1vw solid #ac40f1;
		color: #fff;
		font-size: 1.5vw;
		padding: 0.2vw 3vw;
		cursor: pointer;
		box-shadow: 0vw 0vw 0.2vw #000;
		text-shadow: 0vw 0vw 0.1vw #000;
        right:2vw;
        bottom: -3vw;
        position: absolute;
	}
	.Next_Button:active{
		box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
	}
    
</style>