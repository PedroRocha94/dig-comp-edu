<template>
  <div class="quiz">
    <Sidebar/>
    <div class="content">
      <h1>Questionário</h1>
      <Questionnaire />
    </div>
  </div>
</template>

<script>
import Questionnaire from '../components/Questionnaire.vue';

export default {
  name: 'Quiz',
  components: {
    Questionnaire
  }
}
</script>