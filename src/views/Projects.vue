<template>
  <v-container>
    <h1 class="first-heading">Projects</h1>
    <v-divider></v-divider>

    <div v-if="loading">
      <v-skeleton-loader class="mt-6" type="card" loading></v-skeleton-loader>
      <v-skeleton-loader class="mt-6" type="card" loading></v-skeleton-loader>
      <v-skeleton-loader class="mt-6" type="card" loading></v-skeleton-loader>
      <v-skeleton-loader class="mt-6" type="card" loading></v-skeleton-loader>
      <v-skeleton-loader class="mt-6" type="card" loading></v-skeleton-loader>
    </div>

    <div class="mb-14" v-if="!loading">
      <v-card v-for="(info, i) in projects" :key="i" class="mt-6 px-6 py-4">
        <h2>{{ info.title }}</h2>

        <v-row v-if="info.image">
          <v-col cols="12" sm="6" md="6">
            <span v-html="info.description"></span>

            <br />
            <br />

            <span id="langs">Languages:</span>
            <span> {{ info.languages }}</span>

            <a :href="info.github" target="_blank" rel="noopener noreferrer">
              <v-btn class="mt-6" color="#61afef" dark block>View Code</v-btn>
            </a>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-img :src="info.image"></v-img>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col cols="12" sm="12" md="12">
            <span v-html="info.description"></span>

            <br />
            <br />

            <span id="langs">Languages:</span>
            <span> {{ info.languages }}</span>

            <a :href="info.github" target="_blank" rel="noopener noreferrer">
              <v-btn class="mt-6" color="#61afef" dark block>View Code</v-btn>
            </a>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import axios from "axios";

interface Project {
  title: string;
  github: string;
  languages: string;
  description: string;
  image?: string;
}

export default Vue.extend({
  name: "Projects",

  data() {
    return {
      loading: true,

      projects: [] as Project[],
    };
  },

  created() {
    // get projects from API
    axios.get("https://kylechapman-api.netlify.app/projects").then((resp) => {
      this.projects = resp.data;
      this.loading = false;
    });
  },
});
</script>

<style scoped>
#langs {
  font-weight: bold;
  color: #2e2e2e;
  text-decoration: underline;
  letter-spacing: 0.08rem;
}
</style>
