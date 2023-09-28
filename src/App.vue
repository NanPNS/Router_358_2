<script setup>

import { RouterView } from 'vue-router'

import boxheader from './views/boxheader.vue'

</script>


<template>
  <div class="card1">

  <div class="container">
  <boxheader> </boxheader>
  
  <RouterView/>
  </div>
</div>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style setup>
.card1{
  font: 1em sans-serif;
  background-image: url(https://i.pinimg.com/736x/57/05/aa/5705aade213ab590d05616acf23735c8.jpg);

  
}




</style>