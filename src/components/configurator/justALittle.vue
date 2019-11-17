<template>
    <section>
        <p class="phrase">{{$t('thirdPage.skills.leftjust')}}</p>
        <router-link is="button" class="Next_Button" @click="goToNext">{{$t('thirdPage.name.next')}}</router-link>
        <input type="range">
    </section>
</template>

<script>
export default {
    methods:{
        goToNext(){
            this.$router.push('/create/proportion_skills')
        }
    }

}
</script>

<style scoped>
    section{
        flex-direction: column;
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
        width: 100%;
        font-size: 3vw;
    }
    .phrase{
        color: #fff;
        font-size: 5vw;
        margin-bottom: 3vw;
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
</style>