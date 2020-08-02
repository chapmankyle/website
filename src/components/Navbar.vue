<template>
  <div>
    <v-app-bar color="#2e2e2e" elevate-on-scroll app dark>
      <router-link to="/">
        <img id="logo" src="logo.jpeg" alt="Me" width="45" height="45" />
      </router-link>
      <router-link to="/">
        <v-toolbar-title id="title" class="hidden-sm-and-down">
          {{ title }}
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/projects">
        <v-btn text>
          <v-icon class="nav-icons">mdi-bag-personal</v-icon>
          Projects
        </v-btn>
      </router-link>

      <router-link to="/experience">
        <v-btn text>
          <v-icon class="nav-icons">mdi-bank</v-icon>
          Experience And Education
        </v-btn>
      </router-link>

      <router-link to="/resume">
        <v-btn text>
          <v-icon class="nav-icons">mdi-note-text</v-icon>
          Resume / CV
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/contact">
        <v-btn text>
          <v-icon class="nav-icons">mdi-cellphone-iphone</v-icon>
          Contact
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",

  props: {
    title: String
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
}

button {
  color: #e3e3e3 !important;
}

.nav-icons {
  margin-right: 10px;
  font-size: 1.3em !important;
}

#logo {
  margin-top: 0.3rem;
  margin-right: 0.8rem;
  border-radius: 40%;
}

#title {
  font-weight: bold;
  color: #e3e3e3;
  letter-spacing: 0.08rem;
  font-size: 19px;
}
</style>
