import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

// define constants for title
const prefix = "Kyle Chapman";
const separator = "/ ";
const prefWithSep = prefix + " " + separator;

// define valid routes
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: prefix,
      metaTags: [
        {
          name: "Home page",
          content: "The home page for my portfolio website."
        }
      ]
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
    meta: {
      title: prefWithSep + " Projects",
      metaTags: [
        {
          name: "Projects",
          content: "The projects that I have worked on throughout the years."
        }
      ]
    }
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../views/Experience.vue"),
    meta: {
      title: prefWithSep + " Experience",
      metaTags: [
        {
          name: "Experience",
          content: "My work experience."
        }
      ]
    }
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
    meta: {
      title: prefWithSep + " Resume",
      metaTags: [
        {
          name: "Resume",
          content: "My personal curriculum vitae."
        }
      ]
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      title: prefWithSep + " Contact",
      metaTags: [
        {
          name: "Contact",
          content: "Contact me directly."
        }
      ]
    }
  },
  {
    path: "*",
    name: "Page Not Found",
    component: () => import("../views/PageNotFound.vue"),
    meta: {
      title: prefix,
      metaTags: [
        {
          name: "Page Not Found",
          content: "The page requested is not available."
        }
      ]
    }
  }
];

// construct router
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

/**
 * Called before each page load.
 * Credit to: https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
 */
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => {
      if (el.parentNode == null) {
        return;
      }

      return el.parentNode.removeChild(el);
    }
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef: any) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;
