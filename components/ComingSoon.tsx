import React from 'react'
import Link from 'next/link'

const ComingSoon: React.FC = () => {
  return (
    <div className="p-12 text-2xl text-white">
      <div className="mb-2">Coming Soon!</div>
      For now you can go{' '}
      <Link href="/">
        <a className="font-bold transition duration-200 ease-in-out hover:text-gray-300">
          home
        </a>
      </Link>
      .
    </div>
  )
}

export default ComingSoon
