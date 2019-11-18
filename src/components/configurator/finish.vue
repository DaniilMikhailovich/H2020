<template>
  <section>
    <section class="overlay" @click="goToBack"></section>
    <section class="popup">
      <section class="text">
        <p class="name">{{ humanName }}</p>
        <p class="hardskill">Hard Skills: {{ hardSkill }} ({{ hardSkillPoints }} points)</p>
        <p>Soft Skills:</p>
        <section class="softskills">
          <div class="skillItem">
            <p>Инициативность</p>
            <p class="percent">{{ Initiative }}</p>
          </div>
          <div class="skillItem">
            <p>Креативность</p>
            <p class="percent">{{ Creativity }}</p>
          </div>
          <div class="skillItem">
            <p>Адаптивность</p>
            <p class="percent">{{ Adaptability }}</p>
          </div>
          <div class="skillItem">
            <p>Рефлексия</p>
            <p class="percent">{{ Reflection }}</p>
          </div>
          <div class="skillItem">
            <p>Многозадачность</p>
            <p class="percent">{{ Multitasking }}</p>
          </div>
          <div class="skillItem">
            <p>Умение слушать</p>
            <p class="percent">{{ ListeningSkills }}</p>
          </div>
          <div class="skillItem">
            <p>Командная работа</p>
            <p class="percent">{{ Teamwork }}</p>
          </div>
          <div class="skillItem">
            <p>Критическое мышление</p>
            <p class="percent">{{ CriticalThinking }}</p>
          </div>
          <div class="skillItem">
            <p>Тайм-менеджмент</p>
            <p class="percent">{{ TimeManagement }}</p>
          </div>
        </section>
        <section class="download" @click="downloadImage">
            <downloadsvg class="downloadSVG"></downloadsvg>
            <p>Share your opinion with the whole world! Together we can change everything! #2020 #human2020</p>
        </section>
      </section>
      <img :src="imgSrc" alt="Your human" />
    </section>
  </section>
</template>

<script>
import API, {  graphqlOperation } from '@aws-amplify/api'
import { createAnswer } from "../../graphql/mutations"
export default {
  name: "finish",
  computed: {
    imgSrc() {
      return this.$store.getters.HUMAN_IMG;
    },
    gender(){
      return this.$store.getters.GENDER;
    },
    humanName() {
      return this.$store.getters.HUMAN_NAME;
    },
    humanHead(){
      return this.$store.getters.HUMAN_HEAD;
    },
    humanShirt(){
      return this.$store.getters.HUMAN_SHIRT;
    },
    humanPants(){
      return this.$store.getters.HUMAN_PANTS;
    },
    humanShoes(){
      return this.$store.getters.HUMAN_SHOES;
    },
    humanAccessories(){
      return this.$store.getters.HUMAN_ACCESSORIES;
    },
    humanJackets(){
      return this.$store.getters.HUMAN_JACKET;
    },
    hardSkill() {
      return this.$store.getters.HARDSKILLNAME;
    },
    hardSkillPoints() {
      return this.$store.getters.HARDSKILL;
    },
    softSkillsPoints(){
      return this.$store.getters.SOFTSKILLS;
    },
    Initiative() {
      return this.$store.state.Initiative;
    },
    Creativity() {
      return this.$store.state.Creativity;
    },
    Adaptability() {
      return this.$store.state.Adaptability;
    },
    Reflection() {
      return this.$store.state.Reflection;
    },
    Multitasking() {
      return this.$store.state.Multitasking;
    },
    ListeningSkills() {
      return this.$store.state.ListeningSkills;
    },
    Teamwork() {
      return this.$store.state.Teamwork;
    },
    CriticalThinking() {
      return this.$store.state.CriticalThinking;
    },
    TimeManagement() {
      return this.$store.state.TimeManagement;
    }
  },
  methods: {
    goToBack() {
      this.$router.push("/create/soft_skill");
    },
    downloadImage(){
        function downloadURI(uri, name) {
            var link = document.createElement('a');
            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        var dataURL = this.imgSrc
        downloadURI(dataURL, 'human2020.png');
    }
  },
  components:{
      downloadsvg: () => import(/* webpackChunkName: "downloadsvg", webpackPrefetch: true */ "../SVG/downloadSVG.vue")
  },
  async mounted(){
      const answer = {
        gender: this.gender,
        humanName: this.humanName,
        humanHead:  this.humanHead,
        humanShirt: this.humanShirt,
        humanJackets: this.humanJackets,
        humanPants: this.humanPants,
        humanShoes: this.humanShoes,
        humanAccessories: this.humanAccessories,
        hardSkillPoints: this.hardSkillPoints,
        softSkillsPoints: this.softSkillsPoints,
        hardSkillName: this.hardSkill,
        Initiative: this.Initiative,
        Creativity: this.Creativity,
        Adaptability: this.Adaptability,
        Reflection: this.Reflection,
        Multitasking: this.Multitasking,
        ListeningSkills: this.ListeningSkills,
        Teamwork: this.Teamwork,
        CriticalThinking: this.CriticalThinking,
        TimeManagement: this.TimeManagement
      }
      await API.graphql(graphqlOperation(createAnswer, { input: answer }))
    }
  }
</script>

<style scoped>
p {
  color: #ac40f1;
  font-size: 1.8vw;
}
img{
    position: relative;
    width: 43%;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: black;
  opacity: 0.8;
  cursor: pointer;
}
.popup {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 75vw;
  height: 80vh;
  background: linear-gradient(rgb(100, 255, 131), rgb(0, 247, 255));
  left: calc(50% - 37vw);
  top: calc(50% - 38vh);
  padding: 2vw 0vw 2vw 2vw;
  flex-shrink: 0;
  border-radius: 1vw;
}
.name {
  text-transform: capitalize;
}
.text {
    position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 55%;
}
.softskills{
    position: relative;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
}
.skillItem {
  width: 12vw;
  height: 5vw;
  border-radius: 0.5vw;
  transition: 0.3s;
  background: #ffffff;
  border: none;
  margin-bottom: 1vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0vw 0vw 0.5vw#000;
  text-align: center;
}
.skillItem p{
    font-size: 1.2vw;
}
.download{
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
}
.download p{
    font-size: 1.2vw;
    margin-left: 0.5vw;
}
.downloadSVG{
    width: 5vw;
    fill: #ac40f1;
}
</style>