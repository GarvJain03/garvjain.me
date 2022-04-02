import React from "react";
import { Link } from "remix";

const ComingSoon: React.FC = () => {
  return (
    <div className="text-white p-12 text-2xl">
      <div className="mb-2">Coming Soon!</div>
      For now you can go{" "}
      <Link
        to="/"
        className="font-bold hover:text-gray-300 transition duration-200 ease-in-out"
      >
        home
      </Link>
      .
    </div>
  );
};

export default ComingSoon;
