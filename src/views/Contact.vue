<template>
  <v-container>
    <h1 class="first-heading">Contact</h1>
    <v-divider></v-divider>

    <v-card class="mt-6 px-6 py-6">
      <h2>Feel free to contact me anytime!</h2>

      <br />
      <v-row>
        <v-col class="mb-6" cols="12" sm="12" md="12">
          <v-icon id="mail-icon" class="mr-6" large>mdi-email</v-icon>
          <a href="mailto:kyleichapman@gmail.com">
            <u class="cont">kyleichapman@gmail.com</u>
          </a>
        </v-col>

        <v-col class="mb-6" cols="12" sm="12" md="12">
          <v-icon id="linkedin-icon" class="mr-4" x-large>
            mdi-linkedin-box
          </v-icon>
          <a
            href="https://www.linkedin.com/in/kyle-chapman-87062730/"
            target="_blank"
            rel="noopener noreferrer"
            class="cont"
          >
            LinkedIn
          </a>
        </v-col>

        <v-col cols="12" sm="12" md="12">
          <v-icon id="facebook-icon" class="mr-4" x-large>
            mdi-facebook-box
          </v-icon>
          <a
            href="https://www.facebook.com/kyle.chapman.5011/"
            target="_blank"
            rel="noopener noreferrer"
            class="cont"
          >
            Facebook
          </a>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",

  data() {
    return {
      senderName: "",
      senderEmail: "",
      senderMessage: ""
    };
  }
});
</script>

<style scoped>
#mail-icon {
  color: #e06c75;
}

#linkedin-icon {
  color: #98c379;
}

#facebook-icon {
  color: #61afef;
}

.cont {
  color: #2e2e2e;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
}
</style>
