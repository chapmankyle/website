<template>
  <v-container>
    <h1 class="first-heading">Curriculum Vitae</h1>
    <v-divider class="mb-6"></v-divider>

    <embed
      class="mb-10"
      src="CV.pdf"
      type="application/pdf"
      width="100%"
      height="1200px"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CV"
});
</script>

<style scoped></style>
