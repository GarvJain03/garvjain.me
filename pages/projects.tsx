import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import ComingSoon from '../components/ComingSoon'

const ProjectsPage: NextPage = () => {
  return (
    <Layout title="Projects">
      <ComingSoon />
    </Layout>
  )
}

export default ProjectsPage
