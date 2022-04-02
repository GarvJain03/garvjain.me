import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArtstation,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

interface ISocialIcons {
  links: {
    icon: React.ReactNode;
    url: string;
  }[];
}

const socials: ISocialIcons["links"] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/GarvJain03",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/garv-jain-907aa6218/",
  },
  {
    icon: <FaArtstation />,
    url: "https://www.artstation.com/garv_jain03",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/_garv03/",
  },
  {
    icon: <FaDiscord />,
    url: "https://discordapp.com/users/752153655591043124",
  },
];

const Hero: React.FC = () => {
  return (
    <div className="bg-secondary-dark">
      <div className="container mx-auto flex lg:px-24 px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-row mb-8 space-x-3">
            {socials.map((social, index) => (
              <a
                key={index}
                target={`_blank`}
                href={social.url}
                className="w-[50px] h-[50px] text-xl border-soft-red hover:bg-soft-red duration-200 ease-in-out border-2 text-white rounded-full flex justify-center items-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <h2 className="text-3xl font-medium sm:text-4xl text-white">
            Hi, I'm Garv
          </h2>

          <p className="mt-4 text-xl text-gray-400">
            A creative developer who loves to write code and solve real world
            problems.
          </p>

          <button className="inline-flex active:outlue-soft-red transition duration-200 ease-in-out items-center px-8 py-3 mt-8 text-white border border-soft-red rounded-full hover:bg-soft-red">
            <span className="text-xl font-medium">Read More</span>
          </button>
        </div>
        <img
          className="object-cover md:w-1/2 lg:w-2/6 hover:animate-pulse object-center rounded-full border-[20px] border-primary-dark shadow-md"
          alt="hero"
          src="/images/garv.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
