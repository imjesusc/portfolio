import './App.css'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Projects } from './components/Projects/Projects'
import { projects, crafts, skills } from '../projects.json'
import { Crafts } from './components/Crafts/Crafts'
import { Skills } from './components/Skills/Skills'

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
      </main>
    </div>
  )
}

export default App
