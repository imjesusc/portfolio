import { IconBrandLinkedin } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'

export const Nav = () => {
  return (
    <nav className="p-4 max-w-[--max-w-screen] h-full m-auto sticky">
      <ul className="w-full h-full flex justify-end items-center gap-5">
        <li className="">
          <a className="block hover:opacity-80 transition-opacity" href="https://github.com/imjesusc" title="Github">
            <IconBrandGithub className="w-8 h-8" />
          </a>
        </li>
        <li className="">
          <a
            className="block hover:opacity-80 transition-opacity"
            href="https://www.linkedin.com/in/imjesusc/"
            title="Linkedin"
          >
            <IconBrandLinkedin className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
