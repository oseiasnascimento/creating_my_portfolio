import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Footer(){
  return(
    <footer className="text-[10px] lg:text-xs text-gray-100 w-full h-16 p-5 flex items-center justify-between bg-black border-top border-gray-600">
      <div className="flex items-center justify-between gap-5">

        <p>
          OseiasSaboia - Todos os direitos reservados
        </p>
      </div>
      <div className=" flex items-center justify-between gap-5">
            <a
              className="flex flex-row items-center gap-3 hover:text-yellow-500 transition-colors group "
              href="https://github.com/oseiassaboia"
              target="_blank"
              rel="noopener"
              >
              <GithubLogo size={28} />
              <span className="hidden lg:flex">GitHub</span>
            </a>
            <a
              className="flex flex-row items-center gap-3 hover:text-yellow-500 transition-colors group"
              href="https://www.linkedin.com/in/oseias-saboia-99ab1ba5/"
              target="_blank"
              rel="noopener"
              >
              <LinkedinLogo size={28} />
              <span className="hidden lg:flex">LinkedIn</span>
            </a>
            <a
              className="flex flex-row items-center gap-3 hover:text-yellow-500 transition-colors group"
              href="https://www.instagram.com/oseiassaboia/"
              target="_blank"
              rel="noopener"
              >
                <InstagramLogo size={28} />
              <span className="hidden lg:flex">Instagram</span>
            </a>
          </div>
    </footer>
  )
}