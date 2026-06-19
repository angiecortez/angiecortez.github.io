import { Navbar }     from './components/Navbar/Navbar'
import { Hero }       from './components/Hero/Hero'
import { Experience } from './components/Experience/Experience'
import { Skills }     from './components/Skills/Skills'
import { Projects }   from './components/Projects/Projects'
import { Contact }    from './components/Contact/Contact'
import { Footer }     from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
