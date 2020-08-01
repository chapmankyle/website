<template>
  <v-container>
    <h1 class="mx-6 py-5">
      <mark class="heading-shadow">Contact</mark>
    </h1>

    <v-card class="mx-6 px-6 py-6">
      <v-row>
        <v-col id="ct-name" class="contact-left" cols="12" sm="4" md="4">
          Name
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-text-field v-model="senderName" solo></v-text-field>
        </v-col>

        <v-col id="ct-email" class="contact-left" cols="12" sm="4" md="4">
          Email Address
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-text-field v-model="senderEmail" solo></v-text-field>
        </v-col>

        <v-col id="ct-msg" class="contact-left" cols="12" sm="4" md="4">
          Message
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-textarea v-model="senderMessage" solo></v-textarea>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-btn id="ct-send">Send Email</v-btn>
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
#ct-name {
  color: #e06c75;
}

#ct-email {
  color: #61afef;
}

#ct-msg {
  color: #98c379;
}

#ct-send {
  color: white;
  background-color: #e06c75;
  height: 46px;
  width: 146px;
}

.contact-left {
  font-weight: bold;
  letter-spacing: 0.1rem;
}
</style>
