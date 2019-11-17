<template>
  <section>
    <h1 class="clothesTitle">{{$t('thirdPage.clothes.clothes')}}</h1>
	<hr class="separate">
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    section{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 1vw;
        width: 100%;
	}
	.clothesTitle{
		flex-basis: 100%;
		color: #fff;
		font-size: 3vw;
		font-weight: 300;
	}
	.separate{
		margin: 1vw 0vw;
		flex-basis: 100%;
		height: 0.1vw;
	}
    
</style>