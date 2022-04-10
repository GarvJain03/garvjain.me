import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let data = {
      email: formData.email,
      name: formData.name,
      message: formData.message,
    }
    try {
      let res
      const postFunc = () => {
        return new Promise(async (resolve, reject) => {
          res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          if (res.status === 200) {
            setSubmitted(true)
            setFormData({ email: '', name: '', message: '' })
            resolve(200)
          } else {
            reject(500)
          }
        })
      }
      toast.promise(postFunc, {
        pending: 'Processing...',
        success: 'Message sent!',
        error: 'Error sending message',
      })
    } catch (err) {
      toast.error('Error sending message')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setFormData({ ...formData, message: value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto rounded-lg bg-primary-dark px-12 py-8 md:w-2/3 lg:w-1/2"
    >
      <h1 className="title-font mb-4 text-2xl font-bold text-white sm:text-3xl">
        Contact Me
      </h1>
      <div className="-m-2 flex flex-wrap">
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-gray-500 bg-secondary-dark px-3 py-1 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:bg-primary-dark"
            />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-gray-500 bg-secondary-dark px-3 py-1 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:bg-primary-dark"
            />
          </div>
        </div>
        <div className="w-full p-2">
          <div className="relative">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleMessageChange}
              className="w-full rounded border border-gray-500 bg-secondary-dark px-3 py-1 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:bg-primary-dark"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="mx-2 mt-4 flex w-full items-center justify-center space-x-2 rounded-lg border border-soft-red px-8 py-3 text-white transition duration-200 ease-in-out hover:bg-soft-red active:outline-soft-red"
        >
          <span className="text-lg font-medium">Submit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default ContactForm
