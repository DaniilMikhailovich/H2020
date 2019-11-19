<template>
  <section :class="[{scrollM:items.length >=1},{scrollD:items.length >=11}]">
    <button
      class="button"
      v-for="item in items"
      v-bind:key="item.id"
      v-on:click="drawOnCanvas(item)"
    >
      <img :src="item.icon" alt />
    </button>
  </section>
</template>

<script>
export default {
  props: ["items", "type"],
  name: "clothesitems",
  methods: {
    drawOnCanvas(elem) {
      this.$store.dispatch("PUSH_" + this.type, elem);
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 1vw;
  height: 45vw;
}
.button {
  width: 35vw;
	height: 40vw;
  cursor: pointer;
  margin: 1.5vw 1vw 0vw 0vw;
  transition: 0.3s;
  flex-shrink: 0;
  border-radius: 1vw;
  background: linear-gradient(rgb(130, 255, 136), rgb(140, 242, 255));
  border: none;
}
.scrollM{
	overflow-x: scroll;
}
.button:hover {
  transform: scale(1.05);
  background: none;
  transition: 0.3s;
}
img {
  width: 80%;
}
button:nth-of-type(4) img {
  height: 60%;
  width: initial;
}
button:nth-of-type(5) img {
  width: 90%;
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  section {
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1vw;
    height: 23vw;
  }
  .button {
    margin: 0vw 0vw 0.4vw 0vw;
    width: 12.2vw;
    border-radius: 0.5vw;
    height: 10.8vw;
    flex-shrink: initial;
  }
  .scrollD{
		overflow-y: scroll;
	}
	.scrollM{
		overflow-x: hidden;
	}
  .button:hover {
    transform: scale(1.1);
  }
}
</style>