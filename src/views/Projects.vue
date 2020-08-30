<template>
  <v-container>
    <h1 class="first-heading">Projects</h1>
    <v-divider></v-divider>

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
            <v-btn class="mt-6" color="#61afef" dark block>
              View Code
            </v-btn>
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
            <v-btn class="mt-6" color="#61afef" dark block>
              View Code
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-card>

    <br />
    <br />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

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
      projects: [
        {
          title: "Work In Progress: smath",
          github: "https://github.com/chapmankyle/smath",
          languages: "C++",
          description:
            "A header-only C++ math library designed for use in graphics software.<br/><br/><em>smath</em> is written in C++17, is platform independent and has no external dependencies. Performance was favoured over accuracy for some of the functions, and currently only a small set of functions have been implemented.<br/>My aim for this library is to be able to use this in any future games that I develop, so that I have complete control over what all the functions do. It also makes it easier to add new features if the need arises.<br/>Developing this library has been really interesting because I have to constantly learn new things."
        },
        {
          title: "Personal Website",
          github: "https://github.com/chapmankyle/website",
          languages: "VueJS, Javascript, Typescript, HTML, CSS",
          image:
            "https://user-images.githubusercontent.com/43512442/90319271-d0a62980-df36-11ea-9380-33eef30c6830.png",
          description:
            "My personal portfolio website that was made using VueJS and Typescript.<br/><br/>I wanted to use my knowledge of web development to create a website for myself, in order to showcase what I have to offer. I made an effort to make my website quite personal so that any person who visits will have a deeper understanding of who I am, as opposed to simply what my experience and qualifications are."
        },
        {
          title: "Dodger Game",
          github: "https://github.com/chapmankyle/dodger-game",
          languages: "Java",
          image:
            "https://user-images.githubusercontent.com/43512442/88462158-88509a00-cea9-11ea-9362-96e59c16dba9.png",
          description:
            "Dodger Game is a 2D Java game based on dodging traffic for as long as possible, while other cars come towards you in three different lanes.<br />This was a take on the games that I used to play when I was younger."
        },
        {
          title: "Epi-Use Portal",
          github: "https://github.com/chapmankyle/euportal",
          languages: "React, Flask, HTML, CSS",
          description:
            "Epi-Use website template that allows businesses to create their own shopping website.<br />A group of us students created a website for the company Epi-Use."
        },
        {
          title: "Chatter",
          github: "https://github.com/chapmankyle/chatter",
          languages: "Java, SceneBuilder",
          description:
            "A peer-to-peer communication program written in Java.<br />A server is set up that listens on a specific port number, then any clients that wish to connect will be connected to the server and can start sending messages to everyone on the server (global chat) or specific people (whisper)."
        },
        {
          title: "Scripts",
          github: "https://github.com/chapmankyle/scripts",
          languages: "Bash",
          description:
            "Installation scripts for various Linux programs that I have needed to install over the years."
        },
        {
          title: "Dotfiles",
          github: "https://github.com/chapmankyle/dotfiles",
          languages: "Bash",
          description: "Collection of my dotfiles used in my Linux environment."
        }
      ] as Project[]
    };
  }
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
