import { useCallback } from 'react'
import { useState, useEffect } from 'react'

export const useCarousel = (wrapperRef = null, carruselRef = null, cardRef = null) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)

  let timeoutId

  const dragStart = (e) => {
    setIsDragging(true)
    carruselRef.current.classList.add('scroll-auto', 'snap-none')
    setStartX(e.pageX)
    setStartScrollLeft(carruselRef.current.scrollLeft)
  }

  const dragging = (e) => {
    if (!isDragging) return
    carruselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  const autoPlay = () => {
    if (window.innerWidth < 800) return
    timeoutId = setTimeout(() => {
      carruselRef.current.scrollLeft += cardRef.current.offsetWidth
    }, 2500)
  }

  const dragStop = useCallback(() => {
    setIsDragging(false)
    carruselRef.current.classList.remove('scroll-auto', 'snap-none')
  }, [carruselRef])

  const infinityScroll = () => {
    if (carruselRef.current.scrollLeft === 0) {
      carruselRef.current.classList.add('no-transition')
      carruselRef.current.scrollLeft = carruselRef.current.scrollWidth - 2 * carruselRef.current.offsetWidth
      carruselRef.current.classList.remove('no-transition')
    } else if (
      Math.ceil(carruselRef.current.scrollLeft) ===
      carruselRef.current.scrollWidth - carruselRef.current.offsetWidth
    ) {
      carruselRef.current.classList.add('no-transition')
      carruselRef.current.scrollLeft = carruselRef.current.offsetWidth
      carruselRef.current.classList.remove('no-transition')
    }

    clearTimeout(timeoutId)
    if (!wrapperRef.current.matches(':hover')) autoPlay()
  }

  const toLeft = () => {
    carruselRef.current.scrollLeft -= cardRef.current.offsetWidth
  }

  const toRight = () => {
    carruselRef.current.scrollLeft += cardRef.current.offsetWidth
  }

  useEffect(() => {
    document.addEventListener('mouseup', dragStop)

    const originalItems = Array.from(carruselRef.current.children)

    originalItems.forEach((item) => {
      const duplicateItem = item.cloneNode(true)
      duplicateItem.setAttribute('aria-hidden', true)
      carruselRef.current.appendChild(duplicateItem)
    })

    clearTimeout(timeoutId)
  }, [cardRef, carruselRef, timeoutId, dragStop])

  return {
    dragStart,
    dragging,
    infinityScroll,
    toLeft,
    toRight,
    autoPlay,
    timeoutId,
  }
}
