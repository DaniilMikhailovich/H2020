<template>
<clothesitems :items="array" :map="map" :getter="getter" :type="type"></clothesitems>    
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
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return [1]
                // return this.$store.state.jacketsArray.jacketsMaleDisableMap
            }else if(this.$store.getters.GENDER==='female') {
                return [1]
            } return null
        },
        getter(){
            return 20
            // return this.$store.getters.HUMAN_SHIRT.id
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "jacketsitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>