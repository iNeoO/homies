<template>
  <div class="app">
    <!-- <router-view /> -->
    <header-layout />
  </div>
</template>

<script>
import headerLayout from '@/components/layout/Header.vue';

export default {
  components: {
    headerLayout,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

html, body, #app {
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
</style>
