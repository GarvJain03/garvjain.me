import React from 'react'
import type { NextPage } from 'next'
import Hero from '../components/Index/Hero'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
    </Layout>
  )
}

export default Home
