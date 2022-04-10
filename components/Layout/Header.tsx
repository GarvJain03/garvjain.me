import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

interface ILink {
  links: {
    name: string
    url: string
  }[]
}

const links: ILink['links'] = [
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
  return (
    <header className="sticky top-0 z-50 flex bg-primary-dark p-5 px-8 lg:items-center lg:px-12">
      <span className="text-2xl font-extrabold text-white">garv_jain03</span>
      <div className="ml-auto flex items-center space-x-6 text-2xl text-white lg:hidden">
        <GiHamburgerMenu />
      </div>
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
    </header>
  )
}

export default Header
