import type { IAPIData } from '@/lib/types'

export const FALLBACK_DATA: IAPIData = {
  metadata: {
    name: 'Kyle Chapman',
    initials: 'KC',
    url: 'https://kylechapman.dev',
    location: 'Amsterdam, Netherlands',
    title: 'Full Stack Engineer',
    summary: 'I love learning new things and working on interesting projects',
    about: "I started learning JavaScript to prepare for IT classes in school, only to realize that we were actually getting taught Java. Ever since then, I've learnt to read more carefully. Now I have more than 3 years of professional experience and still have the same passion to learn that I've had since that day.",
    languages: ['React', 'TypeScript', 'Ruby on Rails', 'Python', 'Docker']
  },
  contact: {
    email: 'contact@kylechapman.dev',
    linkedin: 'https://www.linkedin.com/in/kyle-chapman-87062730/',
    github: 'https://github.com/chapmankyle'
  },
  experience: [
    {
      id: 7,
      dateAsString: '2024-10-01',
      startDate: 'Oct 2024',
      endDate: 'present',
      title: 'Lead Full Stack Engineer',
      type: 'Full-time',
      company: 'Zilverline B.V.',
      imagePath: '/static/zilverline-logo.jpg',
      description: 'After 6 months, I was promoted to **lead** the e-commerce platform project.\n\nAs the **lead developer**, some of my responsibilities are:\n- **Development**: 30% frontend / 55% backend / 15% maintenance\n- **A/B testing** and analysis\n- **Production** deployments\n- Performing **code reviews**',
      technologies: ['Ruby on Rails', 'Stimulus', 'jQuery', 'Bootstrap', 'PostgreSQL', 'GitHub Actions'],
      location: {
        flag: '🇳🇱',
        name: 'Amsterdam, Netherlands'
      },
      previous: 6
    },
    {
      id: 6,
      startDate: 'Apr 2024',
      endDate: 'Sep 2024',
      duration: {
        years: 0,
        months: 6
      },
      title: 'Full Stack Engineer',
      type: 'Full-time',
      company: 'Zilverline B.V.',
      imagePath: '/static/zilverline-logo.jpg',
      description: 'I am part of a team that is developing a **multi-tenant, e-commerce platform** that facilitates buying products from a **range of shops**. Supports **various payment methods** (iDEAL, Klarna, etc.) product returns, order tracking (DHL & PostNL), promotions, coupon codes, and more.\n\nSome of my responsibilities are:\n- **Development**: 55% frontend / 35% backend / 10% maintenance\n- **Shop onboarding overhaul**, which increased the number of shops onboarded by 18%\n- Dashboard **UI/UX** updates to make it easier for shop owners to find the information they need\n- **Prompt engineering** using OpenAI models to **automatically generate** product descriptions, about pages and more',
      technologies: ['Ruby on Rails', 'JavaScript', 'Stimulus', 'Bootstrap', 'Node.js', 'PostgreSQL', 'GitHub Actions'],
      location: {
        flag: '🇳🇱',
        name: 'Amsterdam, Netherlands'
      }
    },
    {
      id: 5,
      startDate: 'Sep 2021',
      endDate: 'Mar 2024',
      duration: {
        years: 2,
        months: 7
      },
      title: 'Lead Full Stack Engineer',
      type: 'Full-time',
      company: 'ydangle apps (Pty) Ltd.',
      imagePath: '/static/ydangle-logo.jpg',
      description: 'After 7 months, I was promoted to **lead** the 3D website project.\n\nAs the **lead developer**, some of my responsibilities were:\n- **Development**: 40% frontend / 50% backend / 10% maintenance\n- Implementation of **Slack and Teams** integrations to join worlds from outside our website\n- Implementation of **Sketchfab** integration to allow users to pull 3D models into their worlds\n- Implementation of a fully-fledged **achievement system** to gamify the experience, which lead to a 21% increase in monthly active users (MAU).\n- **Production** deployments\n- Performing **code reviews**\n- **Mentoring** new colleagues',
      technologies: ['React', 'TypeScript', 'Firebase', 'three.js', 'Node.js'],
      location: {
        flag: '🇿🇦',
        name: 'Cape Town, South Africa'
      },
      previous: 4
    },
    {
      id: 4,
      startDate: 'Feb 2021',
      endDate: 'Aug 2021',
      duration: {
        years: 0,
        months: 7
      },
      title: 'Full Stack Engineer',
      type: 'Full-time',
      company: 'ydangle apps (Pty) Ltd.',
      imagePath: '/static/ydangle-logo.jpg',
      description: 'I was part of a team that was developing a **3D, social website** which allowed users to interact with each other (using voice and video) in a **shared** world, **editable** by admins of the world.\n\nSome of my responsibilities were:\n- **Development**: 50% frontend / 45% backend / 5% maintenance\n- Implementation of an **editor system** so that worlds could be customizable, such as **changing the skybox** and **moving/scaling/rotating** objects in 3D space\n- Implementation of a **chat system** that supported typing indicators, threads, emojis, message reactions and more\n- Overhauled the **UI/UX** to make the website more visually appealing and easier to use',
      technologies: ['React', 'JavaScript', 'Firebase', 'three.js', 'Node.js'],
      location: {
        flag: '🇿🇦',
        name: 'Cape Town, South Africa'
      }
    },
    {
      id: 3,
      startDate: 'Feb 2020',
      endDate: 'Nov 2020',
      duration: {
        years: 0,
        months: 10
      },
      title: 'Computer Science Tutor',
      type: 'Part-time',
      company: 'Stellenbosch University',
      imagePath: '/static/stellenbosch-logo.jpg',
      description: 'I was a **tutor** for second-year university students. I helped them **understand** the course work and created **mock exams** for them to test their skills. All of my students **passed** their final exams with ease.',
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
      duration: {
        years: 0,
        months: 2
      },
      title: 'Frontend Engineer',
      type: 'Internship',
      company: 'VASTech (Pty) Ltd.',
      imagePath: '/static/vastech-logo.jpg',
      description: 'Developed a **visualization** for **geospatial data** using OpenLayers, which allowed a user to **interact** with a map of the **world**. Various data points could be plotted and played around with in order to visualize specific elements of the data points. I learnt a lot about **Vue** as a whole, how to integrate **OpenLayers** with Vue and all the quirks of **TypeScript** development.',
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
      duration: {
        years: 0,
        months: 2
      },
      title: 'Backend Engineer',
      type: 'Internship',
      company: 'VASTech (Pty) Ltd.',
      imagePath: '/static/vastech-logo.jpg',
      description: 'Developed a **speaker identification** program, which took in an **audio recording** of multiple people speaking and output a folder for **each speaker** in the audio recording. I learnt a lot about the interaction between **Python** and **REST APIs**, and how to apply various **alterations to audio** so that the unique voices could be **separated**.',
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
      description: 'Completed my **Bachelor of Science** degree in Mathematical Sciences in Computer Science, with an **honours** in **Computer Science**, in November 2020.\n\nI worked on an **online tournament platform** that could host concurrent tournaments of the game "Othello". Players were put into **matches** to determine their **skill level**, and the **best players** were eventually put in matches to determine an **overall winner**.\n\nIt had the following functionality:\n- User upload for a `.c` file containing player behaviour\n- **Validation** of uploaded player file\n- Matches scheduled in **round-robin** format\n- **Automatically created** matches for **best players** once tournament finished\n- **Analysis** of winning players',
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
      description: 'Completed my **Bachelor of Science** degree in Mathematical Sciences in **Computer Science** in November 2019.\n\nI took **various classes** in fields such as data structures, algorithms, web development and computer networks, as well as **applied mathematics** classes in linear algebra, calculus, probability, and statistics.',
      location: {
        flag: '🇿🇦',
        name: 'Stellenbosch, South Africa'
      }
    }
  ],
  projects: [
    {
      id: 4,
      title: 'Personal Website',
      github: 'https://github.com/chapmankyle/website',
      languages: ['Next.js', 'Typescript', 'Tailwind', 'Shadcn UI', 'Cloudflare Pages'],
      description: "Developed to complement my CV, as well as to showcase my skills and experience. Also it's nice to be able to say, \"yeah I have a website\". Previously, it was written in Vue, but I wanted to learn Next.js so I rewrote it.",
      isWebsite: true
    },
    {
      id: 3,
      title: 'REST API for Personal Website',
      github: 'https://github.com/chapmankyle/website-api',
      languages: ['TypeScript', 'Hono', 'Bun', 'Cloudflare Workers'],
      description: 'Developed to fetch data for my personal website, instead of having to redeploy the website every time I want to change something. Hosted as a Cloudflare Worker, so that was pretty cool to learn about.'
    },
    {
      id: 2,
      title: 'Carbon Engine',
      github: 'https://github.com/chapmankyle/carbon-engine',
      languages: ['C++', 'Vulkan', 'GLFW', 'CMake', 'Travis CI'],
      description: 'Developed a game engine in C++17 that uses the Vulkan API for rendering. It can only render a 2D triangle for now, but it was a fun project to work on in my free time. I had no prior experience with either C++ or Vulkan, so the only logical thing to do was to make a game engine from scratch, right?'
    },
    {
      id: 1,
      title: 'smath',
      github: 'https://github.com/chapmankyle/smath',
      languages: ['C++'],
      description: 'Developed a header-only C++ math library, similar to [GLM](https://github.com/g-truc/glm), written in C++17 that uses no external dependencies. For now, it supports vector and matrix operations, as well as converting between degrees and radians. Not production-ready yet, but a fun project to learn about how the math works behind the scenes. Like the [fast inverse square root](https://en.wikipedia.org/wiki/Fast_inverse_square_root).'
    }
  ]
}
