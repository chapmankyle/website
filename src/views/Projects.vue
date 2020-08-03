<template>
  <v-container>
    <h1 class="mt-4">Projects</h1>
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
          title: "Work In Progress: Carbon Engine",
          github: "https://github.com/chapmankyle/carbon-engine",
          languages: "C++, Vulkan",
          description:
            "A 3D graphics engine built using C++ and Vulkan.<br />Carbon Engine aims to be an engine that can be integrated into any existing project and is easy to use. Vulkan was chosen as it provides more control over the implementation of engine features, such as pipelines and shader code."
        },
        {
          title: "Personal Website",
          github: "https://github.com/chapmankyle/website",
          languages: "VueJS, Javascript, Typescript, HTML, CSS",
          image:
            "https://user-images.githubusercontent.com/43512442/89134279-27b60280-d524-11ea-8add-030d8b01b7d6.png",
          description:
            "My personal portfolio website that was made using VueJS and Typescript.<br />I wanted to use my knowledge of web development to create a website for myself, in order to showcase what I have to offer."
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
          title: "Hasher",
          github: "https://github.com/chapmankyle/hasher",
          languages: "Electron, Javascript, HTML, CSS",
          image:
            "https://user-images.githubusercontent.com/43512442/53758331-4e52b280-3ec6-11e9-8a1e-8047e857d208.png",
          description:
            "Program that computes the <code>MD5</code>, <code>SHA-1</code>, <code>SHA-256</code> and <code>SHA-512</code> hashes of inputted text, built using Electron."
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
