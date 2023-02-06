<template>
  <v-container>
    <div id="div-invalid">
      <div id="div-main">
        <div id="head-404">
          <h1 id="text-404">404</h1>
        </div>

        <h2 id="text-not-found">Page Not Found</h2>

        <p id="text-p">
          It seems that the page you are looking for does not exist.
        </p>

        <a id="home" href="/">Home</a>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PageNotFound",
});
</script>

<style scoped>
#div-invalid {
  height: 85vh;
  position: relative;
}

#div-main {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}

#text-404 {
  margin: 0;
  font-size: 188px;
  font-weight: 700;
  text-shadow: 5px 5px 0 #00eeff;
}

#div-main {
  width: 100%;
  max-width: 520px;
  text-align: center;
}

#head-404 {
  height: 210px;
  line-height: 210px;
}

#text-not-found {
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.6px;
}

#text-p {
  color: #000;
  margin-top: 20px;
  font-weight: 400;
  margin-bottom: 25px;
}

#home {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  font-weight: 400;
  color: #000;
  -webkit-box-shadow: 0px 0px 0px 2px #000, 2px 2px 0px 2px #00eeff;
  box-shadow: 0px 0px 0px 2px #000, 2px 2px 0px 2px #00eeff;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

#home:hover {
  background-color: #00eeff;
  -webkit-box-shadow: 0px 0px 0px 0px #000, 0px 0px 0px 2px #00eeff;
  box-shadow: 0px 0px 0px 0px #000, 0px 0px 0px 2px #00eeff;
}

@media only screen and (max-width: 480px) {
  #head-404 {
    height: 122px;
    line-height: 122px;
  }

  #text-404 {
    font-size: 122px;
  }

  #text-not-found {
    font-size: 26px;
  }
}
</style>
