import portfolioV2 from '../assets/projects/portfolioV2.png'
import ignite from '../assets/projects/ignite-lab-2022.png'
import nlw from '../assets/projects/nlw-return-impulse.png'
import portfolioV1 from '../assets/projects/portfolioV1.png'

export function Projects() {

  return (
    <div className="mt-0 p-10 grid lg:grid-cols-3 gap-6 m-auto ">

      <a className="flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group"
         href="https://github.com/oseiassaboia/creating_my_portfolio"
         target="_blank"
         rel="noopener" 
      >
        <div className="flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
            <img
              className="flex h-56 w-full rounded-3xl p-2"
              src={portfolioV2}
              alt="Portfólio Atual - Projeto Pessoal"
            />
        </div>
        <span className="flex flex-row items-center text-center mt-2 "> Portfólio Atual - Projeto Pessoal</span>
      </a>

      <a className="flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group"
         href="https://github.com/oseiassaboia/IgniteLab-2022-event-platform"
         target="_blank"
         rel="noopener" 
      >
        <div className="flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
            <img
              className="flex h-56 w-full rounded-3xl p-2"
              src={ignite}
              alt="ignite lab 2022 - Evento da Rockeseat"
            />
        </div>
        <span className="flex flex-row items-center text-center mt-2 "> ignite lab 2022 - Evento da Rockeseat</span>
      </a>

      <a className="flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group"
         href="https://github.com/oseiassaboia/nlw-return-impulse"
         target="_blank"
         rel="noopener" 
      >
        <div className="flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
            <img
              className="flex h-56 w-full rounded-3xl p-2"
              src={nlw}
              alt="nlw return impulse 2022 - Evento da Rockeseat"
            />
        </div>
        <span className="flex flex-row items-center text-center mt-2 "> nlw return impulse 2022 - Evento da Rockeseat</span>
      </a>

      <a className="flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group"
         href="https://github.com/oseiassaboia/portfolio"
         target="_blank"
         rel="noopener" 
      >
        <div className="flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
            <img
              className="flex h-56 w-full rounded-3xl p-2"
              src={portfolioV1}
              alt="Meu primiero Portfólio"
            />
        </div>
        <span className="flex flex-row items-center text-center mt-2 "> Meu primiero Portfólio</span>
      </a>

      <a className=" hidden lg:flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group"
         href="#projects"
         rel="noopener" 
      >
        <div className="bg-slate-900 flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
            <div className="flex items-center justify-center h-56 w-[390px] rounded-3xl p-2"> Em Breve</div>
        </div>
        <span className="flex flex-row items-center text-center mt-2 "> Novo Projeto</span>
      </a>

      <a className=" hidden lg:flex flex-col items-center rounded-3xl hover:text-blue-500 hover:-translate-y-2 transition-transform group"
         href="#projects"
         rel="noopener" 
      >
        <div className="bg-slate-900 flex flex-col items-center border hover:text-blue-500 border-blue-300 hover:border-blue-500 rounded-3xl h-56 transition-colors ">
            <div className="flex items-center justify-center h-56 w-[390px] rounded-3xl p-2"> Em Breve</div>
        </div>
        <span className="flex flex-row items-center text-center mt-2 "> Novo Projeto</span>
      </a>

    </div>
  )
}
