import { useState } from "react"
import { FiMenu, FiX } from 'react-icons/fi'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#32187f] text-white shadow-md">

      <nav
        className="mx-auto max-w-7xl px-6 py-4 lg:px-10"
        aria-label="Main navigation"
      >

        <div className="flex items-center justify-between">

          <a
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            IndigoLearn
          </a>

          <ul className="hidden items-center gap-15 md:flex">

            <li>
              <a
                href="#courses"
                className="text-sm font-medium transition hover:text-purple-200"
              >
                BUY COURSES
              </a>
            </li>

            <li>
              <a
                href="#books"
                className="text-sm font-medium transition hover:text-purple-200"
              >
                BUY BOOKS
              </a>
            </li>

            <li>
              <a
                href="#programs"
                className="text-sm font-medium transition hover:text-purple-200"
              >
                PROGRAMS
              </a>
            </li>

            <li>
              <a
                href="#resources"
                className="text-sm font-medium transition hover:text-purple-200"
              >
                FREE RESOURCES
              </a>
            </li>

            <li>
              <button
                type="button"
                className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#32187f] transition hover:bg-gray-100"
              >
                Log in / Sign in
              </button>
            </li>

          </ul>


          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-2xl md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>


        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-purple-400 pt-4 md:hidden">

            <ul className="flex flex-col gap-4">

              <li>
                <a
                  href="#courses"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
                >
                  BUY COURSES
                </a>
              </li>

              <li>
                <a
                  href="#books"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
                >
                  BUY BOOKS
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
                >
                  PROGRAMS
                </a>
              </li>

              <li>
                <a
                  href="#resources"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
                >
                  FREE RESOURCES
                </a>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#32187f]"
                >
                  Log in / Sign in
                </button>
              </li>

            </ul>

          </div>
        )}

      </nav>

    </header>
  )
    
}

export default Header

// const [isMenuOpen, setIsMenuOpen] = useState(false)
//     return(
//         <header className="bg-[#32187f] text-white shadow-md">
//             <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
//             aria-label="Main navigation">
//                 <div className="flex items-center justify-between">

//                 <a
//                     href="/"
//                     className="text-xl font-bold tracking-wide"
//                     aria-label="IndigoLearn Home"
//                 >
//                 IndigoLearn
//                 </a>
//                 <ul className="hidden items-center gap-10 md:flex">
//                     <li>
//                         <a
//                         href="#courses"
//                         className="text-sm font-medium transition hover:text-purple-200"
//                         >
//                         BUY COURSES
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                         href="#books"
//                         className="text-sm font-medium transition hover:text-purple-200"
//                         >
//                         BUY BOOKS
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                         href="#programs"
//                         className="text-sm font-medium transition hover:text-purple-200"
//                         >
//                         PROGRAMS
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                         href="#resources"
//                         className="text-sm font-medium transition hover:text-purple-200"
//                         >
//                         FREE RESOURCES
//                         </a>
//                     </li>
//                     <button type="button"
//                         className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#32187f] shadow-sm transition hover:bg-gray-100">
//                         Log in/ Sign in
//                     </button>
//                 </ul>

//                 <button type="button"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     className="rounded-md p-2 text-2xl md:hidden"
//                     aria-label="Toggle navigation menu"
//                     aria-expanded={isMenuOpen}
//                 >
//                     {isMenuOpen ? <FiX /> : <FiMenu />}
//                 </button>
//             </div>

//              {/* Mobile Navigation */}
//             {isMenuOpen && (
//                 <div className="mt-4 border-t border-purple-400 pt-4 md:hidden">

//                     <ul className="flex flex-col gap-4">

//                     <li>
//                         <a
//                         href="#courses"
//                         onClick={() => setIsMenuOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
//                         >
//                         BUY COURSES
//                         </a>
//                     </li>

//                     <li>
//                         <a
//                         href="#books"
//                         onClick={() => setIsMenuOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
//                         >
//                         BUY BOOKS
//                         </a>
//                     </li>

//                     <li>
//                         <a
//                         href="#programs"
//                         onClick={() => setIsMenuOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
//                         >
//                         PROGRAMS
//                         </a>
//                     </li>

//                     <li>
//                         <a
//                         href="#resources"
//                         onClick={() => setIsMenuOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700"
//                         >
//                         FREE RESOURCES
//                         </a>
//                     </li>

//                     <li>
//                         <button
//                         type="button"
//                         className="w-full rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#32187f]"
//                         >
//                         Log in / Sign in
//                         </button>
//                     </li>

//                     </ul>

//                 </div>
//             )}

                
//             </nav>
//         </header>
//     )