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
    <div class="flex space-x-3">
      <div class="justify-left space-x-3 flex-1 hidden lg:flex ml-20 p-3">
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
        <div class="flex items-center lg:justify-end flex-1 space-x-4 justify-center p-3 lg:flex">
          <Link href="https://www.facebook.com/mesuaferreaofficial/"><a target="_blank"><img src="https://img.icons8.com/ios-glyphs/25/000000/facebook-new.png"/></a></Link>
          <Link href="https://www.instagram.com/mesuaferreaofficial/"><a target="_blank"><img src="https://img.icons8.com/ios-glyphs/25/000000/instagram-new.png"/></a></Link>
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
