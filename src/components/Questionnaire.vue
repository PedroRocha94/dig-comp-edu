<template>
  <div class="questionnaire">
    <section class="questionnaire-section">
      <div class="questionnaire-header">
        <h2>Envolvimento proficional</h2>
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
      getCurrentQuestion: getCurrentQuestion
    }
  },
  methods: {
    next() {
      nextQuestion();
    }
  }
}
</script>