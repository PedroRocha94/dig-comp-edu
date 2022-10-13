<template>
  <div class="sidebar">
    <h3>DIGCOMPEDU</h3>
    <ul class="options">
      <router-link
        class="option" 
        tag="li" 
        to="/"
      >
        <i class="pi pi-home"></i>
        Início
      </router-link>
      <router-link 
        class="option"
        tag="li" 
        to="/quiz"
      >
        <i class="pi pi-list"></i>
        Auto Avaliação
      </router-link>
      <router-link 
        class="option"
        tag="li" 
        to="/charts"
      >
        <i class="pi pi-chart-bar"></i>
        Gráficos
      </router-link>
      <router-link 
        class="option"
        tag="li" 
        to="/about"
      >
        <i class="pi pi-info-circle"></i>
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