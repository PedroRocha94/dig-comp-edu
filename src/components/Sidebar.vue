<template>
  <div class="sidebar">
    <ul>
      <router-link tag="li" to="/">Início</router-link> |
      <router-link tag="li" to="/quiz">Questionário</router-link> |
      <router-link tag="li" to="/charts">Gráficos</router-link> |
      <router-link tag="li" to="/about">Sobre</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>