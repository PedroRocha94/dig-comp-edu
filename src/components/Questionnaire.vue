<template>
  <div class="questionnaire">
    <section 
      v-if="!quizCompleted"
      class="questionnaire-section"
    >
      <div class="questionnaire-header">
        <h2>{{ getCurrentQuestion.area.name }}</h2>
      </div>

      <div class="question">
        <span 
          class="question-text"
        >
          {{ getCurrentQuestion.id }} - {{ getCurrentQuestion.question }}
        </span>
      </div>

      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == index + 1
              ? 'selected'
              : ''
          }
          ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input 
            type="radio"
            :name="getCurrentQuestion.index"
            :value="`${index + 1}`"
            v-model="getCurrentQuestion.selected"
          >
          <span>{{ option }}</span>
        </label>
      </div>
      <div class="action">
        <Button 
        :label="`${ getCurrentQuestion.index === questions.length -1
                      ? 'Concluir'
                      : getCurrentQuestion.selected === null
                            ? 'Selecione uma opção'
                            : 'Próximo'
        }`"
        icon="pi pi-angle-double-right"
        iconPos="right"
        :disabled="!getCurrentQuestion.selected"
        @click="next"
      />
      </div>
    </section>
    <section
      v-else
      class="finish-quiz"
    >
      <h2 class="finish-quiz-title">Você finalizou sua auto avaliação</h2>
      <span class="finish-quiz-message">Você pode ver seu resultado na aba de resultados</span>
      <Button 
        label="Ir para resultados"
        icon="pi pi-external-link"
        iconPos="right"
        @click="goToCharts"
      />
    </section>
  </div>
</template>

<script>
import { 
  questions, 
  quizCompleted,
  currentQuestion, 
  getCurrentQuestion, 
  nextQuestion 
} from '../data/Questions';

export default {
  name: 'Questionnaire',
  data() {
    return {
      questions: questions,
      quizCompleted: quizCompleted,
      currentQuestion: currentQuestion,
      getCurrentQuestion: getCurrentQuestion,
      areas: [
        {
          value: 1,
          result: 0
        },
        {
          value: 2,
          result: 0
        },
        {
          value: 3,
          result: 0
        },
        {
          value: 4,
          result: 0
        },
        {
          value: 5,
          result: 0
        },
        {
          value: 6,
          result: 0
        },
      ]
    }
  },
  methods: {
    next() {
      this.areas.forEach(area => {
        if(this.getCurrentQuestion.area.id === area.value) {
          area.result += this.getCurrentQuestion.selected - 1;
        }
      })
      nextQuestion();
    },
    goToCharts() {
      this.$router.push("/charts");
    }
  }
}
</script>