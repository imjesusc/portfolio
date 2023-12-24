import './App.css'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Projects } from './components/Projects/Projects'
import { projects, crafts } from '../projects.json'
import { Crafts } from './components/Crafts/Crafts'

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
      </main>
    </div>
  )
}

export default App
