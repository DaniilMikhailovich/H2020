<template>
<clothesItemsMale v-if="this.gender==='male'" :items="array"  :type="type"/> 
<clothesItemsFemale :items="array"  :type="type" v-else/>  
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
        },
        gender(){
            return this.$store.getters.GENDER
        }
    },
    components:{
        clothesItemsMale:() => import(/* webpackChunkName: "accessoriesitems", webpackPrefetch: true */ '../configurator/accessoriesItemsMale.vue'),
        clothesItemsFemale:() => import(/* webpackChunkName: "accessoriesitems", webpackPrefetch: true */ '../configurator/accessoriesItemsFemale.vue')
    }
    
}
</script>

<style scoped>

</style>