<template>
  <v-container fluid>
    <v-parallax
      id="jumbo"
      dark
      style="height: 400px;"
      src="https://user-images.githubusercontent.com/43512442/89060263-035ef800-d363-11ea-9546-ca6cb1ff5acf.png"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="jumbo-padding">Kyle Chapman</h1>
          <h2 class="jumbo-padding font-weight-thin">Cape Town, South Africa</h2>
          <h2 class="jumbo-padding font-weight-thin">BSc Honours in Computer Science</h2>

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

    <v-card class="mx-6 px-6 py-6">
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
              :v-text="info.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 class="headline mb-4" :style="`color: ${info.color};`">
              {{ info.title }}
            </h2>
            <div>
              {{ info.content }}
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="amber" icon="mdi-school" fill-dot>
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold amber--text`"
              v-text="2017"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 amber--text`">Started </h2>
            <div>
              I started studying for my undergraduate degree at the University of Stellenbosch.
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="red" icon="mdi-script" fill-dot>
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold red--text`"
              v-text="2020"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 red--text`">Started Postgraduate Degree</h2>
            <div>
              I started my postgraduate degree at the University of Stellenbosch.
            </div>
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

export default Vue.extend({
  name: "Home",

  data() {
    return {
      timeline: [
        {
          color: "#ed6a40",
          year: "1998",
          icon: "mdi-baby-face",
          title: "Date of Birth",
          content: "I was born on 18 December 1998 at Vergelegen Mediclinic in Somerset West, Cape Town, South Africa. I was told that I was born at roughly 09:00 in the morning and that it was a Friday."
        },
        {
          color: "#6f3637",
          year: "2002",
          icon: "mdi-dog",
          title: "My First Pet",
          content: "I got my first pet Labrador Retriever for my fourth birthday party and I immediately fell in love with her. Tazzy was her name and she was the most amazing pet I ever had."
        },
        {
          color: "#ce8054",
          year: "2004",
          icon: "mdi-car-child-seat",
          title: "Started Junior School",
          content: "I started my education at SACS Junior School."
        },
        {
          color: "#2b4448",
          year: "2012",
          icon: "mdi-bus-school",
          title: "Started High School",
          content: "I started in grade 8 at SACS High School."
        }
      ]
    };
  }
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

.jumbo-padding {
  padding: 20px 0;
}

.large-icon {
  width: 44px !important;
  height: 44px !important;
  font-size: 44px !important;
}

.push-right {
  margin-right: 2rem;
}
</style>
