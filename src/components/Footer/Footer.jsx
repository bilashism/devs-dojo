import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <hr className="max-w-3xl mx-auto" />
        <p className="text-center py-8">
          ©{" "}
          <Link to="/" className="font-bold">
            Devs Dojo
          </Link>{" "}
          {new Date().getFullYear()} all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
