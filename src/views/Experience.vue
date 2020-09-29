<template>
  <v-container>
    <h1 class="first-heading">Experience</h1>
    <v-divider></v-divider>

    <div v-if="loadingExp">
      <v-skeleton-loader class="mt-6" type="image" loading></v-skeleton-loader>
    </div>

    <v-card v-if="!loadingExp" class="mt-4 mb-8 px-6 py-4">
      <v-timeline dense>
        <v-timeline-item
          v-for="(info, i) in experience"
          :key="i"
          :color="info.color"
        >
          <div class="py-4">
            <h2
              class="headline font-weight-bold"
              :style="`color: ${info.color};`"
            >
              {{ info.title }}
            </h2>

            <span style="text-align: left;">
              <strong>{{ info.startDate }}</strong>
              &mdash;
              <strong>{{ info.endDate }}</strong>
            </span>

            <br />

            <span class="font-weight-light">
              {{ info.company }}
            </span>

            <p class="mt-4" v-html="info.description"></p>

            <span class="mono-text">
              {{ convertTechToString(info.technologies) }}
            </span>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>

    <h1 class="mt-4">Education</h1>
    <v-divider></v-divider>

    <div v-if="loadingEdu">
      <v-skeleton-loader class="mt-6" type="image" loading></v-skeleton-loader>
    </div>

    <v-card v-if="!loadingEdu" class="mt-4 mb-8 px-6 py-4">
      <v-timeline dense>
        <v-timeline-item
          v-for="(info, i) in education"
          :key="i"
          :color="info.color"
        >
          <div class="py-4">
            <h2
              class="headline font-weight-bold"
              :style="`color: ${info.color};`"
            >
              {{ info.title }}
            </h2>

            <span style="text-align: left;">
              <strong>{{ info.startYear }}</strong>
              &mdash;
              <strong>{{ info.endYear }}</strong>
            </span>

            <br />

            <span class="font-weight-light">
              {{ info.place }}
            </span>

            <p class="mt-4" v-html="info.description"></p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>

    <br />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import axios from "axios";

interface Exp {
  color: string;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

interface Education {
  color: string;
  startYear: string;
  endYear: string;
  title: string;
  place: string;
  description: string;
}

export default Vue.extend({
  name: "Experience",

  data() {
    return {
      loadingExp: true,
      loadingEdu: true,

      experience: [] as Exp[],
      education: [] as Education[]
    };
  },

  created() {
    // get experience and education from API
    axios.get("https://kylechapman-api.herokuapp.com/experience").then(resp => {
      this.experience = resp.data;
      this.loadingExp = false;
    });

    axios.get("https://kylechapman-api.herokuapp.com/education").then(resp => {
      this.education = resp.data;
      this.loadingEdu = false;
    });
  },

  methods: {
    /**
     * Converts the technologies to a single string.
     * @param technologies The technologies to convert.
     * @returns {string} A single string of the technologies.
     */
    convertTechToString: function(technologies: string[]): string {
      let str = "";

      for (let i = 0; i < technologies.length; i++) {
        const tech = technologies[i];

        if (i < technologies.length - 1) {
          str += tech + " / ";
        } else {
          str += tech;
        }
      }

      return str;
    }
  }
});
</script>

<style scoped></style>
