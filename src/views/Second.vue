<template>
	<div>
		<DesktopSecond v-if="this.isDesktop"/>
		<MobileSecond v-else/>
	</div>
</template>

<script>
	export default{
		name: 'secondPage',
		components:{
			DesktopSecond:() => import(/* webpackChunkName: "desktopsecond", webpackPrefetch: 999 */ '../components/desktopSecond.vue'),
			MobileSecond:() => import(/* webpackChunkName: "mobilesecond", webpackPreload:true */ '../components/mobileSecond.vue')
		},
		data: function(){
			return{
				width: window.innerWidth
			}
		},
		computed: {
      isDesktop: function(){
        if(this.width >= 800){
          return true
        }
        else{
					return false
        }
      }
    },
		methods: {
			updateWidth(){
				this.width = window.innerWidth
				if(this.width <= 799){
					if(this.$route.path === '/evolve'){
					this.$router.push('/evolve/8')
					}
				}
			},
		},
		created(){
			window.addEventListener('resize', this.updateWidth)
		},
		beforeDestroy(){
			window.removeEventListener('resize', this.updateWidth)
		}
	}
</script>

<style scoped>

</style>