<template>
<clothesitems :items="array"  :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'SHIRTS'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.shirtsArray.shirtsMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.shirtsArray.shirtsFemale
            } return null
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>