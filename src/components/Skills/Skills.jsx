import './Skills.css'
import { Title } from '../ui/atoms/title/Title'
import { BookSkill } from '../ui/atoms/book-skill/Book-skill'
export const Skills = ({ skills }) => {
  return (
    <section className="main__skills">
      <Title tagTitle="h2" title="Habilidades" />
      <div className="skill-container">
        {skills && skills.map((skill) => <BookSkill key={skill.id} name={skill.name} color={skill.color} />)}
      </div>
    </section>
  )
}
