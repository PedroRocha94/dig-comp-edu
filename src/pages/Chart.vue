<template>
  <div class="chart">
    <Sidebar />
    <div class="content">
      <h1 class="title-header">Resultados</h1>
      <div class="view-chart">
        <canvas id="myChart" width="400" height="150"></canvas>
      </div>
      <div class="tab-view">
        <TabView>
          <TabPanel
            header="Geral"
          >
            <InfoArea
              :area="areas[6]"
            />
          </TabPanel>
          <TabPanel 
            header="Envolvimento"
          > 
            <InfoArea 
              :area="areas[0]"
            /> 
          </TabPanel>
          <TabPanel 
            header="Recursos"
          > 
            <InfoArea 
              :area="areas[1]"
            /> 
          </TabPanel>
          <TabPanel 
            header="Ensino"
          > 
            <InfoArea 
              :area="areas[2]"
            />  
          </TabPanel>
          <TabPanel 
            header="Avaliação"
          > 
            <InfoArea 
              :area="areas[3]"
            />  
          </TabPanel>
          <TabPanel 
            header="Capacitação"
          > 
            <InfoArea 
              :area="areas[4]"
            /> 
          </TabPanel>
          <TabPanel 
            header="Promoção"
          > 
            <InfoArea 
              :area="areas[5]"
            />  
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script>
import InfoArea from '../components/InfoAreas.vue';
import Chart from "chart.js/auto";

export default {
  name: "Chart",
  components: {
    InfoArea
  },
  data() {
    return {
      areas: []
    };
  },
  mounted() {
    this.prepareChart();
    this.getValueAreas();
    this.sumResultsAreas();
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
          "Promoção",
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
              this.areas[5].result,
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
      let data = [];
      let areasStringLocalStorage = localStorage.getItem("areas");
      data = JSON.parse(areasStringLocalStorage);
      this.areas = data;
    },
    prepareChart() {
      if(localStorage.getItem('areas')) {
        return;
      } else {
        let areas = [
          {
            value: 1,
            name: 'Envolvimento Profissional',
            result: 0
          },
          {
            value: 2,
            name: 'Recursos Digitais',
            result: 0
          },
          {
            value: 3,
            name: 'Ensino e Aprendizagem',
            result: 0
          },
          {
            value: 4,
            name: 'Avaliação',
            result: 0
          },
          {
            value: 5,
            name: 'Capacitação dos Alunos',
            result: 0
          },
          {
            value: 6,
            name: 'Promoção da Competências Digital dos Alunos',
            result: 0
          }
        ];
        localStorage.setItem('areas', JSON.stringify(areas));
      }
    },
    sumResultsAreas() {
      let newArea = {
        value: 7,
        name: 'Geral',
        result: 0
      }
      this.areas.forEach(area => {
        newArea.result += area.result
      });
      this.areas.push(newArea);
    }
  },
};
</script>