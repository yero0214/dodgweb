<template>
  <div class="pie-chart" :style="pieStyle"></div>
</template>

<script>
  export default {
    props: [
      'pieData'
    ],

    computed: {
      pieStyle() {

        let sum = 0;

        let styles = this.pieData.map(
          piePart => `${piePart.color} 0 ${sum += piePart.value}%`
        );

        return { background: 'conic-gradient('+ styles.join(",") +')' };
      }
    }
  }
</script>

<style scoped>
  .pie-chart {
    border-radius: 50%;
    border: 2px solid #fefefe;
  }
</style>