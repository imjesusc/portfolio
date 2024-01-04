import { Title } from '../atoms'

export const Home = () => {
  return (
    <header className="p-4 max-w-[--max-w-screen] w-full m-auto mt-[100px] tablet:mt-[230px] grid content-center">
      <Title type="primary" title="Imjesusc" className="font-semibold text-[--foreground]" />
      <div className="text-xl text-[--muted-foreground] font-normal">
        <p>Desarrollador Front-end con experiencia de 1 año.</p>
        <p>Entusiasta con la codificación y las nuevas tecnologías.</p>
      </div>
    </header>
  )
}
