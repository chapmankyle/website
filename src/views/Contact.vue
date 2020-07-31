<template>
  <v-container>
    <h1>Contact Me</h1>

    <v-row>
      <v-col cols="12" sm="4" md="4">
        Name
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-text-field flat dense dark></v-text-field>
      </v-col>

      <v-col cols="12" sm="4" md="4">
        Email Address
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-text-field dense dark></v-text-field>
      </v-col>

      <v-col cols="12" sm="4" md="4">
        Message
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-textarea dense dark></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact"
});
</script>

<style scoped>
h1, .row {
  color: #e3e3e3 !important;
}
</style>
