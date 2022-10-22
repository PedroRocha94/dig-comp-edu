<template>
  <div class="info-areas">
    <div class="header" >
      <h2>{{ area.name }}</h2>
    </div>
    <div 
      class="info-areas-content"
    >
      <h3>{{ ranking }}</h3>
      <span>Você foi classificado como {{ ranking }}</span>
      <p class="info-areas-content-description">
        Isto significa que questiona a adequação de práticas digitais e pedagógicas contemporâneas, das quais já é 
        Líder. Está preocupado(a) com as limitações ou desvantagens dessas práticas e é levado(a) pelo impulso para 
        inovar cada vez mais a educação. Experimenta tecnologias digitais altamente inovadoras e complexas e/ou 
        desenvolve novas abordagens pedagógicas. Lidera a inovação e é um exemplo para outros professores.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoAreas',
  props: {
    area: {
      type: Object,
      default: new Object()
    }
  },
  computed: {
    ranking() {
      if(this.area.value === 7) {
        if(this.area.result < 20) {
          return 'Recém-Chegado';
        } else if(this.area.result >= 20 && this.area.result <= 33) {
          return 'Explorador';
        } else if(this.area.result > 33 && this.area.result <= 49) {
          return 'Integrador';
        } else if(this.area.result > 49 && this.area.result <= 65) {
          return 'Especialista';
        } else if(this.area.result > 65 && this.area.result <= 80) {
          return 'Líder';
        } else if(this.area.result > 80) {
          return 'Pioneiro';
        }
      } else if(this.area.value === 1 || this.area.value === 3) {
        if(this.area.result < 4) {
          return 'Recém-Chegado';
        } else if(this.area.result >= 4 && this.area.result <= 7) {
          return 'Explorador';
        } else if(this.area.result > 7 && this.area.result <= 10) {
          return 'Integrador';
        } else if(this.area.result > 10 && this.area.result <= 13) {
          return 'Especialista';
        } else if(this.area.result > 13 && this.area.result <= 15) {
          return 'Líder';
        } else if(this.area.result === 16) {
          return 'Pioneiro';
        }
      } else if(this.area.value === 2 || this.area.value === 4 || this.area.value === 5) {
        if(this.area.result < 3) {
          return 'Recém-Chegado';
        } else if(this.area.result >= 4 && this.area.result <= 5) {
          return 'Explorador';
        } else if(this.area.result > 5 && this.area.result <= 7) {
          return 'Integrador';
        } else if(this.area.result > 7 && this.area.result <= 9) {
          return 'Especialista';
        } else if(this.area.result > 9 && this.area.result <= 11) {
          return 'Líder';
        } else if(this.area.result === 12) {
          return 'Pioneiro';
        }
      } else if(this.area.value === 6) {
        if(this.area.result < 6) {
          return 'Recém-Chegado';
        } else if(this.area.result >= 6 && this.area.result <= 8) {
          return 'Explorador';
        } else if(this.area.result > 8 && this.area.result <= 12) {
          return 'Integrador';
        } else if(this.area.result > 12 && this.area.result <= 16) {
          return 'Especialista';
        } else if(this.area.result > 16 && this.area.result <= 19) {
          return 'Líder';
        } else if(this.area.result === 20) {
          return 'Pioneiro';
        }
      }
    }
  }
}
</script>