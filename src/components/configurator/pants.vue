<template>
<clothesitems :items="array" :map="map" :firstID="pantsID" :secondID="jacketID" :thirdID="accessID" :fourthID="0" :type="type"></clothesitems>    
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
                return this.$store.state.shirtsArray.femaleMap
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.shirtsArray.femaleMap
            } return null
        },
        pantsID(){
            return this.$store.getters.HUMAN_PANTS.id
        },
        jacketID(){
            return this.$store.getters.HUMAN_JACKET.id
        },
        accessID(){
            return this.$store.getters.HUMAN_ACCESSORIES.id
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "pantsitems", webpackPreload: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>