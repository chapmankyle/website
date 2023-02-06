<template>
  <v-footer color="#2e2e2e" class="font-weight-medium" absolute padless dark>
    <v-col id="copyright" class="text-center" cols="12">
      Copyright &copy; {{ new Date().getFullYear() }} - Kyle Chapman
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
});
</script>

<style scoped>
#copyright {
  color: #e3e3e3 !important;
}
</style>
