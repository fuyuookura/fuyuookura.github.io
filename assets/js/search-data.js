// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experience",
          title: "Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-physiological-and-psychological-responses-to-urban-greenery-immersive-experiment-using-virtual-reality-and-multimodal-measurement-abstract-accepted-for-presentation-at-aag-2026",
          title: 'Physiological and Psychological Responses to Urban Greenery: Immersive Experiment Using Virtual Reality and...',
          description: "",
          section: "News",},{id: "news-a-multi-user-and-multi-agent-approach-to-community-engagement-abstract-accepted-for-presentation-at-aag-2026",
          title: 'A Multi-User and Multi-Agent Approach to Community Engagement — abstract accepted for presentation...',
          description: "",
          section: "News",},{id: "news-our-vr-experiment-has-gained-irb-approval-click-here-for-more-information-and-to-participate",
          title: 'Our VR Experiment has gained IRB approval! Click here for more information and...',
          description: "",
          section: "News",},{id: "projects-urban-narratives",
          title: 'Urban Narratives',
          description: "Planning with Residents - Linking Simulations to Community Narratives",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chinatown.html";
            },},{id: "projects-ai-co-design",
          title: 'AI Co-Design',
          description: "Multi-Agent Participatory Platforms for Planning and School Choice",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collectivedesign.html";
            },},{id: "projects-ford",
          title: 'Ford',
          description: "Summer Intern at Information Department",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ford.html";
            },},{id: "projects-ikea",
          title: 'IKEA',
          description: "Intern at People &amp; Culture Department",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ikea.html";
            },},{id: "projects-lenovo",
          title: 'Lenovo',
          description: "Intern at Global Cultural Engagement Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lenovo.html";
            },},{id: "projects-global-analytics",
          title: 'Global Analytics',
          description: "Data Science for Sustainable Cities, Field Research &amp; Cross-Cultural Urban Analytics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uruguay.html";
            },},{id: "projects-urban-sensing",
          title: 'Urban Sensing',
          description: "Immersive Experiment Using Virtual Reality and Multimodal Measurement",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vr.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
