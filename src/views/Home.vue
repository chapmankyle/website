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
          <h2 class="jumbo-padding font-weight-thin">
            Cape Town, South Africa
          </h2>
          <h2 class="jumbo-padding font-weight-thin">
            Junior Software Developer
          </h2>

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
          <h2 id="intro-heading">Hello there!</h2>
          <br />

          <p>
            My name is <strong>Kyle Chapman</strong> and I am currently 21 years
            old with a Bachelor of Science Honours degree in Computer Science.
            My current interests are C++, Vulkan and Golang.
          </p>

          <p>
            <strong>C++</strong> appeals to me because of how it gives you
            complete freedom to do what you want, but with great power comes
            great responsibility.
          </p>

          <p>
            <strong>Vulkan</strong> is appealing because of how everything needs
            to be set up by the programmer, so it requires that you know what
            you are doing and does no hand-holding. Once I have cemented my
            knowledge in C++, I aim to create a game engine using Vulkan.
          </p>

          <span>
            <strong>Golang</strong> is interesting because of how relatively new
            it is, compared to other languages, and how it deals with
            concurrency. I used Golang extensively for my Honours project and
            thoroughly enjoyed it.
          </span>
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

export default Vue.extend({
  name: "Home",

  data() {
    return {
      timeline: [
        {
          color: "#e06c75",
          year: "1998",
          icon: "mdi-baby-face",
          title: "Date of Birth",
          content:
            "I was born on <strong>18 December 1998</strong> at Vergelegen Mediclinic in Somerset West, Cape Town, South Africa. I was told that I was born at roughly 09:00 in the morning and that it was a Friday."
        },
        {
          color: "#61afef",
          year: "2002",
          icon: "mdi-dog",
          title: "My First Pet",
          content:
            "I got my first pet Labrador Retriever for my 4<sup>th</sup> birthday party and I immediately fell in love with her. <strong>Tazzy</strong> was her name and she was the most amazing pet I ever had."
        },
        {
          color: "#98c379",
          year: "2004",
          icon: "mdi-car-child-seat",
          title: "Started Junior School",
          content:
            "I started my education at <strong>SACS Junior School</strong> in Newlands, Cape Town, South Africa. I used to make paper cell phones, because my mom wouldn't let me have a real phone until I was 13, and paper laptops to pretend that I was a <em>hackerman</em> that could take over the world."
        },
        {
          color: "#e06c75",
          year: "2012",
          icon: "mdi-bus-school",
          title: "Started High School",
          content:
            "I started in grade 8 at <strong>SACS High School</strong> and completed my schooling education here. I took Biology, Geography and IT as my three subjects of choice from grades 10 to 12. I was told that we would be doing Java as the main programming language in IT and so I decided to get ahead of the class by studying <em>Javascript</em> in my holidays. Little did I know that <em>Java</em> and <em>Javascript</em> are two completely different programming languages."
        },
        {
          color: "#61afef",
          year: "2017",
          icon: "mdi-school",
          title: "Started Undergraduate Degree",
          content:
            "I started my undergraduate degree in a <strong>Bachelor of Science in Mathematical Sciences in Computer Science</strong> at the University of Stellenbosch on 17 January 2017. After three years of study, many late nights and many visits to StackOverflow, I finished my undergraduate degree with 3 distinctions in November 2019.<br /><br />I took a wide variety of modules in my 3 years, namely:<ul><li>Probability Theory and Statistics</li><li>Scientific Communication</li><li>Mathematics</li><li>Economics</li><li>Operations Research</li><li>Applied Mathematics</li><li>Computer Science</li></ul>"
        },
        {
          color: "#98c379",
          year: "2020",
          icon: "mdi-script",
          title: "Started Postgraduate Degree",
          content:
            "I started my postgraduate degree in a <strong>Bachelor of Science Honours in Mathematical Sciences in Computer Science</strong> at the University of Stellenbosch on 3 February 2020. After a full year of non-stop work and an ongoing pandemic, I finished my postgraduate degree in November 2020 and aim to start working in January 2021. <br /><br />The modules that I took in the first semester, from February to July, were:<ul><li>Computational Intelligence</li><li>Advanced Algorithms</li><li>Space Science</li></ul><br />The modules that I took in the second semester, from July to November, were:<ul><li>Digital Image Processing</li><li>Functional Programming</li><li>Machine Learning</li></ul>"
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
