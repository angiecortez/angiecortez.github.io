import type { Lang } from '../context/LanguageContext'

export const t: Record<Lang, {
  nav: { contact: string }
  hero: {
    expValue: string
    langValue: string
    desc: string
    viewProjects: string
    yearsExp: string
    companies: string
    languages: string
  }
  experience: { cmd: string }
  skills: { cmd: string }
  projects: { cmd: string; github: string; demo: string }
  contact: {
    title: string
    desc: string
    send: string
    downloadCV: string
    echoCmd: string
    echoOut: string
    whatsapp: string
    phone: string
  }
  footer: { made: string }
}> = {
  es: {
    nav: { contact: './contacto' },
    hero: {
      expValue: '"6+ años"',
      langValue: '["Español", "English"]',
      desc: 'Más de <b>6 años</b> construyendo productos digitales con React, TypeScript y Node.js. Actualmente en <hl>Thoughtworks</hl>, creando experiencias que impactan a miles de personas en Latam.',
      viewProjects: 'Ver proyectos',
      yearsExp: 'años exp.',
      companies: 'empresas',
      languages: 'idiomas',
    },
    experience: { cmd: 'git log --experience --oneline' },
    skills: { cmd: 'ls ./skills' },
    projects: { cmd: 'ls ./projects', github: 'GitHub', demo: 'Demo →' },
    contact: {
      title: 'Trabajemos juntos',
      desc: '¿Tienes un proyecto en mente o quieres que me una a tu equipo? Me encantaría escucharte.',
      send: 'Enviar mensaje',
      downloadCV: 'Descargar CV',
      echoCmd: 'echo "Hola Angie!"',
      echoOut: 'Hola Angie!',
      whatsapp: 'WhatsApp',
      phone: '+51 946 896 796',
    },
    footer: { made: 'hecho con cariño por' },
  },
  en: {
    nav: { contact: './contact' },
    hero: {
      expValue: '"6+ years"',
      langValue: '["Spanish", "English"]',
      desc: 'More than <b>6 years</b> building digital products with React, TypeScript and Node.js. Currently at <hl>Thoughtworks</hl>, creating experiences that impact thousands of people across Latam.',
      viewProjects: 'View projects',
      yearsExp: 'yrs exp.',
      companies: 'companies',
      languages: 'languages',
    },
    experience: { cmd: 'git log --experience --oneline' },
    skills: { cmd: 'ls ./skills' },
    projects: { cmd: 'ls ./projects', github: 'GitHub', demo: 'Demo →' },
    contact: {
      title: "Let's work together",
      desc: "Have a project in mind or want me to join your team? I'd love to hear from you.",
      send: 'Send message',
      downloadCV: 'Download CV',
      echoCmd: 'echo "Hi Angie!"',
      echoOut: 'Hi Angie!',
      whatsapp: 'WhatsApp',
      phone: '+51 946 896 796',
    },
    footer: { made: 'made with care by' },
  },
}
