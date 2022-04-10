import React from 'react'
import Header from './Header'
import Head from 'next/head'

interface ILayoutProps {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | Garv Jain</title>
      </Head>
      <Header />
      {children}
    </>
  )
}

export default Layout
