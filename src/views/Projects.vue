<template>
  <v-container>
    <h1 class="mx-16 mt-6">Projects</h1>
    <v-divider class="mx-16"></v-divider>

    <v-card v-for="(info, i) in projects" :key="i" class="mx-16 mt-6 px-6 py-4">
      <h2>{{ info.title }}</h2>

      <v-row v-if="info.image">
        <v-col cols="12" sm="6" md="6">
          <span v-html="info.description"></span>

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
          description:
            "A 3D graphics engine built using C++ and Vulkan.<br />Carbon Engine aims to be an engine that can be integrated into any existing project and is easy to use. Vulkan was chosen as it provides more control over the implementation of engine features, such as pipelines and shader code."
        },
        {
          title: "Personal Website",
          github: "https://github.com/chapmankyle/website",
          image: "https://user-images.githubusercontent.com/43512442/89134279-27b60280-d524-11ea-8add-030d8b01b7d6.png",
          description: "My personal portfolio website that was made using VueJS and Typescript."
        },
        {
          title: "Dodger Game",
          github: "https://github.com/chapmankyle/dodger-game",
          image:
            "https://user-images.githubusercontent.com/43512442/88462158-88509a00-cea9-11ea-9362-96e59c16dba9.png",
          description:
            "Dodger Game is a 2D Java game based on dodging traffic for as long as possible, while other cars come towards you in three different lanes.<br />This was a take on the games that I used to play when I was younger."
        },
        {
          title: "Hasher",
          github: "https://github.com/chapmankyle/hasher",
          image:
            "https://user-images.githubusercontent.com/43512442/53758331-4e52b280-3ec6-11e9-8a1e-8047e857d208.png",
          description:
            "Program that computes the <code>MD5</code>, <code>SHA-1</code>, <code>SHA-256</code> and <code>SHA-512</code> hashes of inputted text, built using Electron."
        },
        {
          title: "Epi-Use Portal",
          github: "https://github.com/chapmankyle/euportal",
          description:
            "Epi-Use website template that allows businesses to create their own shopping website.<br />A group of us students created a website for the company Epi-Use."
        },
        {
          title: "Chatter",
          github: "https://github.com/chapmankyle/chatter",
          description:
            "A peer-to-peer communication program written in Java.<br />A server is set up that listens on a specific port number, then any clients that wish to connect will be connected to the server and can start sending messages to everyone on the server (global chat) or specific people (whisper)."
        },
        {
          title: "Scripts",
          github: "https://github.com/chapmankyle/scripts",
          description:
            "Installation scripts for various Linux programs that I have needed to install over the years."
        }
      ] as Project[]
    };
  }
});
</script>

<style scoped></style>
