import { projects, crafts, redes, svgSkills } from '../projects.json'
import { Nav, Home, Projects, Crafts, Skills, Footer } from './components/organisms'

function App() {
  return (
    <div className="overflow-hidden">
      <header className="h-[64px] fixed w-screen backdrop-blur-lg  z-50  shadow-sm bg-white/5 top-0">
        <Nav />
      </header>

      <div className="absolute inset-0 -z-10 h-full w-1/2 left-1/2 opacity-40 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <main className="w-screen h-auto grid gap-[60px] tablet:gap-[80px] latpop:gap-[130px]">
        <Home />

        <Projects projects={projects} />

        <Crafts crafts={crafts} />

        <Skills svgSkills={svgSkills} />

        <Footer info={redes} />
      </main>
    </div>
  )
}

export default App
