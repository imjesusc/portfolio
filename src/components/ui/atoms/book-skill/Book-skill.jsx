import React from 'react'
import './Book-skill.css'
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
} from '@tabler/icons-react'
import { Title } from '../title/Title'

export const BookSkill = ({ name, color }) => {
  const iconSkills = [
    { name: 'React', icon: <IconBrandReact className="skill__icon" /> },
    { name: 'JavaScript', icon: <IconBrandJavascript className="skill__icon" /> },
    { name: 'Tailwind', icon: <IconBrandTailwind className="skill__icon" /> },
    { name: 'CSS', icon: <IconBrandCss3 className="skill__icon" /> },
    { name: 'HTML', icon: <IconBrandHtml5 className="skill__icon" /> },
  ]

  const skill = iconSkills.find((skill) => skill.name === name)

  return (
    <div className="book-container">
      <article className="book" style={{ '--book-color': color }}>
        <div className="book__mold "></div>
        <div className="book__covered">
          <Title tagTitle="h3" title={name} className="book__title" style={{ '--book-color': color }} />

          {skill.icon}
        </div>
      </article>
      <div className="book__pages"></div>
      <div className="book__shadow" style={{ '--book-color': color }}></div>
    </div>
  )
}
