<template>
<clothesitems :items="array"  :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'PANTS'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.pantsArray.pantsMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.pantsArray.pantsFemale
            } return null
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "pantsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>