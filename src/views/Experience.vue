<template>
  <v-container>
    <v-card class="mx-16 my-6 px-6 py-4">
      <h1>Experience</h1>
      <v-divider></v-divider>

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

    <v-card class="mx-16 my-8 px-6 py-4">
      <h1>Education</h1>
      <v-divider></v-divider>

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
      experience: [
        {
          color: "#e06c75",
          startDate: "Dec 2019",
          endDate: "Jan 2020",
          title: "Web Development Internship",
          company: "VASTech (Pty) Ltd.",
          description:
            "I worked on a visualization for geospatial data using OpenLayers, which allowed a user to interact with a map of the world. Various data points could be plotted and played around with in order to visualize specific elements of the data points. I learnt a lot about Vue as a whole, how to integrate OpenLayers with Vue and all the quirks of Javascript/Typescript development.",
          technologies: ["VueJS", "Javascript", "Typescript", "OpenLayers"]
        },
        {
          color: "#61afef",
          startDate: "Jun 2019",
          endDate: "Jul 2019",
          title: "Python Internship",
          company: "VASTech (Pty) Ltd.",
          description:
            "I worked on a speaker identification program, which took in an audio recording of multiple people speaking and output a separate folder for each speaker in that audio recording. I learnt a lot about the interaction between Python and REST APIs, and how to apply various alterations to audio so that the voices could be separated.",
          technologies: ["Python", "REST", "cURL"]
        }
      ] as Exp[],

      education: [
        {
          color: "#e06c75",
          startYear: "2020",
          endYear: "present",
          title: "Honours Degreee in Computer Science (BScHons)",
          place: "University of Stellenbosch",
          description:
            "I am currently in my final year of a BScHons in Mathematical Sciences, Computer Science degree."
        },
        {
          color: "#61afef",
          startYear: "2017",
          endYear: "2019",
          title: "Bachelor’s Degree in Computer Science (BSc)",
          place: "University of Stellenbosch",
          description: "I completed my Bachelor’s Degree in November 2019."
        },
        {
          color: "#98c379",
          startYear: "2004",
          endYear: "2016",
          title: "Junior and High School",
          place: "South African College School (SACS)",
          description:
            "Matriculated with a NSC Bachelor Pass and achieved the following six distinctions:<ul><li>English</li><li>Mathematics</li><li>Information Technology</li><li>Life Sciences</li><li>Geography</li><li>Life Orientation</li></ul>"
        }
      ] as Education[]
    };
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
