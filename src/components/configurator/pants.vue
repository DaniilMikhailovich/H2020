<template>
<clothesitems :items="array" :map="map" :getter="getter" :type="type"></clothesitems>    
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
        },
        map(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.pantsArray.pantsMaleDisableMap
            }else if(this.$store.getters.GENDER==='female') {
                return [1]
            } return null
        },
        getter(){
            return 20
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "pantsitems", webpackPreload: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>