<template>
  <Sidebar/>
  <div class="home">
    <h1>Bem vindo</h1>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Exercitationem, ipsam accusantium repellat aliquam quae odio sapiente 
      illo pariatur hic ut nostrum illum, impedit harum nemo ex eligendi 
      praesentium corporis. Aliquam!
    </span>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>