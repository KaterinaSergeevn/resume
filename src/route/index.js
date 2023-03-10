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

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

router.get('/bio', function (req, res) {
  res.render('bio', {
    layout: 'bio',
    bio: {
      name: 'Albert Einstein',
      birthdate: 'March 14, 1879',
      birthplace:
        'Ulm, Kingdom of Württemberg, German Empire',
      deathdate: 'April 18, 1955',
      deathplace: 'Princeton, New Jersey, United States',
      nationality: 'Swiss, German, American',
      occupation: 'Theoretical Physicist',
      known_for: [
        'Theory of Relativity',
        'E=mc²',
        'Photoelectric Effect',
        'Brownian Motion',
      ],
      education: [
        {
          degree: 'Doctor of Philosophy',
          field: 'Physics',
          institution: 'University of Zurich',
          year: 1905,
        },
      ],
      notable_publications: [
        {
          title: 'On the Electrodynamics of Moving Bodies',
          year: 1905,
          publisher: 'Annalen der Physik',
        },
        {
          title:
            'Does the Inertia of a Body Depend Upon Its Energy Content?',
          year: 1905,
          publisher: 'Annalen der Physik',
        },
      ],
      partners: [
        {
          name: 'Mileva Marić',
          relationship: 'First wife',
          years: '1903-1919',
        },
        {
          name: 'Elsa Einstein',
          relationship:
            "Second wife, also Einstein's first cousin",
          years: '1919-1936',
        },
      ],
      awards: [
        {
          title: 'Nobel Prize in Physics',
          year: 1921,
          description:
            'Awarded for his explanation of the photoelectric effect',
        },
      ],
      influences: [
        'Isaac Newton',
        'James Clerk Maxwell',
        'Hermann Minkowski',
      ],
      influenced: [
        'Niels Bohr',
        'Erwin Schrödinger',
        'Werner Heisenberg',
        'Richard Feynman',
      ],
      quotes: [
        'Imagination is more important than knowledge.',
        'I have no special talent. I am only passionately curious.',
        'The important thing is not to stop questioning.',
        'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
      ],
      major_discoveries: [
        {
          title: 'Photoelectric Effect',
          year: 1905,
          description:
            'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
        },
      ],
      contributions: {
        title: 'Inventions',
        description:
          'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
        year: 'Late 15th to early 16th century',
        field: 'Invention',
      },
    }
  })
})

module.exports = router;
