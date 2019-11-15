<template>
  <section>
      <h1>Personality</h1>
      <div class="circleSum"></div>
      <hr class="tophr">
      <hr class="bothr">
      <div class="circleSoft"></div>
      <div class="circleHard"></div>
      <p>Distribute the available points into two groups of skills: <b>hard</b> is responsible for the technical side of your profession. <b>Soft</b> is resposible for successful participation in the workflow and teamwork.</p>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    section{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    h1{
		color: #fff;
		font-size: 3vw;
		font-weight: 300;
        margin-left: 1vw;
    }
    .circleSum{
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        background-color: #AC3FF0;
        position: absolute;
        top: calc(50% - 5vw);
        left: 10%;
    }
    .circleSoft{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background-color: #AC3FF0;
        position: absolute;
        top: calc(25% - 4vw);
        right: 15%;
    }
    .circleHard{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background-color: #AC3FF0;
        position: absolute;
        top: calc(75% - 4vw);
        right: 25%;
    }
    hr{
        width: 20vw;
        height: .3vw;
        border-radius: 30%;
        background-color: #fff;
        position: absolute;
        border: .2vw solid #ffffff;
    }
    p{
        position: absolute;
        bottom: 1vw;
        left: 1vw;
        color: #fff;
		font-size: 2vw;
		font-weight: 300;
        white-space: nowrap;
        transform: translateX(43%);
        animation: ticker 20s linear infinite;
    }
    .tophr{
        transform: rotate(-15deg);
        left: 30%;
        top:30%;
    }
    .bothr{
        transform: rotate(15deg);
        left: 30%;
        top:58%;
        width: 15vw;
    }
    @keyframes ticker {
        0%{
            transform: translateX(43%)
        }
        100%{
            transform: translateX(-100%)
        }
    }
</style>