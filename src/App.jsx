import './App.css'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Projects } from './components/Projects/Projects'
import { projects, crafts, redes, svgSkills } from '../projects.json'
import { Crafts } from './components/Crafts/Crafts'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import { IconChevronCompactLeft } from '@tabler/icons-react'
import { IconChevronCompactRight } from '@tabler/icons-react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [isDragging, setIsDragging] = useState(false);
  const [starX, setStarX] = useState(0);
  const [starScrollLeft, setStartScrollLeft] = useState(0);
  const carrusel = useRef(null);
  const right = useRef(null);
  const left = useRef(null);
  const firstCard = useRef(null);
  const wrapper = useRef(null);
  let timeoutId;



  const dragStart = (e) => {
    setIsDragging(true);
    carrusel.current.classList.add('dragging');
    setStarX(e.pageX);
    setStartScrollLeft(carrusel.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
      carrusel.current.scrollLeft = starScrollLeft - (e.pageX - starX);
  }

  const dragStop = () => {
    setIsDragging(false);
    carrusel.current.classList.remove('dragging');
  };

  const autoPlay = () => {

    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {
      carrusel.current.scrollLeft += 1;
      console.log("first")
    }, 0);
  };



  const infinityScroll = () => {
    if(carrusel.current.scrollLeft === 0){
      carrusel.current.classList.add("no-transition");
      carrusel.current.scrollLeft = carrusel.current.scrollWidth - (2 * carrusel.current.offsetWidth);
      carrusel.current.classList.remove("no-transition");

    } else if (Math.ceil(carrusel.current.scrollLeft) === (carrusel.current.scrollWidth - carrusel.current.offsetWidth)) {
      carrusel.current.classList.add("no-transition");
      carrusel.current.scrollLeft = carrusel.current.offsetWidth;
      carrusel.current.classList.remove("no-transition");

    }

    clearTimeout(timeoutId)
   if(!wrapper.current.matches(":hover")) autoPlay();
  }

  const toLeft = () => {
    carrusel.current.classList.add("manual")
    carrusel.current.scrollLeft -= firstCard.current.offsetWidth
    carrusel.current.classList.remove("manual")

  }

  const toRight = () => {
    carrusel.current.classList.add("manual")
    carrusel.current.scrollLeft += firstCard.current.offsetWidth
    carrusel.current.classList.remove("manual")

  }

  

 

  useEffect(() => {
    document.addEventListener('mouseup', dragStop);

    const carruselChildrens = [...carrusel.current.children];

    let cardPerView = Math.round(carrusel.current.offsetWidth / firstCard.current.offsetWidth);

    carruselChildrens.slice(-cardPerView).reverse().forEach((card) => {
      carrusel.current.insertAdjacentHTML("afterbegin", card.outerHTML);
    })

    carruselChildrens.slice(0, cardPerView).reverse().forEach((card) => {
      carrusel.current.insertAdjacentHTML("beforeend", card.outerHTML);
    }) 

    clearTimeout(timeoutId);
    
  }, [timeoutId]);

  return (
    <div className="App">
      <header className="App__header">
        <Nav />
      </header>

      <main className="App__main">
        <Header />

        <Projects projects={projects} />

        <Crafts crafts={crafts} />

        <div className='wrapper' ref={wrapper} onMouseEnter={() => clearTimeout(timeoutId)} onMouseLeave={() => autoPlay()}>
          <IconChevronCompactLeft className='control' id='left' onClick={toLeft} ref={left}/>
          <ul className='carrusel' ref={carrusel} onMouseMove={dragging} onMouseDown={dragStart} onScroll={infinityScroll}>
            <li className='card' ref={firstCard}>
              <img src='/compare.webp' alt='github' draggable={false} />
            </li>
            <li className='card'>
              <img src='/compare.webp' alt='github' draggable={false} />
            </li>
            <li className='card'>
              <img src='/compare.webp' alt='github' draggable={false} />
            </li>
            <li className='card'>
              <img src='/compare.webp' alt='github' draggable={false} />
            </li>
            <li className='card'>
              <img src='/compare.webp' alt='github' draggable={false} />
            </li>
          </ul>
          <IconChevronCompactRight className='control' id='right' onClick={toRight} ref={right}/>
        </div>

        <Skills svgSkills={svgSkills} />

        <Footer info={redes} />
      </main>
    </div>
  )
}

export default App
