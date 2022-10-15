<template>
  <div class="info-areas">
    <h2>{{ area.name }}</h2>
    <span>{{ area.result }}</span>
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
  data() {
    return {
      
    }
  }
}
</script>