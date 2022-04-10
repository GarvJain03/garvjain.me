import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const links: { name: string; url: string }[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Resume',
    url: '/',
  },
]

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = React.useState(false)

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowNavbar(!showNavbar)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary-dark">
        <div className="flex p-5 px-8 lg:items-center lg:px-12">
          <Link href="/">
            <a className="text-2xl font-extrabold text-white">garv_jain03</a>
          </Link>
          <button
            onClick={handleToggle}
            className="ml-auto flex items-center space-x-6 text-2xl text-white lg:hidden"
          >
            {showNavbar ? <ImCross /> : <GiHamburgerMenu />}
          </button>
          <div className="hidden space-x-6 lg:mx-auto lg:flex lg:items-center">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <a className="text-lg font-medium text-white">{link.name}</a>
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <a className="hidden border-2 border-white px-4 py-3 text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-white hover:text-primary-dark lg:block">
              Contact Me
            </a>
          </Link>
        </div>
        {showNavbar && (
          <div className="flex flex-col space-y-1 bg-primary-dark py-5 px-4">
            {links.map((link) => (
              <Link href={link.url} key={link.name}>
                <a className="rounded-md p-4 text-2xl font-medium text-white hover:bg-secondary-dark">
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="rounded-md p-4 text-2xl font-medium text-white hover:bg-secondary-dark">
                Contact
              </a>
            </Link>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
