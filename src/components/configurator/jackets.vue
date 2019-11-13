<template>
<clothesitems :items="array"  :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'JACKETS'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.jacketsArray.jacketsMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.jacketsArray.jacketsFemale
            } return null
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "jacketsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>