<template>
  <v-container>
    <h1 class="mt-6">Resume</h1>
    <v-divider class="mb-6"></v-divider>

    <embed class="mb-10" src="resume.pdf" type="application/pdf" width="100%" height="1200px"/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume"
});
</script>

<style scoped></style>
