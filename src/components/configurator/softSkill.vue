<template>
    <section>
        <h1 class="clothesTitle">SOFT Skill</h1>
        <hr class="separate">
        <div class="skillItem">
            <p>Skill 1</p>
            <input type="range" min="0" max="100" v-model.number=skill1 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill1Gradient+'%, #fff '+skill1Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 2</p>
            <input type="range" min="0" max="100" v-model.number=skill2 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill2Gradient+'%, #fff '+skill2Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 3</p>
            <input type="range" min="0" max="100" v-model.number=skill3 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill3Gradient+'%, #fff '+skill3Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 4</p>
            <input type="range" min="0" max="100" v-model.number=skill4 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill4Gradient+'%, #fff '+skill4Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 5</p>
            <input type="range" min="0" max="100" v-model.number=skill5 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill5Gradient+'%, #fff '+skill5Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 6</p>
            <input type="range" min="0" max="100" v-model.number=skill6 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill6Gradient+'%, #fff '+skill6Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 7</p>
            <input type="range" min="0" max="100" v-model.number=skill7 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill7Gradient+'%, #fff '+skill7Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 8</p>
            <input type="range" min="0" max="100" v-model.number=skill8 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill8Gradient+'%, #fff '+skill8Gradient+'%, #fff 100%)'}">
        </div>
        <div class="skillItem">
            <p>Skill 9</p>
            <input type="range" min="0" max="100" v-model.number=skill9 class="range" :style= "{ background: 'linear-gradient(to right, #ac40f1 0%, #ac40f1 '+skill9Gradient+'%, #fff '+skill9Gradient+'%, #fff 100%)'}">
        </div>
    </section>
</template>

<script>
export default {
    name: 'softSkills',
    data(){
        return{
            softSkills: this.$store.getters.SOFTSKILLS,
            skill1: 0,
            skill2: 0,
            skill3: 0,
            skill4: 0,
            skill5: 0,
            skill6: 0,
            skill7: 0,
            skill8: 0,
            skill9: 0
        }
    },
    computed:{
        onePercentPrice(){
            return this.softSkills/100
        },
        skill1Gradient(){
            if(this.skill1<51){
                return this.skill1+2
            } return this.skill1-2
        },
        skill2Gradient(){
            if(this.skill2<51){
                return this.skill2+2
            } return this.skill2-2
        },
        skill3Gradient(){
            if(this.skill3<51){
                return this.skill3+2
            } return this.skill3-2
        },
        skill4Gradient(){
            if(this.skill4<51){
                return this.skill4+2
            } return this.skill4-2
        },
        skill5Gradient(){
            if(this.skill5<51){
                return this.skill5+2
            } return this.skill5-2
        },
        skill6Gradient(){
            if(this.skill6<51){
                return this.skill6+2
            } return this.skill6-2
        },
        skill7Gradient(){
            if(this.skill7<51){
                return this.skill7+2
            } return this.skill7-2
        },
        skill8Gradient(){
            if(this.skill8<51){
                return this.skill8+2
            } return this.skill8-2
        },
        skill9Gradient(){
            if(this.skill9<51){
                return this.skill9+2
            } return this.skill9-2
        },
        priceOfRange(){
            return (this.skill1+this.skill2+this.skill3+this.skill4+this.skill5+this.skill6+this.skill7+this.skill8+this.skill9)/100
        },
        skill1Value(){
            return Math.round((this.skill1*this.onePercentPrice)/this.priceOfRange)
        },
        skill2Value(){
            return Math.round((this.skill2*this.onePercentPrice)/this.priceOfRange)
        },
        skill3Value(){
            return Math.round((this.skill3*this.onePercentPrice)/this.priceOfRange)
        },
        skill4Value(){
            return Math.round((this.skill4*this.onePercentPrice)/this.priceOfRange)
        },
        skill5Value(){
            return Math.round((this.skill5*this.onePercentPrice)/this.priceOfRange)
        },
        skill6Value(){
            return Math.round((this.skill6*this.onePercentPrice)/this.priceOfRange)
        },
        skill7Value(){
            return Math.round((this.skill7*this.onePercentPrice)/this.priceOfRange)
        },
        skill8Value(){
            return Math.round((this.skill8*this.onePercentPrice)/this.priceOfRange)
        },
        skill9Value(){
            return Math.round((this.skill9*this.onePercentPrice)/this.priceOfRange)
        },


    }
}
</script>

<style scoped>
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 1vw;
    }
    .skillItem{
        width: 15vw;
        height: 7vw;
        border-radius: 0.5vw;
		transition: 0.3s;
		background: linear-gradient(rgb(67, 251, 77), rgb(36, 198, 219));
		border: none;
        margin-bottom: 1vw;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0vw 0vw 1.5vw#000;
    }
    p{
        font-size: 2vw;
        margin-bottom: 1vw;
        font-weight: 300;
        color: #fff;
        text-shadow: 0vw 0vw 1vw#000;
    }
    .rangeSlider{
        width: 30%;
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
    .range{
        appearance: none;
        border-radius: 1vw;
        width: 90%;
        height: 1.1vw;
        outline: none;
        -moz-outline-radius: 20px;
    }
    .range::-moz-range-thumb{
        appearance: none;
        width: 1.2vw;
        height: 1.1vw;
        border-radius: 50%;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid;
    }
    .range::-webkit-slider-thumb{
        appearance: none;
        width: 1.2vw;
        height: 1.2vw;
        border-radius: 50%;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid;
    }
    .range::-moz-focus-outer{
        border: none;
    }
    

</style>