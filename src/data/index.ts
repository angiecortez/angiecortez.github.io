export interface BilingualStr {
  es: string
  en: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: BilingualStr
  achievements: BilingualStr[]
  stack: string[]
  current?: boolean
}

export interface Project {
  title: string
  description: BilingualStr
  stack: string[]
  github: string
  demo: string
  image: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Thoughtworks',
    role: 'Senior Developer',
    period: 'Sep 2025 – present',
    location: 'Latam (remote)',
    description: {
      es: 'Desarrollo del design system de componentes reutilizables para todos los equipos de eCargo en Latam. Construcción de una biblioteca de componentes escalable que estandariza la UI y acelera el desarrollo en múltiples squads.',
      en: 'Building a reusable component design system for all eCargo Latam teams. Developing a scalable component library that standardizes the UI and accelerates development across multiple squads.',
    },
    achievements: [
      {
        es: 'Implementé el design system con React + TypeScript adoptado por todos los equipos de producto en Latam',
        en: 'Implemented design system with React + TypeScript adopted by all product teams across Latam',
      },
      {
        es: 'Aumenté la cobertura de testing en 40% estableciendo estándares de calidad con Jest',
        en: 'Increased test coverage by 40% establishing quality standards with Jest',
      },
    ],
    stack: ['ReactJS', 'TypeScript', 'Tailwind', 'styled-components', 'Jest', 'Storybook'],
    current: true,
  },
  {
    company: 'CSTI / Universidad UTP',
    role: 'React Software Engineer · Contractor',
    period: 'Sep 2024 – Jun 2026',
    location: 'Lima, Perú',
    description: {
      es: 'Plataforma universitaria para gestión de rendimiento y aprendizaje de estudiantes y docentes de la Universidad UTP. Implementación de nuevas funcionalidades y mejoras continuas de calidad como contractor externo.',
      en: 'University platform for performance and learning management for students and teachers at Universidad UTP. Implementation of new features and continuous quality improvements as an external contractor.',
    },
    achievements: [
      {
        es: 'Mejoré la experiencia de usuario y cobertura de testing en 40%',
        en: 'Improved user experience and test coverage by 40%',
      },
    ],
    stack: ['ReactJS', 'Sass', 'Tailwind', 'styled-components', 'Jest', 'ThreeJS'],
  },
  {
    company: 'Lapzo',
    role: 'Frontend Software Engineer',
    period: 'Jun 2022 – Sep 2024',
    location: 'México (remote)',
    description: {
      es: 'Plataforma de gestión de rendimiento, aprendizaje y retención de empleados para el TEC de Monterrey — una de las universidades más grandes de Latinoamérica. Desarrollé y optimicé el sistema para estudiantes, docentes y administradores, integrando Hasura + GraphQL para sincronización de datos en tiempo real y colaborando con equipos multidisciplinarios para asegurar la cohesión entre frontend y backend con NestJS.',
      en: 'Performance management, learning and employee retention platform for TEC de Monterrey — one of Latin America\'s largest universities. Developed and optimized the system for students, teachers and administrators, integrating Hasura + GraphQL for real-time data sync and collaborating with cross-functional teams to ensure frontend-backend cohesion with NestJS.',
    },
    achievements: [
      {
        es: 'Integración de datos en tiempo real con Hasura + GraphQL que redujo tiempos de carga y mejoró la experiencia de más de 50,000 usuarios',
        en: 'Real-time data integration with Hasura + GraphQL that reduced load times and improved experience for 50,000+ users',
      },
      {
        es: 'Lideré la migración de componentes clave a arquitectura basada en Redux mejorando la mantenibilidad del sistema',
        en: 'Led migration of key components to Redux-based architecture improving system maintainability',
      },
    ],
    stack: ['ReactJS', 'GraphQL', 'Hasura', 'NestJS', 'Tailwind', 'styled-components', 'Redux', 'Firebase', 'PostgreSQL', 'ThreeJS'],
  },
  {
    company: 'NTT DATA Perú',
    role: 'React Developer',
    period: 'Jun 2021 – Jun 2022',
    location: 'Lima, Perú',
    description: {
      es: 'Portal web para solicitudes de préstamos vehiculares de Banco Pichincha en Ecuador. Integración con APIs externas para verificación en tiempo real.',
      en: 'Web portal enabling Banco Pichincha clients in Ecuador to apply for vehicle loans efficiently. Integration with external APIs for real-time data verification.',
    },
    achievements: [
      {
        es: 'Reduje tiempos de aprobación de solicitudes en 20% mediante optimizaciones de frontend',
        en: 'Reduced loan application approval times by 20% through frontend optimizations',
      },
    ],
    stack: ['ReactJS', 'GraphQL', 'styled-components', 'Salesforce'],
  },
  {
    company: 'Genderlab',
    role: 'React Developer',
    period: 'Ago 2020 – Jun 2021',
    location: 'Lima, Perú',
    description: {
      es: 'Lab de innovación para cerrar brechas de género en el trabajo. Dashboards interactivos para evaluación de acoso laboral en empresas.',
      en: 'Innovation lab aimed at closing gender gaps in the workplace. Interactive dashboards for workplace harassment assessment in companies.',
    },
    achievements: [
      {
        es: 'Dashboards interactivos que redujeron incidentes reportados en 15%',
        en: 'Interactive dashboards that reduced reported incidents by 15%',
      },
    ],
    stack: ['ReactJS', 'GraphQL', 'styled-components', 'NextJS', 'ThreeJS'],
  },
  {
    company: 'InLearning',
    role: 'React Developer',
    period: 'May 2019 – Ago 2020',
    location: 'Lima, Perú',
    description: {
      es: 'Sistema de gestión educativa para más de 100,000 estudiantes y 5,000 colaboradores en institutos de educación superior.',
      en: 'Educational management system for more than 100,000 students and 5,000 collaborators across higher education institutes.',
    },
    achievements: [
      {
        es: 'Incrementé retención de usuarios y revenue en 30%',
        en: 'Increased user retention and company revenue by 30%',
      },
    ],
    stack: ['React.js', 'Next.js', 'Vue', 'Sass', 'styled-components'],
  },
  {
    company: 'ID.BI',
    role: 'React Developer',
    period: 'Nov 2018 – Abr 2019',
    location: 'Lima, Perú',
    description: {
      es: 'Aplicación móvil y web para compra de entradas a conciertos y bares. Nuevos requerimientos, bug fixes y mantenimiento de sistema web existente.',
      en: 'Mobile and web application for purchasing tickets to concerts and bars. New features, bug fixes and maintenance of existing web system.',
    },
    achievements: [],
    stack: ['React.js', 'Next.js', 'styled-components', 'Laravel'],
  },
]

export const skills = {
  frontend: [
    'React.js', 'TypeScript', 'Next.js', 'Vue.js', 'Nuxt.js',
    'Tailwind CSS', 'styled-components', 'Sass', 'Redux',
  ],
  backend: [
    'Node.js', 'NestJS', 'GraphQL', 'Hasura', 'Firebase',
    'PostgreSQL', 'Laravel',
  ],
  tools: [
    'Jest', 'Storybook', 'GitLab', 'GitHub', 'SonarQube',
    'React Native', 'ThreeJS', 'Salesforce',
  ],
}

export const projects: Project[] = [
  {
    title: 'Calculadora Laboral',
    description: {
      es: 'Herramienta web para calcular beneficios laborales, liquidaciones y vacaciones según la legislación peruana.',
      en: 'Web tool for calculating labor benefits, severance pay and vacation according to Peruvian legislation.',
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    github: '',
    demo: 'https://calculadoralaboral.pe',
    image: '',
  },
  {
    title: 'Ambientalist Lover',
    description: {
      es: 'App sobre medio ambiente con componentes reutilizables en Vue y persistencia en tiempo real con Firebase.',
      en: 'Environmental awareness app with reusable Vue components and real-time persistence with Firebase.',
    },
    stack: ['Vue.js', 'Firebase', 'CSS', 'HTML'],
    github: 'https://github.com/angiecortez/vue-firebase-component',
    demo: 'https://angiecortez.github.io/vue-firebase-component/',
    image: '/assets/img/medio-ambiente.png',
  },
  {
    title: 'FoodMap',
    description: {
      es: 'Plataforma de descubrimiento de restaurantes integrando múltiples APIs externas de geolocalización y mapas.',
      en: 'Restaurant discovery platform integrating multiple external geolocation and maps APIs.',
    },
    stack: ['APIs REST', 'Geolocalización', 'AJAX', 'HTML', 'CSS3'],
    github: 'https://github.com/angiecortez/lim-2018-01-foodmap',
    demo: 'https://angiecortez.github.io/lim-2018-01-foodmap/src/preload.html',
    image: '',
  },
  {
    title: 'Red Social',
    description: {
      es: 'Red social con autenticación, posts y comentarios en tiempo real. Sistema completo de usuarios con Firebase.',
      en: 'Social network with authentication, posts and real-time comments. Complete user system with Firebase.',
    },
    stack: ['Firebase', 'JavaScript', 'Bootstrap', 'HTML'],
    github: 'https://github.com/angiecortez/lim-2018-05-bc-core-am-socialnetwork',
    demo: 'https://angiecortez.github.io/lim-2018-05-bc-core-am-socialnetwork/src',
    image: '/assets/img/red-social.png',
  },
]
