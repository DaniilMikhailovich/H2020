<template>
	<div>
		<DesktopSecond v-if="this.isDesktop"/>
		<MobileSecond v-else/>
	</div>
</template>

<script>
// import '@/components/desktopSecond.vue'
// const DesktopSecond = () => import(/* webpackChunkName: "desktopsecond" */ '../components/desktopSecond.vue')
// import '@/components/mobileSecond.vue'
// const MobileSecond = () => import(/* webpackChunkName: "mobilesecond" */ '../components/mobileSecond.vue')
	export default{
		name: 'secondPage',
		components:{
			DesktopSecond:() => import(/* webpackChunkName: "desktopsecond" */ '../components/desktopSecond.vue'),
			MobileSecond:() => import(/* webpackChunkName: "mobilesecond" */ '../components/mobileSecond.vue')
		},
		data: function(){
			return{
				width: window.innerWidth
			}
		},
		computed: {
      isDesktop: function(){
        if(this.width >= 999){
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
				if(this.width <= 999){
          this.$router.push('/evolve/1')
        }
			},
		},
		created(){
			window.addEventListener('resize', this.updateWidth)
		}
	}
</script>

<style scoped>

</style>