import './App.css'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Projects } from './components/Projects/Projects'
import { projects, crafts, skills, redes } from '../projects.json'
import { Crafts } from './components/Crafts/Crafts'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <Nav />
      </header>

      <main className="App__main">
        <Header />

        <Projects projects={projects} />

        <Crafts crafts={crafts} />

        <Skills skills={skills} />

        <Footer info={redes} />
      </main>
    </div>
  )
}

export default App
