import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

const ErrorPage = () => {
  return (
    <Layout title="404">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-12">
        <img
          className="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6"
          alt="hero"
          src="/images/404.svg"
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-4xl font-medium text-white">404</h1>
          <p className="mb-8 text-xl text-gray-400">
            Looks like you are on the wrong page in life buddy.
          </p>
          <Link href="/">
            <button className="rounded-full border-2 border-soft-red py-2 px-6 text-lg text-white transition duration-200 ease-in-out hover:bg-soft-red">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage
