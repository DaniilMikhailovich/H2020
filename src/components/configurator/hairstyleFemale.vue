<template>
    <section>
        <button
			v-for="color in colors"
			v-bind:key="color.id"
			v-bind:class="['button', { active: currentColor === color.color }, color.color]"
			v-on:click="currentColor = color.color, array=color.array">
        </button>
        <clothesitems :items="array"  :type="type" class="currentColor"></clothesitems>
    </section>
</template>

<script>
export default {
    name: 'Hairstyle',
    components:{
        clothesitems:() => import(/* webpackChunkName: "clothesitems", webpackPrefetch: true */ '../configurator/clothesItems.vue'),
    },
    methods:{
        changeColor(){
        
        }
    },
    data(){
        return{
            currentColor:'black',
            type:'HEAD',
            array:this.$store.state.hairArrayFemale.hairBlackFemale,
            colors:[
                {
                    id:1,
                    color:'black',
                    array: this.$store.state.hairArrayFemale.hairBlackFemale
                },
                {
                    id:2,
                    color:'bordo',
                    array: this.$store.state.hairArrayFemale.hairBordoFemale
                },
                {
                    id:3,
                    color:'brown',
                    array: this.$store.state.hairArrayFemale.hairBrownFemale
                },
                {
                    id:4,
                    color:'ginger',
                    array: this.$store.state.hairArrayFemale.hairGingerFemale
                },
                {
                    id:5,
                    color:'green',
                    array: this.$store.state.hairArrayFemale.hairGreenFemale
                },
                {
                    id:6,
                    color:'lightbrown',
                    array: this.$store.state.hairArrayFemale.hairLightBrownFemale
                },
                {
                    id:7,
                    color:'red',
                    array: this.$store.state.hairArrayFemale.hairRedFemale
                },
            ]
        }
    }
}
</script>

<style scoped>
    section{
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .currentColor{
        flex-basis: 100%;
    }
    .button{
        width: 3vw;
        height: 3vw;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }
    .button.active{
        border: 1px solid #fff;
    }
    .black{
        background-color: #202020;
    }
    .brown{
        background-color: #b58e66;
    }
    .darkbrown{
        background-color: #473726;
    }
    .ginger{
        background-color: #e48e37;
    }
    .green{
        background-color: #417334;
    }
    .grey{
        background-color: #8c7e70;
    }
    .red{
        background-color: #5c2f00;
    }
</style>