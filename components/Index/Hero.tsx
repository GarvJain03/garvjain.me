import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaArtstation,
  FaDiscord,
  FaInstagram,
} from 'react-icons/fa'

const socials: { icon: React.ReactFragment; url: string }[] = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/GarvJain03',
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/garv-jain-907aa6218/',
  },
  {
    icon: <FaArtstation />,
    url: 'https://www.artstation.com/garv_jain03',
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/garvjain03/',
  },
  {
    icon: <FaDiscord />,
    url: 'https://discordapp.com/users/752153655591043124',
  },
]

const Hero: React.FC = () => {
  return (
    <div className=" mx-auto flex flex-col items-center px-5 py-12 md:flex-row lg:px-24">
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <div className="mb-8 flex flex-row space-x-3">
          {socials.map((social, index) => (
            <a
              key={index}
              target={`_blank`}
              href={social.url}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-soft-red text-xl text-white duration-200 ease-in-out hover:bg-soft-red"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <h2 className="text-3xl font-medium text-white sm:text-4xl">
          Hi, I'm Garv
        </h2>

        <p className="mt-4 text-justify text-xl leading-8 text-gray-400">
          A creative developer who loves to write code and solve real world
          problems. I'm a currently attending{' '}
          <a href="//dpsrkp.net" target={`_blank`} className="link">
            Delhi Public School, RK Puram
          </a>{' '}
          as a high school sophomore where I am a part of{' '}
          <a href="//exunclan.com" target={`_blank`} className="link">
            Exun Clan
          </a>
          , the tech club and{' '}
          <a href="//roboknights.in" target={`_blank`} className="link">
            RoboKnights
          </a>
          , the robotics club of the school.
        </p>
      </div>
      <img
        className="rounded-full border-[20px] border-primary-dark object-cover object-center shadow-md hover:animate-pulse md:w-1/2 lg:w-2/6"
        alt="hero"
        src="/images/garv.jpg"
      />
    </div>
  )
}

export default Hero

// mx-auto flex flex-col items-center px-5 py-12 md:flex-row lg:px-24
