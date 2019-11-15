<template>
    <section>
        Just a little :)
        <router-link is="button" class="Next_Button" @click="goToNext">{{$t('thirdPage.name.next')}}</router-link>
        
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