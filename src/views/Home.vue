<template>
  <v-container>
    <div id="name-center">
      <h1>Kyle Chapman</h1>
      <h2>Cape Town, South Africa</h2>
      <h2>BSc Honours in Computer Science</h2>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home"
});
</script>

<style scoped>
#name-center {
  left: 50%;
  position: absolute;
  transform: translate(-50%, 10%);
  -ms-transform: translate(-50%, 10%);
  -webkit-transform: translate(-50%, 10%);
}
</style>
