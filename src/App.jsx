import './App.css'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <Nav />
      </header>

      <main className="App__main">
        <Header />
      </main>
    </div>
  )
}

export default App
