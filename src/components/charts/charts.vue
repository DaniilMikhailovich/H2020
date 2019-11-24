<template>
  <div id="chart">
    <apexchart type="donut" width="100%" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  props: ["series","hardSkill"],
  name: "chart",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        colors: [
          "#ac40f1",
          "rgb(67, 251, 77)",
          "rgb(36, 198, 219)",
          "#e716ff",
          "#02e2fd",
          "rgb(48, 2, 173)"
        ],
        labels: [
          "Initiative",
          "Creativity",
          "Adaptability",
          "Reflection",
          "Multitasking",
          "ListeningSkills",
          "Teamwork",
          "CriticalThinking",
          "TimeManagement"
        ],
        legend: {
          show: true,
          fontSize: "18vw",
          position: "bottom",
          offsetX: 0,
          offsetY: 8
        },
        plotOptions: {
          pie: {
            size: undefined,
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: true,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: "55%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "2vw",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  color: '#fff',
                  offsetY: -10
                },
                value: {
                  show: false,
                  label:""
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: this.hardSkill,
                  color: "#373d3f",
                }
              }
            }
          }
        }
      }
    };
  }
};
</script>

<style scoped>
div {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>