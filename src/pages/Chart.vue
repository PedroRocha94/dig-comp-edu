<template>
  <div class="chart">
    <Sidebar />
    <div class="content">
      <h1 class="title-header">Gráficos</h1>
      <div class="view-chart">
        <canvas id="myChart" width="400" height="150"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "Chart",
  data() {
    return {
      areas: {},
    };
  },
  mounted() {
    this.getValueAreas();
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Envolvimento Profissional", 
          "Recursos Digitais", 
          "Ensino e Aprendizagem", 
          "Avaliação", 
          "Capacitação", 
          "Promoção"
        ],
        datasets: [
          {
            label: "Nível De Competência Digital",
            data: [
              this.areas[0].result, 
              this.areas[1].result, 
              this.areas[2].result, 
              this.areas[3].result, 
              this.areas[4].result, 
              this.areas[5].result
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    myChart;
  },
  methods: {
    getValueAreas() {
      let data = {};
      let areasStringLocalStorage = localStorage.getItem("areas");
      data = JSON.parse(areasStringLocalStorage);
      this.areas = data;
    },
    showResult() {
      console.log(this.areas[0].result);
    },
  },
};
</script>