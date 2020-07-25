<template>
  <v-footer class="font-weight-medium" absolute padless>
    <v-col class="text-center" cols="12">
      Copyright &copy; {{ new Date().getFullYear() }} - Kyle Chapman
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped></style>
