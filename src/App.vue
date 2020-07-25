<template>
  <v-app id="app">
    <Navbar title="About Me" />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Navbar,
    Footer
  }
});
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bold-ital {
  font-weight: bold;
  font-style: italic;
}
</style>
