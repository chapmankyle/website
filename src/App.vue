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
mark {
  color: white;
  background-color: #f6e58d;
}

#app {
  font-family: "Roboto", sans-serif;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mono-text {
  font-family: "Courier Prime", monospace;
}

.bold-ital {
  font-weight: bold;
  font-style: italic;
}

.heading-shadow {
  font-size: 2.2rem;
  letter-spacing: 0.2rem;
  text-shadow: 1px 1px 3px #0984e3;
}
</style>
