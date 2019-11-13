<template>
<clothesitems :items="array"  :type="type"></clothesitems>    
</template>

<script>
export default {
    data(){
        return{
            type:'ACCESSORIES'
        }
    },
    computed:{
        array(){
            if(this.$store.getters.GENDER==='male'){
                return this.$store.state.accessoriesArray.accessoriesMale
            }else if(this.$store.getters.GENDER==='female') {
                return this.$store.state.accessoriesArray.accessoriesFemale
            } return null
        }
    },
    components:{
        clothesitems:() => import(/* webpackChunkName: "accessoriesitems", webpackPrefetch: true */ '../configurator/clothesItems.vue')
    }
    
}
</script>

<style scoped>

</style>