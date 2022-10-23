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
      <p
        v-if="ranking === 'Recém-Chegado'" 
        class="info-areas-content-description"
      >
        Isto significa que tem uma oportunidade para começar a melhorar a utilização que faz das tecnologias digitais 
        para o ensino. Selecione uma ou duas para começar durante o próximo período letivo, concentrando-se em melhorar 
        significativamente as suas estratégias de ensino. Ao fazer isso, estará a movimentar-se para a próxima etapa da 
        competência digital, o nível do(a) Explorador(a).
      </p>
      <p
        v-else-if="ranking === 'Explorador'" 
        class="info-areas-content-description"
      >
        Isto significa que tem consciência do potencial das tecnologias digitais e está interessado(a) em explorá-las 
        para melhorar a prática pedagógica e profissional. Já começou a usar tecnologias digitais em algumas áreas e 
        irá beneficiar de uma prática mais consistente. Pode aumentar a sua competência através da colaboração e 
        troca com colegas e da ampliação do seu repertório de práticas e habilidades digitais. Tal vai levá-lo(a) ao 
        próximo passo de competência digital, o nível do(a) Integrador(a).
      </p>
      <p
        v-else-if="ranking === 'Integrador'" 
        class="info-areas-content-description"
      >
        Isto significa que experimenta tecnologias digitais numa variedade de contextos e para uma série de 
        propósitos, integrando-as em muitas das suas práticas. Utiliza-as criativamente para melhorar diversos aspetos 
        do seu envolvimento profissional e está disposto(a) a expandir o seu repertório de práticas. Beneficiará se 
        melhorar a compreensão sobre que ferramentas funcionam melhor em que situações e sobre a adequação de 
        tecnologias digitais a métodos e estratégias pedagógicas. Tente dar a si mesmo(a) mais algum tempo para 
        experimentar e refletir, complementando-o com incentivo colaborativo e troca de conhecimento para chegar ao 
        próximo nível, o de Especialista (B2).
      </p>
      <p
        v-else-if="ranking === 'Especialista'" 
        class="info-areas-content-description"
      >
        Isto significa que usa uma variedade de tecnologias digitais, com confiança, criatividade e espírito crítico para 
        melhorar as suas atividades profissionais. Seleciona tecnologias digitais propositadamente para situações 
        específicas e procura compreender as vantagens e desvantagens de diferentes estratégias digitais. É curioso
        (a) e aberto(a) a novas ideias, sabendo que há muitas coisas que ainda não experimentou. Utiliza a 
        experimentação como um meio de expandir, estruturar e consolidar o seu repertório de estratégias. Partilhe o 
        seu conhecimento com outros professores e continue a desenvolver, de forma crítica, as suas estratégias 
        digitais para alcançar o nível de Líder (C1).
      </p>
      <p
        v-else-if="ranking === 'Líder'" 
        class="info-areas-content-description"
      >
        Isto significa que tem uma abordagem consistente e abrangente no que toca à utilização de tecnologias digitais 
        para melhorar práticas pedagógicas e profissionais. Conta com um amplo repertório de estratégias digitais, do 
        qual sabe escolher a mais adequada para qualquer situação concreta. Reflete continuamente e desenvolve as 
        suas práticas. Mantém-se atualizado(a) quanto a novos desenvolvimentos e ideias através de trocas com 
        colegas e ajuda outros a aproveitarem o potencial das tecnologias digitais para melhorarem o ensino e a 
        aprendizagem. Se estiver pronto(a) para experimentar mais um pouco, será capaz de atingir o último nível de 
        competência, o de Pioneiro(a).
      </p>
      <p
        v-else-if="ranking === 'Pioneiro'" 
        class="info-areas-content-description"
      >
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