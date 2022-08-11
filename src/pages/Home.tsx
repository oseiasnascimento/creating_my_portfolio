import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import logo from '../assets/logo_dev.svg';
import { Tech } from '../components/Tech';
import { Skills } from '../components/Skills';
import { GithubLogo } from 'phosphor-react';

export function Home() {

  return (
    <>
      {/* ==== Home ==== */}
      <header className="w-full lg:fixed top-0 left-0 z-10 bg-black">
      </header>
        <Header />
      <section className="min-h-screen lg:flex lg:items-center lg:justify-center">
        <div className="lg:flex lg:items-center lg:justify-center inline-block  gap-24 px-10">
          <h1 className="text-4xl text-white md:text-6xl mt-32 lg:mt-0">
            <p>
            Olá, eu sou 
            </p>
            <p className="inline-flex  h-20 pt-2  overflow-x-hidden overflow-y-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
              Oseias Saboia 👋 
            </p>
            <span
              className="box-border inline-block w-2 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform">
            </span>
            <p className='text-2xl'>
              Desenvolverdor Beck-end / Front-end
            </p>
          </h1>
          <div className="mt-16 px-10 md:mb-40 md:mt-10">
            <img className="h-96" src={logo} alt="" />
          </div>
        </div>
      </section>

      {/* ==== About me ==== */}  
      <section id='about' className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center">

          <h2 className="flex items-center justify-center text-2xl lg:text-4xl p-16">
            Sobre mim
          </h2>
        <div className="lg:w-[1500px] lg:flex lg:items-center lg:justify-center">

          <div className="mx-16" >
            <div className="flex items-center justify-center border-4 border-blue-300 rounded-full p-4 before:rounded-2xl cursor-pointer">
              <span className="border-8 border-blue-500 rounded-full">
                <img
                  className="rounded-full"
                  src="https://avatars0.githubusercontent.com/u/28720307?v=4"
                  alt="Oseias Saboia Nascimento"
                  />
              </span>
            </div>
          </div>

          <div className="w-full flex items-center justify-center p-16" >
          <p className="text-xl lg:text-4xl text-justify leading-relaxed">
              desenvolvimeto web, atuando como desenvolvedor júnior em Back-end/Font-end.
              Sou programador há pouco mais de 3 anos e tenho experiência em
              Em busca de conhecimento das melhores tecnologias de desenvolvimento web e mobile.
          </p>
          </div>
        </div>
        </section>  

        {/* ==== Projects ==== */}
        <section id='projects' className="min-h-screen flex flex-col">

          <h2 className="flex items-center justify-center text-2xl lg:text-4xl lg:mt-32 lg:p-16 mt-16">
            Projetos
          </h2>
          
          <Skills />

          <div className="flex items-center justify-center mb-24 ">
            <a
              className="flex flex-row items-center justify-center gap-3 rounded-xl h-16 p-4 border border-blue-300 text-blue-300 hover:bg-zinc-900 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-2 transition-transform"
              href="https://github.com/oseiassaboia"
              target="_blank"
              rel="noopener"
              >
              <GithubLogo size={28} />
              <span>Meus Repositórios GitHub</span>
            </a>
          </div>

        </section>  

        <section id='skills' className="min-h-screen flex flex-col  bg-zinc-900">

          <h2 className="flex items-center justify-center text-2xl lg:text-4xl lg:mt-32 lg:p-16 mt-16">
            Habilidades
          </h2>

          <Tech />

        </section> 
       

        <Footer />
    </>
  )
}
