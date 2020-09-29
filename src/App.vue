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

import axios from "axios";

export default Vue.extend({
  name: "App",

  components: {
    Navbar,
    Footer
  },

  created() {
    // make GET request so that page loads fast when data needs to be fetched
    axios.get("https://kylechapman-api.herokuapp.com/");
  }
});
</script>

<style>
a {
  text-decoration: none;
}

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

.first-heading {
  margin-top: 16px;
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

@media screen and (max-width: 863px) {
  .first-heading {
    margin-top: 0;
  }
}
</style>
