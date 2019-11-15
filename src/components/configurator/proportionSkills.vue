<template>
  <section>
      <h1>Personality</h1>
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
      <router-link is="button"></router-link>
      <p>Distribute the available points into two groups of skills:<br>Hard is responsible for the technical side of your profession.<br>Soft is resposible for successful participation in the workflow and teamwork.</p>
  </section>
</template>

<script>
export default {
    name:'proportion_of_skills',
    data(){
        return{
            softSkills:null,
            hardSkill:null
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
            } else {
                this.hardSkill = 999
                this.softSkills = 1
            }
        },
        hardSkill: function() {
            if((this.hardSkill !== 0)&&(!isNaN(this.hardSkill))){
            this.softSkills = this.sumOfScills - this.hardSkill 
            } else {
                this.hardSkill = 1
                this.softSkills = 999
            }
        }
    }

}
</script>

<style scoped>
    section{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
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
        color: #fff;
		font-size: 1.3vw;
		font-weight: 300;
        text-align: center;
    }
    .circleSum{
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        background-color: #AC3FF0;
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
        background-color: #AC3FF0;
        position: absolute;
        top: calc(25% - 4vw);
        right: 15%;
    }
    .circleHard{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background-color: #AC3FF0;
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
        color: #fff;
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
    p{
        position: absolute;
        bottom: 1vw;
        left: 1vw;
        color: #fff;
		font-size: 1.4vw;
		font-weight: 300;
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
        font-size: 2.5vw;
    }


</style>