import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function BackTop() {
  window.scrollTo(0, 0)
}
export function Footer() {
  return (
    <>
      <footer className="text-[10px] lg:text-xs text-gray-100 w-full h-16 p-5 flex items-center justify-between bg-black border-top border-gray-600">
        <div className="flex items-center justify-between gap-5">
          <p>OseiasSaboia - Todos os direitos reservados</p>
        </div>
        <div className=" flex items-center justify-between gap-5">
          <span className="hidden lg:flex">Oseias Saboia 2022</span>
          <button
            onClick={BackTop}
            className="flex h-8 w-8 items-center justify-center relative cursor-pointer rounded bg-gray-600 hover:bg-gray-500 transition-transform"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
            </svg>
          </button>
          <a
            className="flex flex-row items-center gap-3 hover:text-yellow-500 transition-colors group "
            href="https://github.com/oseiasnascimento"
            target="_blank"
            rel="noopener"
          >
            <GithubLogo size={28} />
            <span className="hidden lg:flex">GitHub</span>
          </a>
          <a
            className="flex flex-row items-center gap-3 hover:text-yellow-500 transition-colors group"
            href="https://www.linkedin.com/in/oseiasnascimento/"
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
    </>
  )
}
