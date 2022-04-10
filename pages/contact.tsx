import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/Contact/ContactForm'

const ContactPage: NextPage = () => {
  return (
    <Layout title="Contact">
      <div className="container mx-auto px-5 py-12">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-white sm:text-5xl">
            Have Any Questions?
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-gray-400 lg:w-2/3 lg:px-24">
            Want to collaborate on any project or participate in a hackathon?
            Feel free to contact me using the form below.
          </p>
        </div>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default ContactPage
