<template>
<clothesitems :items="array" :map="map" :getter="getter" :type="type"></clothesitems>    
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
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return [1]
                // return this.$store.state.shirtsArray.shirtsMaleDisableMap
            }else if(this.$store.getters.GENDER==='female') {
                return [1]
            } return null
        },
        getter(){
            return 20
            // return this.$store.getters.HUMAN_JACKET.id
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>