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

      <div v-for="(button, i) in buttons" :key="i">
        <router-link :to="button.url" class="hidden-sm-and-down">
          <v-btn text>
            <v-icon class="nav-icons">{{ button.icon }}</v-icon>
            {{ button.title }}
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/contact" class="hidden-sm-and-down">
        <v-btn text>
          <v-icon class="nav-icons">mdi-cellphone-iphone</v-icon>
          Contact
        </v-btn>
      </router-link>

      <div class="hidden-md-and-up">
        <v-btn @click="toggleMenu()" icon dense>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-dialog v-model="menuSelected">
      <v-card color="#2e2e2e">
        <v-row v-for="(button, i) in buttonsWithContact" :key="i">
          <v-col cols="12">
            <router-link :to="button.url">
              <v-btn @click="menuSelected = false" block text>
                <v-icon class="nav-icons">{{ button.icon }}</v-icon>
                {{ button.title }}
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface NavButton {
  title: string;
  icon: string;
  url: string;
}
// mdi-menu
export default Vue.extend({
  name: "Navbar",

  props: {
    title: String,
  },

  data() {
    return {
      menuSelected: false,

      buttons: [
        {
          title: "Projects",
          icon: "mdi-bag-personal",
          url: "/projects",
        },
        {
          title: "Experience And Education",
          icon: "mdi-bank",
          url: "/experience",
        },
        {
          title: "CV",
          icon: "mdi-note-text",
          url: "/cv",
        },
      ] as NavButton[],

      buttonsWithContact: [
        {
          title: "Projects",
          icon: "mdi-bag-personal",
          url: "/projects",
        },
        {
          title: "Experience And Education",
          icon: "mdi-bank",
          url: "/experience",
        },
        {
          title: "CV",
          icon: "mdi-note-text",
          url: "/cv",
        },
        {
          title: "Contact",
          icon: "mdi-cellphone-iphone",
          url: "/contact",
        },
      ] as NavButton[],
    };
  },

  methods: {
    /**
     * Toggles the menu selection.
     */
    toggleMenu: function () {
      this.menuSelected = !this.menuSelected;
    },
  },
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

.v-dialog__content {
  align-items: flex-start !important;
  top: 2.1rem !important;
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
