import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import NavSlider from '../NavSlider/NavSlider'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
<<<<<<< HEAD
    <div class="flex space-x-3">
      <div class="justify-left space-x-3 flex-1 hidden lg:flex ml-20 p-3">
=======
    <div class="flex ">
      <div class="flex justify-start  space-x-3 ml-20 p-3">
>>>>>>> 775ae30cd179ea7a33baac8d4cf8b1a1a983560c
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </div>
        </div>
<<<<<<< HEAD
        <div class="flex items-center lg:justify-end flex-1 space-x-4 justify-center p-3 lg:flex">
          <Link href="https://www.facebook.com/mesuaferreaofficial/"><a target="_blank"><img src="https://img.icons8.com/ios-glyphs/25/000000/facebook-new.png"/></a></Link>
          <Link href="https://www.instagram.com/mesuaferreaofficial/"><a target="_blank"><img src="https://img.icons8.com/ios-glyphs/25/000000/instagram-new.png"/></a></Link>
=======
        <div class="flex justify-items-end mr-20 p-3 space-x-3 item-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
>>>>>>> 775ae30cd179ea7a33baac8d4cf8b1a1a983560c
        </div>
      
    </div>

    <hr />
    <Container>
      <div className={s.nav}>
        
        <div className="flex justify-left items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>All</a>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
        </div>
        {
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        }
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      {
        <div className="flex pb-4 lg:px-6 hidden">
          <Searchbar id="mobile-search" />
        </div>
      }
    </Container>
    <NavSlider />
  </NavbarRoot>
  
)

export default Navbar
