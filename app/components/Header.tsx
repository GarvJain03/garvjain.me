import React from "react";
import { Link } from "remix";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

interface ILink {
  links: {
    name: string;
    url: string;
  }[];
}

const links: ILink["links"] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Resume",
    url: "/blog",
  },
];

const Header: React.FC = () => {
  let location = useLocation();
  return (
    <header className="bg-primary-dark p-5 lg:px-12 px-8 flex sticky z-50 top-0 lg:items-center">
      <span className="text-2xl text-white font-extrabold">garv_jain03</span>
      <div className="flex items-center ml-auto text-2xl text-white lg:hidden space-x-6">
        <GiHamburgerMenu />
      </div>
      <div className="lg:flex lg:items-center lg:mx-auto hidden space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            className={`text-lg text-white font-medium ${
              location.pathname === link.url
                ? "underline underline-offset-4 decoration-4"
                : ""
            }`}
            to={link.url}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link
        to="/contact"
        className="text-lg hover:bg-white hover:text-primary-dark transition duration-200 ease-in-out text-white border-2 font-medium lg:block hidden border-white px-4 py-3"
      >
        Contact Me
      </Link>
    </header>
  );
};

export default Header;
