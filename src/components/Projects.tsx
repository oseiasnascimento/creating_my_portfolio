import { GithubLogo } from 'phosphor-react'
import nlw from '../assets/projects/nlw-return-impulse.png'

interface TechProps {
  title: string
  url: string
}

export function Projects() {
  const projects = [
    {
      id: '1',
      title: 'ignite lab 2022 - Evento da Rockeseat',
      img: './src/assets/projects/ignite-lab-2022.png',
      url: 'https://github.com/oseiassaboia/IgniteLab-2022-event-platform'
    },
    {
      id: '2',
      title: 'nlw return impulse 2022 - Evento da Rockeseat',
      img: './src/assets/projects/nlw-return-impulse.png',
      url: 'https://github.com/oseiassaboia/nlw-return-impulse'
    },
    {
      id: '3',
      title: 'Portfólio Atual - Projeto Pessoal',
      img: './src/assets/projects/portfolioV2.png',
      url: 'https://github.com/oseiassaboia/portfolio'
    },
    {
      id: '4',
      title: 'Meu primiero Portfólio - Projeto Pessoal',
      img: './src/assets/projects/portfolioV1.png',
      url: 'https://github.com/oseiassaboia/portfolio'
    }
  ]

  return (
    <div className="mt-0 p-10 grid lg:grid-cols-3 gap-6 m-auto ">
      {projects.map(projects => {
        return (
          <div className="flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group">
            <div className="flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
              <img
                className="flex h-56 w-full rounded-3xl p-2"
                src={projects.img}
                alt={projects.title}
              />
            </div>
              <a
                className="flex flex-row items-center text-center gap-3 mt-2 "
                href={projects.url}
                target="_blank"
                rel="noopener"
              >
                <span> {projects.title}</span>
              </a>
          </div>
        )
      })}
    </div>
  )
}
