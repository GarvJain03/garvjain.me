import React from 'react'
import type { NextPage } from 'next'
import ComingSoon from '../components/ComingSoon'
import Layout from '../components/Layout/Layout'

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog">
      <ComingSoon />
    </Layout>
  )
}

export default BlogPage
