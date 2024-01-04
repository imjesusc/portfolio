import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useEffect } from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import { formatHsl } from '../../utilities/format-hsl.utilitie'
import { IconJs, IconNextJs, IconReact, IconTailwild } from './icons'
export const SkillSvg = ({ svgSkill, className }) => {
  const [isHover, setIsHover] = useState(false)
  const requestAnimationFrameRef = useRef(null)

  const spriteColorFill = {
    '--sprite-color': isHover ? formatHsl(svgSkill.hslColor, 0.7) : '#00000',
  }

  const icons = [
    {
      id: '2',
      icon: (
        <IconReact
          className={classNames('w-full h-full relative transition-colors duration-400 ease', 'fill-[--sprite-color]')}
          style={spriteColorFill}
        />
      ),
    },
    {
      id: '1',
      icon: (
        <IconNextJs
          className={classNames('w-full h-full relative transition-colors duration-400 ease', 'fill-[--sprite-color]')}
          style={spriteColorFill}
        />
      ),
    },
    {
      id: '3',
      icon: (
        <IconJs
          className={classNames('w-full h-full relative transition-colors duration-400 ease', 'fill-[--sprite-color]')}
          style={spriteColorFill}
        />
      ),
    },
    {
      id: '4',
      icon: (
        <IconTailwild
          className={classNames('w-full h-full relative transition-colors duration-400 ease', 'fill-[--sprite-color]')}
          style={spriteColorFill}
        />
      ),
    },
  ]

  const skillIcon = icons.find((skill) => skill.id === svgSkill.id)

  const canvas = useRef(null)

  useEffect(() => {
    const renderAnimation = () => {
      const pixelSize = 4
      const iconRows = svgSkill.logo.length
      const iconsCols = svgSkill.logo[0].length
      let dropTime = 0
      let lastTime = 0

      const canvasElement = canvas.current
      const context = canvasElement.getContext('2d')

      canvasElement.width = iconRows * pixelSize
      canvasElement.height = iconsCols * pixelSize

      const drawCanvas = () => {
        const radius = pixelSize / 2
        const centerX = radius
        const centerY = radius

        for (let row = 0; row < iconRows; row++) {
          for (let col = 0; col < iconsCols; col++) {
            if (svgSkill.logo[row][col] !== 0 && Math.random() > 0.5) {
              context.fillStyle = formatHsl(svgSkill.hslColor)
              context.beginPath()
              context.arc(col * pixelSize + centerX, row * pixelSize + centerY, radius, 0, 2 * Math.PI)
              context.fill()
              context.closePath()
            }
          }
        }
      }

      const updateCanvas = (time = 0) => {
        const deltaTime = time - lastTime

        lastTime = time

        dropTime += deltaTime

        if (dropTime > 300) {
          context.clearRect(0, 0, canvasElement.width, canvasElement.height)
          dropTime = 0
          drawCanvas()
        }

        requestAnimationFrameRef.current = window.requestAnimationFrame(updateCanvas)
      }

      updateCanvas()
    }

    const resetCanvas = () => {
      const canvasElement = canvas.current
      const context = canvasElement.getContext('2d')

      canvasElement.style.transition = 'opacity 1s ease-out'

      canvasElement.style.opacity = 0

      setTimeout(() => {
        context.clearRect(0, 0, canvasElement.width, canvasElement.height)
        window.cancelAnimationFrame(requestAnimationFrameRef.current)
        canvasElement.style.transition = 'none'
        canvasElement.style.opacity = 1
      }, 1000)
    }

    if (isHover) {
      renderAnimation()
    } else {
      resetCanvas()
      window.cancelAnimationFrame(requestAnimationFrameRef.current)
    }
  }, [svgSkill, isHover])

  const canvasStyles = {
    opacity: isHover ? 1 : 1,
    transition: 'opacity 0.25s ease-out',
  }
  return (
    <div
      key={svgSkill.id}
      className={classNames('gap-2', className)}
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
    >
      <div className="grid place-content-center w-[48px] h-[48px] relative">
        {skillIcon.icon}
        <canvas className="w-full h-full absolute z-10 opacity-1" ref={canvas} style={canvasStyles}></canvas>
      </div>

      <span className="text-center text-[--muted-foreground]">{svgSkill.name}</span>
    </div>
  )
}

SkillSvg.propTypes = {
  svgSkill: PropTypes.object.isRequired,
  className: PropTypes.string,
}
