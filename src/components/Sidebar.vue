<template>
  <div class="sidebar">
    <h3>DIGCOMPEDU</h3>
    <ul class="options">
      <router-link
        class="option" 
        tag="li" 
        to="/"
      >
        Início
      </router-link>
      <router-link 
        class="option"
        tag="li" 
        to="/quiz"
      >
        Questionário
      </router-link>
      <router-link 
        class="option"
        tag="li" 
        to="/charts"
      >
        Gráficos
      </router-link>
      <router-link 
        class="option"
        tag="li" 
        to="/about"
      >
        Sobre
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>