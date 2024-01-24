/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Cole",
  logo_name: "Cole.Myers()",
  nickname: "Cole / asdf",
  full_name: "Coleton Myers",
  subTitle: "Mechanical Designer, Tinker-er, CAD Monkey.",
  resumeLink: "https://coleton.ca/resume.pdf",
  mail: "mailto:c4myers@uwaterloo.ca",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/callum-sh",
  linkedin: "https://www.linkedin.com/in/coleton/",
  gmail: "c4myers@uwaterloo.ca",
};

const skills = {
  data: [
    {
      title: "",
      fileName: "FullStackImg",
      skills: [
        "• Delivered commercial applications using Python, Java, C++, and C.",
        "• Led development of 4 developers to create a commercial web application suited for +30,000 users and projected to generate $200k in revenue.",
        "• Worked on production code used on manufacturing floors of major automotive manufacturers including Porsche, BMW, and Audi.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Adn",
          fontAwesomeClassname: "simple-icons:airbnb",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Solidworks",
          fontAwesomeClassname: "simple-icons:adn",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Unreal Engine",
          fontAwesomeClassname: "simple-icons:unrealengine",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "LaTex",
          fontAwesomeClassname: "simple-icons:latex",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    // {
    //   title: "Interpersonal",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "• Leading a software delivery team of 3 people.",
    //     "• Point of contact between the sales department and our development team.",
    //     "• Instruct high-school classes on the fundamentals of agile methodologies, computer science, and engineering.",
    //     "• Responsible for the teaching 2x 30+ cohorts of students game design and agile methodologies.",
    //     "• Certified Scrum Master (CSM).",
    //   ],
    //   softwareSkills: [],
    // },
    // {
    //   title: "Hardware",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "• Manufactured real-world products with 3D-printers and CNC machines.",
    //     "• Researched industry grade inference hardware for real-world clients.",
    //     "• Presented hardware projects to the United Nations.",
    //   ],
    //   softwareSkills: [
    //     // {
    //     //   skillName: "AWS",
    //     //   fontAwesomeClassname: "simple-icons:amazonaws",
    //     //   style: {
    //     //     color: "#FF9900",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Netlify",
    //     //   fontAwesomeClassname: "simple-icons:netlify",
    //     //   style: {
    //     //     color: "#38AFBB",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Heroku",
    //     //   fontAwesomeClassname: "simple-icons:heroku",
    //     //   style: {
    //     //     color: "#6863A6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Firebase",
    //     //   fontAwesomeClassname: "simple-icons:firebase",
    //     //   style: {
    //     //     color: "#FFCA28",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "PostgreSQL",
    //     //   fontAwesomeClassname: "simple-icons:postgresql",
    //     //   style: {
    //     //     color: "#336791",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "MongoDB",
    //     //   fontAwesomeClassname: "simple-icons:mongodb",
    //     //   style: {
    //     //     color: "#47A248",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Docker",
    //     //   fontAwesomeClassname: "simple-icons:docker",
    //     //   style: {
    //     //     color: "#1488C6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "GitHub Actions",
    //     //   fontAwesomeClassname: "simple-icons:githubactions",
    //     //   style: {
    //     //     color: "#5b77ef",
    //     //   },
    //     // },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Toronto",
      subtitle:
        "Honors Bachelor of Science; Computer Science and Math, specializing in AI",
      logo_path: "uoft.png",
      alt_name: "uoft",
      duration: "2020 - 2024",
      descriptions: [
        "• GPA 3.91/4.00.",
        "• Classes of note include Operating Systems, Data Structures and Analysis, Advanced Multivariable Calculus with Proofs, Software Design, Web Programming, Software Engineering, Machine Learning, and Artificial Intelligence.",
        "• Awards include Dean's List Scholar x2, BC Excellence Scholarship, Provincial Leadership Award, BMO Community Service Award, and the University of Toronto National Book Award.",
      ],
    },
    {
      title: "Technology Leadership Initiative (TLI)",
      subtitle: "Toronto, ON",
      logo_path: "tli.png",
      alt_name: "tli",
      duration: "2021 - present",
      descriptions: [
        "• Selected as one of the 23 students enrolled into the fourth cohort of the Technology Leadership Initiative for students who show creativity, resilience, and grit to work on industry-integrated classroom learning, tailored leadership training for technologists, and industry internships.",
      ],
    },
    {
      title: "Digital Media Academy (DMA)",
      subtitle: "Vancouver, BC",
      logo_path: "dma.png",
      alt_name: "dma",
      duration: "2017 - present",
      descriptions: [
        "• Showcased my projects, including an electronic kinematics lab, aquaponics system, and self driving miniature electric car prototype, to the United Nations, who visited 2 schools in Canada as part of the OECD’s Future of Education and Skills 2030 initiative",
        "• Built a low cost kinematics lab alternative using Arduino, C++, and 3D printing to save the physics department )180/unit.",
        "• Introduced agile delivery methods into students workflow, helping to structure the work routines of over 500 students.",
        "• Work in a mentorship capacity with computer science and engineering students to help them develop their skills and projects.",
        "• Taught Unreal Engine and C++ to 50 students as part of a summer bootcamp at Capilano University.",
        "• 3D printed 1000+ ‘earsavers’ for Lions Gate Hospital and local care homes during the beginning of the Covid-19 pandemic.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Scrum Master (CSM)",
      subtitle: "Scrum Alliance",
      logo_path: "csm.png",
      certificate_link: "https://bcert.me/schbdvbxr",
      alt_name: "csm-certificate",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Certified Scrum Product Owner (CSPO)",
      subtitle: "Scrum Alliance",
      logo_path: "cspo.png",
      certificate_link: "https://bcert.me/sfpihcdir",
      alt_name: "cspo-certificate",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Laser Application Training",
      subtitle: "Scansonic",
      logo_path: "big.png",
      certificate_link: "",
      alt_name: "laser-training",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        // {
        //   title: "Full Stack Developer (Intern)",
        //   company: "Valora Infotech",
        //   company_url: "https://valora-infotech.business.site/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Mar 2021",
        //   location: "Office",
        //   description: `Train, manage and provide guidance to junior software development staff.
        //   Work closely with the Project Manager and Team Leads on change request functions.
        //   Develops new and maintains existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Full Stack Developer (Freelancer)",
        //   company: "NightOwls",
        //   company_url: "http://nightowls.company/",
        //   logo_path: "nightowls.jpg",
        //   duration: "Sep 2020 - Oct 2020",
        //   location: "Work From Home",
        //   description: `Work closely with the Client and Team on change request functions.
        //   We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
        //   `,
        //   // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
        //   color: "#ee3c26",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Cross Winter of Code Mentor",
        //   company: "CWOC",
        //   company_url: "https://crosswoc.ieeedtu.in/",
        //   logo_path: "cwoc.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        // {
        //   title: "GitHub Student Developer",
        //   company: "GitHub",
        //   company_url: "https://github.com/",
        //   logo_path: "github.png",
        //   duration: "Nov 2019 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Contribute to Open Source Community and Open Source Project.",
        //   color: "#040f26",
        // },
        // {
        //   title: "Google Local Guide",
        //   company: "Google Map",
        //   company_url: "https://maps.google.com/localguides/",
        //   logo_path: "localguide.png",
        //   duration: "Sep 2018 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "GDG Student Volunteer",
        //   company: "Google Developer Groups",
        //   company_url: "https://gdg.community.dev/",
        //   logo_path: "gdg.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "E. F. I. Student Volunteer",
        //   company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "efi.png",
        //   duration: "Apr 2017 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //   color: "#5a900f",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have been fortunate enough to work on engaging projects ranging from web applications, to robotics frameworks, and even AI detection algorithms. Some of my work is currently being used in commercial settings including major automotive manufacturing warehouses, Canadian offices including the Royal Bank of Canada and the Government of Canada, in addition to the projects that are purely for personal use. Click on the projects below to learn more!",
  avatar_image_path: "edu.svg",
};

// Contact Page
const contactPageData = {};

const projects = {
  data: [
    {
      id: "0",
      name: "Agile Tool Suite",
      details: "agile",
      content:
        "During the beginning of the Covid-19 pandemic, a friend and I built out a simple Competing Values Framework (CVF) tool that helped IncrementOne (a consulting firm) move some of their trainings online. ",
      description:
        "Leading a software delivery team of 3 to create an agile tool suite for 30,000+ users and clients including UBC, RBC, Telus, and the Government of Canada.\n",
      languages: [],
    },
    {
      id: "4",
      name: "Robotic Welding Robot",
      details: "scansonic",
      content: "practice content",
      description:
        "Programmed a data annotation tool in Python for labelling deep learning training models, allowing over 90% accurate defect detection for Berlin Industrial Group's major clients, including BMW, WV, Audi, Porsche, and Lamborghini.",
      languages: [],
    },
    {
      id: "3",
      name: "Senso Auto Education",
      details: "senso",
      description:
        "Collaborated with 3 students, Senso.ai, and the UofT's Technology Leadership Initiative (TLI) to develop an MVP to educate consumers on their future car purchases in order to minimize the likelihood of defaulting on their loan payments.",
      languages: [],
    },
    {
      id: "3",
      name: "Up Good Podcast",
      details: "podcast",
      description:
        "Co-host a podcast interviewing industry experts, providing students insights on best preparing for the workplace.",
      languages: [],
    },
    {
      id: "3",
      name: "Autocrawler Robot",
      details: "xaxxon",
      description:
        "My official introduction to AI, robotics, and manufacturing using PyTorch, ROS, 3D printers, CNC machines, and more.",
      languages: [],
    },
    {
      id: "9",
      name: "Audio Space Accumulator",
      details: "tlbc",
      description:
        "Created an application that allows users to filter through live audio events across multiple streaming platforms for Thought Leadership Branding Club.",
      languages: [],
    },
    {
      id: "2",
      name: "Vagus (wip)",
      details: "",
      description:
        "Using Figma, Python (PyTorch), and React to develop a tool that gains a holistic understanding of oneself and provides quantitative insights as to how to maximize one's routines for a given optimization constraint. ",
      languages: [],
    },
    {
      id: "1",
      name: "Competition Mars Rover (wip)",
      details: "",
      description:
        "Created a virtual testing environment in Gazebo to test the design, code, and functionality as part of the University of Toronto's Robotics for Space Exploration (RSX) club. ",
      languages: [],
    },
    {
      id: "5",
      name: "Reverse Wordle Solver (wip)",
      details: "",
      description:
        "Coded a C program that takes a completed Wordle answering pattern and returns all possible sequences of words that could have resulted in the given pattern.",
      languages: [],
    },
    {
      id: "6",
      name: "Digital Media Academy (assorted) (wip)",
      details: "",
      description:
        "Created an electronic kinematics lab, aquaponics system, and self driving miniature electric car.",
      languages: [],
    },
    // {
    //   id: "7",
    //   name: "Manim Projects (wip)",
    //   details: "manim",
    //   description:
    //     "Used 3Blue1Brown's Python Manim Library to animate mathematical concepts instead of doing actual linear algebra homework.",
    //   languages: [],
    // },
    {
      id: "8",
      name: "Rasterization Engine (wip)",
      details: "",
      description:
        "Utilized rasterization algorithms to display 3D models onto a 2D screen using C++.",
      languages: [],
    },
    {
      id: "4",
      name: "Personal Portfolio",
      details: "",
      description: "You're currently on it...",
      languages: [],
    },
    {
      id: "9",
      name: "Test Block",
      details: "agile",
      description: "You're currently on it...",
      languages: [],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
