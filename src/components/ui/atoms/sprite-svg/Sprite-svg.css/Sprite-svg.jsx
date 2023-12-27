import './Sprite-svg.css'
import { IconJs, IconNextJs, IconReact, IconTailwild } from '../../../icons'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useEffect } from 'react'
import classNames from 'classnames'
import { useState } from 'react'
export const SpriteSvg = ({ svgSkill, className }) => {
  const [isHover, setIsHover] = useState(false)
  const requestAnimationFrameRef = useRef(null)

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '')

    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return `${r}, ${g}, ${b}`
  }

  const spriteColorFill = {
    '--sprite-color': isHover ? `rgba(${hexToRgb(svgSkill.color)}, 0.6)` : '#000',
  }

  const icons = [
    { id: '2', icon: <IconReact className="sprite__skill" style={spriteColorFill} /> },
    {
      id: '1',
      icon: <IconNextJs className="sprite__skill" style={spriteColorFill} />,
    },
    { id: '3', icon: <IconJs className="sprite__skill" style={spriteColorFill} /> },
    {
      id: '4',
      icon: <IconTailwild className="sprite__skill" style={spriteColorFill} />,
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
              context.fillStyle = svgSkill.color
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

    if (isHover) {
      renderAnimation()
    } else {
      window.cancelAnimationFrame(requestAnimationFrameRef.current)
    }
  }, [svgSkill, isHover])

  const canvasStyles = {
    opacity: isHover ? 1 : 0,
    transition: 'opacity 0.25s ease-out',
  }

  return (
    <div
      key={svgSkill.id}
      className={classNames(className)}
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
    >
      <div className="sprite__container">
        {skillIcon.icon}
        <canvas className="sprite__canvas" ref={canvas} style={canvasStyles}></canvas>
      </div>
    </div>
  )
}

SpriteSvg.propTypes = {
  svgSkill: PropTypes.object.isRequired,
  className: PropTypes.string,
}
