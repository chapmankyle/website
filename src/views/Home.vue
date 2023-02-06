<template>
  <v-container fluid>
    <v-parallax
      id="jumbo"
      dark
      style="height: 400px"
      src="https://user-images.githubusercontent.com/43512442/89060263-035ef800-d363-11ea-9546-ca6cb1ff5acf.png"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="jumbo-padding">{{ banner.name }}</h1>
          <h2 class="jumbo-padding font-weight-thin">{{ banner.location }}</h2>
          <h2 class="jumbo-padding font-weight-thin">{{ banner.position }}</h2>

          <div class="jumbo-padding">
            <v-btn class="push-right" icon dark x-large>
              <a
                href="https://github.com/chapmankyle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon class="large-icon" dark>mdi-github-circle</v-icon>
              </a>
            </v-btn>
            <v-btn class="push-right" icon dark x-large>
              <a
                href="https://www.linkedin.com/in/kyle-chapman-87062730/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon class="large-icon" dark>mdi-linkedin-box</v-icon>
              </a>
            </v-btn>
            <v-btn icon dark x-large>
              <a
                href="https://www.facebook.com/kyle.chapman.5011/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon class="large-icon" dark>mdi-facebook-box</v-icon>
              </a>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <br />

    <v-card class="other-cards">
      <h1>About Me</h1>
      <v-divider></v-divider>

      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="6" md="6">
          <v-img
            class="img-center"
            src="https://user-images.githubusercontent.com/43512442/89127956-413e5680-d4f2-11ea-9ce0-df4346185593.png"
            alt="me"
            width="220"
            height="420"
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <h2 id="intro-heading">{{ about.title }}</h2>
          <br />

          <p v-html="about.description"></p>

          <div v-for="(info, i) in about.content" :key="i">
            <p v-html="info"></p>
          </div>

          <span v-html="about.content_last"></span>
        </v-col>
      </v-row>
    </v-card>

    <br />

    <v-card class="other-cards">
      <h1>Personal Story</h1>
      <v-divider></v-divider>

      <v-timeline>
        <v-timeline-item
          v-for="(info, i) in timeline"
          :key="i"
          :color="info.color"
          :icon="info.icon"
          dark
          fill-dot
        >
          <template v-slot:opposite>
            <span
              class="headline font-weight-bold"
              :style="`color: ${info.color};`"
            >
              {{ info.year }}
            </span>
          </template>
          <div class="py-4">
            <h2
              class="headline font-weight-bold mb-4"
              :style="`color: ${info.color};`"
            >
              {{ info.title }}
            </h2>
            <span v-html="info.content"></span>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>

    <br />
    <br />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import axios from "axios";

interface Banner {
  name: string;
  location: string;
  position: string;
}

interface About {
  title: string;
  description: string;
  content: string[];
  content_last: string;
}

interface Story {
  title: string;
  year: string;
  icon: string;
  color: string;
  content: string;
}

export default Vue.extend({
  name: "Home",

  data() {
    return {
      banner: {} as Banner,
      about: {} as About,

      timeline: [] as Story[],
    };
  },

  created() {
    // get information from API
    axios.get("https://kylechapman-api.netlify.app/banner").then((resp) => {
      this.banner = resp.data;
    });

    axios.get("https://kylechapman-api.netlify.app/about").then((resp) => {
      this.about = resp.data;
    });

    axios.get("https://kylechapman-api.netlify.app/story").then((resp) => {
      this.timeline = resp.data;
    });
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: #e3e3e3 !important;
}

#jumbo {
  width: 100% !important;
}

#intro-heading {
  color: #98c379;
}

.jumbo-padding {
  padding: 20px 0;
}

.large-icon {
  width: 44px !important;
  height: 44px !important;
  font-size: 44px !important;
}

.img-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.push-right {
  margin-right: 2rem;
}

.other-cards {
  margin: 0 2rem;
  padding: 1rem 2rem;
}

@media screen and (max-width: 863px) {
  .other-cards {
    margin: 0;
    padding: 0.8rem 1.2rem;
  }
}
</style>
