import { About } from "./components/About"
import { JsonLd } from "./components/JsonLd"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Process } from "./components/Process"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Stack } from "./components/Stack"
import { Stats } from "./components/Stats"

function App() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Stack />
        <Projects />
        <Experience />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
