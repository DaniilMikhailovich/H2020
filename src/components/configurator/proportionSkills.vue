<template>
  <section>
      <h1>Personality</h1>
      <hr class="separate">
      <div class="circleSum">
          <p class="sumOfScills">{{ sumOfScills }}</p>
      </div>
      <hr class="tophr">
      <hr class="bothr">
      <div class="circleSoft">
          Soft skills
          <input type="text" v-model="softSkills" placeholder="0" maxlength="3">
      </div>
      <div class="circleHard">
          Hard skill
          <input type="text" v-model="hardSkill" placeholder="0" maxlength="3">
      </div>
      <transition>
      <router-link v-if="buttonTrigger" is="button" class="Next_Button" @click="goToNext">Next</router-link>
      </transition>
      <p class="ticker">{{ $t("thirdPage.ticker.text1")}}<b> Hard </b>{{ $t("thirdPage.ticker.text2")}}<b> Soft </b>{{ $t("thirdPage.ticker.text3")}}</p>
  </section>
</template>

<script>
export default {
    name:'proportion_of_skills',
    data(){
        return{
            softSkills:null,
            hardSkill:null,
            buttonTrigger: false
        }
    },
    computed:{
        sumOfScills(){
            return this.$store.getters.SUMOFSKILLS
        }
    },
    beforeDestroy(){
        this.$store.dispatch('PUSH_SOFTSKILLS', this.softSkills)
        this.$store.dispatch('PUSH_HARDSKILL', this.hardSkill)
    },
    watch:{
        softSkills: function() {
            if((this.softSkills !== 0)&&(!isNaN(this.softSkills))){
            this.hardSkill = this.sumOfScills - this.softSkills
            this.buttonTrigger = true
            } else {
                this.hardSkill = 0
                this.softSkills = 0
                this.buttonTrigger = false
                
            }
        },
        hardSkill: function() {
            if((this.hardSkill !== 0)&&(!isNaN(this.hardSkill))){
            this.softSkills = this.sumOfScills - this.hardSkill 
            } else {
                this.softSkills = 0
                this.hardSkill = 0
            }
        }
    },
    methods:{
        goToNext(){
            this.$router.push('/create/hard_skill')
        }
    },
}
</script>

<style scoped>
    .v-enter, .v-leave-to{
        opacity: 0;
    }
    .v-enter-active, .v-leave-active{
        transition: .2s
    }
    section{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    h1{
		color: #fff;
		font-size: 3vw;
		font-weight: 300;
        margin-left: 1vw;
    }
    input{
        border: none;
        width: 4vw;
        height: 1.5vw;
        background: none;
        background-color: rgba(255, 255, 255, 0.52);
        border-radius: 2vw;
        color: #AC3FF0;
		font-size: 1.3vw;
		font-weight: 300;
        text-align: center;
    }
    .circleSum{
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
        position: absolute;
        top: calc(50% - 5vw);
        left: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circleSoft{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
        position: absolute;
        top: calc(25% - 4vw);
        right: 15%;
    }
    .circleHard{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
        position: absolute;
        top: calc(75% - 4vw);
        right: 25%;
    }
    .circleHard, .circleSoft{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        color: #AC3FF0;
        font-weight: 300;
    }
    hr{
        width: 20vw;
        height: .3vw;
        border-radius: 30%;
        background-color: #fff;
        position: absolute;
        border: .2vw solid #ffffff;
    }
    .separate{
		margin: .3vw 0vw;
		height: 0.1vw;
        width: calc(100% - 2vw);
        border-radius: 0;
        border: initial;
        margin-left: 1vw;
    }
    p{
        position: absolute;
        color: #fff;
		font-weight: 300;
    }
    .ticker{
        position: absolute;
        bottom: 1vw;
        left: 1vw;
        color: #fff;
		font-size: 2vw;
		font-weight: 300;
        white-space: nowrap;
        transform: translateX(43%);
        animation: ticker 20s linear infinite;
    }
    .tophr{
        transform: rotate(-15deg);
        left: 30%;
        top:30%;
    }
    .bothr{
        transform: rotate(15deg);
        left: 30%;
        top:58%;
        width: 15vw;
    }
    .sumOfScills{
        position: relative;
        left: initial;
        bottom: initial;
        font-size: 3vw;
    }
    .Next_Button{
		border-radius: 2.5vw;
		background: #ac40f1;
		border: 0.1vw solid #ac40f1;
		color: #fff;
		font-size: 2vw;
		padding: 0.2vw 3vw;
		cursor: pointer;
		box-shadow: 0vw 0vw 0.2vw #000;
		text-shadow: 0vw 0vw 0.1vw #000;
        right:2vw;
        bottom: 45%;
        position: absolute;
	}
	.Next_Button:active{
		box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
	}
    @keyframes ticker {
        0%{
            transform: translateX(43%)
        }
        100%{
            transform: translateX(-100%)
        }
    }
</style>