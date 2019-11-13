<template>
<shoesitems :items="array"  :type="type"></shoesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'SHOES'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.shoesArray.shoesMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.shoesArray.shoesFemale
            } return null
        }
    },
    components:{
        shoesitems:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: true */ '../configurator/shoesItems.vue')
    }
    
}
</script>

<style scoped>
    
</style>