export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  stack: string[]
  current?: boolean
}

export interface Project {
  title: string
  description: string
  stack: string[]
  github: string
  demo: string
  image: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Thoughtworks',
    role: 'Developer senior',
    period: 'Sep 2025 – present',
    location: 'Latam (remoto)',
    description:
      'Desarrollo y optimización de plataforma web personalizada para el sector de carga en Latam. Diseño y mantenimiento de interfaz moderna y responsiva.',
    achievements: ['Mejoré la experiencia de usuario y cobertura de testing en 40%'],
    stack: ['ReactJS', 'Sass', 'Tailwind', 'styled-components', 'Jest', 'ThreeJS'],
    current: true,
  },
  {
    company: 'CSTI / Universidad UTP',
    role: 'React Software Engineer',
    period: 'Sep 2024 – Jun 2026',
    location: 'Lima, Perú',
    description:
      'Plataforma universitaria para gestión de rendimiento y aprendizaje de estudiantes y docentes. Implementación de mejoras continuas de calidad.',
    achievements: ['Mejoré la experiencia de usuario y cobertura de testing en 40%'],
    stack: ['ReactJS', 'Sass', 'Tailwind', 'styled-components', 'Jest', 'ThreeJS'],
  },
  {
    company: 'Lapzo',
    role: 'Frontend Software Engineer',
    period: 'Jun 2022 – Sep 2024',
    location: 'México (remoto)',
    description:
      'Plataforma de gestión de rendimiento, aprendizaje y retención de empleados. Desarrollo para TEC de Monterrey con integración de datos en tiempo real.',
    achievements: ['Mejoré la experiencia de usuario e integración de datos en tiempo real con Hasura + GraphQL'],
    stack: ['ReactJS', 'GraphQL', 'Hasura', 'NestJS', 'Tailwind', 'styled-components', 'Redux', 'Firebase', 'PostgreSQL'],
  },
  {
    company: 'NTT DATA Perú',
    role: 'React Developer',
    period: 'Jun 2021 – Jun 2022',
    location: 'Lima, Perú',
    description:
      'Portal web para solicitudes de préstamos vehiculares de Banco Pichincha en Ecuador. Integración con APIs externas para verificación en tiempo real.',
    achievements: ['Reduje tiempos de aprobación de solicitudes en 20% mediante optimizaciones de frontend'],
    stack: ['ReactJS', 'GraphQL', 'styled-components', 'Salesforce'],
  },
  {
    company: 'Genderlab',
    role: 'React Developer',
    period: 'Ago 2020 – Jun 2021',
    location: 'Lima, Perú',
    description:
      'Lab de innovación para cerrar brechas de género en el trabajo. Dashboards interactivos para evaluación de acoso laboral en empresas.',
    achievements: ['Dashboards interactivos que redujeron incidentes reportados en 15%'],
    stack: ['ReactJS', 'GraphQL', 'styled-components', 'NextJS', 'ThreeJS'],
  },
  {
    company: 'InLearning',
    role: 'React Developer',
    period: 'May 2019 – Ago 2020',
    location: 'Lima, Perú',
    description:
      'Sistema de gestión educativa para más de 100,000 estudiantes y 5,000 colaboradores en institutos de educación superior.',
    achievements: ['Incrementé retención de usuarios y revenue en 30%'],
    stack: ['React.js', 'Next.js', 'Vue', 'Sass', 'styled-components'],
  },
  {
    company: 'ID.BI',
    role: 'React Developer',
    period: 'Nov 2018 – Abr 2019',
    location: 'Lima, Perú',
    description:
      'Aplicación móvil y web para compra de entradas a conciertos y bares. Nuevos requerimientos, bug fixes y mantenimiento de sistema web existente.',
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
    'Jest', 'GitLab', 'GitHub', 'SonarQube',
    'React Native', 'ThreeJS', 'Salesforce',
  ],
}

export const projects: Project[] = [
  {
    title: 'Calculadora Laboral',
    description: 'Herramienta web para calcular beneficios laborales, liquidaciones y vacaciones según la legislación peruana.',
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    github: '',
    demo: 'https://calculadoralaboral.pe',
    image: '',
  },
  {
    title: 'Ambientalist Lover',
    description: 'App sobre medio ambiente con componentes reutilizables en Vue y persistencia en tiempo real con Firebase.',
    stack: ['Vue.js', 'Firebase', 'CSS', 'HTML'],
    github: 'https://github.com/angiecortez/vue-firebase-component',
    demo: 'https://angiecortez.github.io/vue-firebase-component/',
    image: '/assets/img/medio-ambiente.png',
  },
  {
    title: 'FoodMap',
    description: 'Plataforma de descubrimiento de restaurantes integrando múltiples APIs externas de geolocalización y mapas.',
    stack: ['APIs REST', 'Geolocalización', 'AJAX', 'HTML', 'CSS3'],
    github: 'https://github.com/angiecortez/lim-2018-01-foodmap',
    demo: 'https://angiecortez.github.io/lim-2018-01-foodmap/src/preload.html',
    image: '',
  },
  {
    title: 'Red Social',
    description: 'Red social con autenticación, posts y comentarios en tiempo real. Sistema completo de usuarios con Firebase.',
    stack: ['Firebase', 'JavaScript', 'Bootstrap', 'HTML'],
    github: 'https://github.com/angiecortez/lim-2018-05-bc-core-am-socialnetwork',
    demo: 'https://angiecortez.github.io/lim-2018-05-bc-core-am-socialnetwork/src',
    image: '/assets/img/red-social.png',
  },
]
