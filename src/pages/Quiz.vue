<template>
  <div class="quiz">
    <Sidebar/>
    <div class="content">
      <div class="header">
        <h1 class="header-title">Auto Avaliação</h1>
        <img src="../assets/images/selfie_logo.png" alt="Logomarca">
      </div>
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