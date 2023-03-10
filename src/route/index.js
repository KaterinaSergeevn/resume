const express = require('express')
const router = express.Router()

const header = {
  name: {
    firstname: 'Katerina',
    lastname: 'Yakimenko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в месяц',
  address: "Kyiv, boulevard Friendship of Peoples, 12",
}
const footer = {
  social: {
    email: {
      text: 'ekaterina.sergeevnadp@mail.com',
      href: 'mailto:ekaterina.sergeevnadp@mail.com',
    },
    phone: {
      text: '+380634113760',
      href: 'tel:+380634113760',
    },
    linkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

router.get('/', function (req, res) {
  res.render('index', {
    page: {
      title: 'Resume',
    },
    header,
    footer,
  })
})

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary'
    },
    header,
    footer,
    summary: {
      title: 'Summary',
      text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
    },
    experience: {
      title: 'Other experience',
      text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
    }
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills'
    },
    header,
    footer,
    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 10,
          isTop: true,
        },
        {
          name: "VS Code & NPM",
          point: 9,
          isTop: false,
        },
        {
          name: "Git & Terminal",
          point: 10,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Reading books',
          isMain: true,
        },
        {
          name: 'Shopping',
          isMain: true,
        },
        {
          name: 'Painting',
          isMain: false,
        },
      ]
    },
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education'
    },
    header,
    footer,
    main: {
      educations: [
        {
          name: 'Ukrainian Academy of Advocacy',
          isEnd: true,
        },
        {
          name: 'State Institute of Personnel Training',
          isEnd: false,
        },
        {
          name: 'Kyiv Banking Institute',
          isEnd: true,
        },
        {
          name: 'Kyiv University of Law of the National Academy of Science',
          isEnd: true,
        },
        {
          name: 'National University of Kyiv-Mohyla Academy',
          isEnd: false,
        },
      ],
      certificates: [
        {
          id: 12344,
          name: 'JS PRO',
        },
        {
          id: 45384,
          name: 'HTML/CSS Basic',
        },
        {
          id: 25389,
          name: 'IT BRAINS',
        },
      ]
    }
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: "big",
    page: {
      title: 'Resume | Work'
    },
    header,
    footer,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.it-brains.com.ua/',
          },
          duration: {
            from: '22.02.2020',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'A draft resume that was created at IT courses',
              stackAmount: 1,
              awardAmount: 2,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: "Background verification - is a feature that provides users to prove that they are real persons."
                },
                {
                  name: "Preparing SEO ptimized pages. The automated process of getting data for the app from documents."
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

module.exports = router;
