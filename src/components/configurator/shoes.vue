<template>
<shoesItemsMale v-if="this.gender==='male'" :items="array"  :type="type"/>
<shoesItemsFemale :items="array"  :type="type" v-else/>   
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
        },
        gender(){
            return this.$store.getters.GENDER
        }
    },
    components:{
        shoesItemsMale:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: true */ '../configurator/shoesItemsMale.vue'),
        shoesItemsFemale:() => import(/* webpackChunkName: "shirtsitems", webpackPrefetch: true */ '../configurator/shoesItemsFemale.vue')
    }
    
}
</script>

<style scoped>
    
</style>