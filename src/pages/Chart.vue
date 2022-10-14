<template>
  <div class="chart">
    <Sidebar/>
    <div class="content">
      <h1 class="title-header">Gráficos</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Asperiores deserunt tempora eaque assumenda obcaecati impedit amet
        magnam, animi magni quam quo corrupti ab maiores qui quia provident 
        dolore ut quis?
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      areas: {}
    }
  },
  mounted() {
    this.getValueAreas();
  },
  methods: {
    getValueAreas() {
      let data = {};
      let areasStringLocalStorage = localStorage.getItem('areas');
      data = JSON.parse(areasStringLocalStorage);
      this.areas = data;
    },
    showResult() {
      console.log(this.areas[0].result);      
    }
  }
}
</script>