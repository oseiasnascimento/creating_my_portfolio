import { useState } from 'react' 
import { Logo } from './Logo'
import { LogoMobile } from './logoMobile'

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false) 

  return (
    <div >
      <nav className="flex items-center justify-between lg:flex lg:items-center lg:justify-center lg:border-none  border-b border-blue-300 gap-32 py-4 lg:py-8 px-8 ">
        <a className="hidden lg:flex"
           href="/">
            <Logo />
        </a>

        <a className="lg:hidden"
           href="/">
            <LogoMobile />
        </a>

        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer group"
            onClick={() => setIsNavOpen(prev => !prev)} 
          >
            <span className="block w-8 h-0.5 bg-blue-100 "></span>
            <span className="block w-5 h-0.5 bg-blue-100"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-3xl">
              <li className="border-gray-400 my-8 uppercase"> 
                <a className="hover:text-blue-500 transition-colors"
                  href="#home">Home</a>
              </li>
              <li className="border-gray-400 my-8 uppercase"> 
                <a className="hover:text-blue-500 transition-colors"
                  href="#about">sobre mim</a>
              </li>
              <li className="border-gray-400 my-8 uppercase"> 
                <a className="hover:text-blue-500 transition-colors"
                  href="#projects">projetos</a>
              </li>
              <li className="border-gray-400 my-8 uppercase"> 
                <a className="hover:text-blue-500 transition-colors"
                  href="#skills">habilidades</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-16 lg:flex">
          <li><a className="hover:text-blue-500 transition-colors" href="#home">Home</a></li>
          <li><a className="hover:text-blue-500 transition-colors" href="#about">sobre mim</a></li>
          <li><a className="hover:text-blue-500 transition-colors" href="#projects">projetos</a></li>
          <li><a className="hover:text-blue-500 transition-colors" href="#skills">habilidades</a></li>
        </ul>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000000;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}
