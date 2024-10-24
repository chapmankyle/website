import type { IAPIData } from '@/lib/types'

export const FALLBACK_DATA: IAPIData = {
  metadata: {
    name: 'Kyle Chapman',
    initials: 'KC',
    url: 'https://kylechapman.netlify.app',
    location: 'Amsterdam, Netherlands',
    title: 'Full Stack Engineer',
    summary: 'I love learning new things and working on interesting projects',
    languages: ['English (Native)', 'Nederlands (A2)']
  },
  experience: [
    {
      id: 7,
      dateAsString: '2024-10-01',
      startDate: 'Oct 2024',
      endDate: 'present',
      duration: '1 mo',
      title: 'Lead Full Stack Engineer',
      type: 'Full-time',
      company: 'Zilverline B.V.',
      imagePath: '/static/zilverline-logo.jpg',
      description:
        'I am part of a team that is developing an e-commerce platform that allows various shops to each sell their own products. We support various payment methods (iDEAL, Klarna, etc.), product returns, order tracking, product variations (i.e. "XS", "S" etc. for clothing items) and much more.<br /><br />Our main focus is to make it as easy as possible for people to create their own shops and start selling their products, and for customers to be able to easily support any shops of their choice by buying their products.',
      technologies: ['Ruby on Rails', 'Stimulus', 'jQuery', 'Bootstrap', 'PostgreSQL', 'GitHub Actions'],
      location: {
        flag: '🇳🇱',
        name: 'Amsterdam, Netherlands'
      }
    },
    {
      id: 6,
      startDate: 'Apr 2024',
      endDate: 'Sep 2024',
      duration: '6 mos',
      title: 'Full Stack Engineer',
      type: 'Full-time',
      company: 'Zilverline B.V.',
      imagePath: '/static/zilverline-logo.jpg',
      description: '',
      technologies: ['Ruby on Rails', 'Stimulus', 'jQuery', 'Bootstrap', 'PostgreSQL', 'GitHub Actions'],
      location: {
        flag: '🇳🇱',
        name: 'Amsterdam, Netherlands'
      }
    },
    {
      id: 5,
      startDate: 'Sep 2021',
      endDate: 'Mar 2024',
      duration: '2 yrs 7 mos',
      title: 'Lead Full Stack Engineer',
      type: 'Full-time',
      company: 'ydangle apps (Pty) Ltd.',
      imagePath: '/static/ydangle-logo.jpg',
      description:
        'I was part of a team that was developing a 3D, social website that allowed users to interact with one another in a shared environment. Environments could be created by users and were fully customizable, from the skybox to the audio you heard when walking up to something, which allowed for truly unique experiences that could not be found elsewhere. We used our own implementation of spatial audio that played sounds relative to where you were in the environment, making it feel more like reality.<br /><br />Our main focus was to make it easy for users to attend events and social gatherings from the comfort of their own home, through our 3D website. The platform was designed to host thousands of concurrent users in a single environment at any given moment.<br /><br />Some of my contributions were to solely implement a new chat system (with features such as reactions, threads, groups etc.), rewrite the logic for our editor tools (allowing users more control over how they wanted their environment to look and feel), add multiple third-party integrations (Slack, Teams, Sketchfab, etc.) and update the UX and UI to ensure a smooth and visually-appealing experience.',
      technologies: ['React', 'JavaScript', 'Firebase', 'three.js'],
      location: {
        flag: '🇿🇦',
        name: 'Cape Town, South Africa'
      }
    },
    {
      id: 4,
      startDate: 'Feb 2021',
      endDate: 'Aug 2021',
      duration: '7 mos',
      title: 'Full Stack Engineer',
      type: 'Full-time',
      company: 'ydangle apps (Pty) Ltd.',
      imagePath: '/static/ydangle-logo.jpg',
      description:
        'I was part of a team that was developing a 3D, social website that allowed users to interact with one another in a shared environment. Environments could be created by users and were fully customizable, from the skybox to the audio you heard when walking up to something, which allowed for truly unique experiences that could not be found elsewhere. We used our own implementation of spatial audio that played sounds relative to where you were in the environment, making it feel more like reality.<br /><br />Our main focus was to make it easy for users to attend events and social gatherings from the comfort of their own home, through our 3D website. The platform was designed to host thousands of concurrent users in a single environment at any given moment.<br /><br />Some of my contributions were to solely implement a new chat system (with features such as reactions, threads, groups etc.), rewrite the logic for our editor tools (allowing users more control over how they wanted their environment to look and feel), add multiple third-party integrations (Slack, Teams, Sketchfab, etc.) and update the UX and UI to ensure a smooth and visually-appealing experience.',
      technologies: ['React', 'JavaScript', 'Firebase', 'three.js'],
      location: {
        flag: '🇿🇦',
        name: 'Cape Town, South Africa'
      }
    },
    {
      id: 3,
      startDate: 'Feb 2020',
      endDate: 'Nov 2020',
      duration: '10 mos',
      title: 'Computer Science Tutor',
      type: 'Part-time',
      company: 'Stellenbosch University',
      imagePath: '/static/stellenbosch-logo.jpg',
      description: 'I was a tutor for second-year university students, helping them understand the course work and creating mock exams for them to test their skills. All of my students passed their final exams with ease.',
      technologies: ['C', 'Assembly'],
      location: {
        flag: '🇿🇦',
        name: 'Stellenbosch, South Africa'
      }
    },
    {
      id: 2,
      startDate: 'Dec 2019',
      endDate: 'Jan 2020',
      duration: '2 mos',
      title: 'Frontend Engineer',
      type: 'Internship',
      company: 'VASTech (Pty) Ltd.',
      imagePath: '/static/vastech-logo.jpg',
      description:
        'I worked on a visualization for geospatial data using OpenLayers, which allowed a user to interact with a map of the world. Various data points could be plotted and played around with in order to visualize specific elements of the data points. I learnt a lot about Vue as a whole, how to integrate OpenLayers with Vue and all the quirks of TypeScript development.',
      technologies: ['Vue.js', 'TypeScript', 'OpenLayers'],
      location: {
        flag: '🇿🇦',
        name: 'Stellenbosch, South Africa'
      }
    },
    {
      id: 1,
      startDate: 'Jun 2019',
      endDate: 'Jul 2019',
      duration: '2 mos',
      title: 'Backend Engineer',
      type: 'Internship',
      company: 'VASTech (Pty) Ltd.',
      imagePath: '/static/vastech-logo.jpg',
      description:
        'I worked on a speaker identification program, which took in an audio recording of multiple people speaking and output a separate folder for each speaker in that audio recording. I learnt a lot about the interaction between Python and REST APIs, and how to apply various alterations to audio so that the voices could be separated.',
      technologies: ['Python', 'REST', 'cURL'],
      location: {
        flag: '🇿🇦',
        name: 'Stellenbosch, South Africa'
      }
    }
  ],
  education: [
    {
      id: 2,
      startYear: '2020',
      endYear: '2020',
      title: 'Bachelor of Science Honours degree in Computer Science (BScHons)',
      school: 'Stellenbosch University',
      imagePath: '/static/stellenbosch-logo.jpg',
      description: 'Completed my Bachelor of Science degree in Mathematical Sciences in Computer Science, with an honours in Computer Science, in November 2020.',
      location: {
        flag: '🇿🇦',
        name: 'Stellenbosch, South Africa'
      }
    },
    {
      id: 1,
      startYear: '2017',
      endYear: '2019',
      title: 'Bachelor of Science degree in Computer Science (BSc)',
      school: 'Stellenbosch University',
      imagePath: '/static/stellenbosch-logo.jpg',
      description: 'Completed my Bachelor of Science degree in Mathematical Sciences in Computer Science in November 2019.',
      location: {
        flag: '🇿🇦',
        name: 'Stellenbosch, South Africa'
      }
    }
  ]
}
