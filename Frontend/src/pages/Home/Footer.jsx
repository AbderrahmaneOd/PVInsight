import React from "react";
import { TextInput } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import logo from "../../assets/logo.png";

const MyFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-gray-300">
      <div className="px-6 lg:px-16 max-w-screen-2xl mx-auto py-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          {/* Logo and Social Links */}
          <div className="sm:w-1/3">
            <a href="/" className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-full">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </div>
            </a>
            <p className="text-sm">
              &copy; 2024 PVInsight. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-xl hover:text-gray-400">
                <BsFacebook />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <BsInstagram />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <BsTwitter />
              </a>
              <a href="https://github.com/AbderrahmaneOd/PVInsight" className="text-xl hover:text-gray-400">
                <BsGithub />
              </a>
            </div>
          </div>

          {/* Navigation and Newsletter */}
          <div className="sm:w-2/3 flex flex-wrap justify-between gap-8 mt-8 sm:mt-0">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto">
              <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
              <p className="text-sm mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex items-center">
                <TextInput
                  id="newsletter"
                  placeholder="Your email"
                  type="email"
                  className="flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                  <SiMinutemailer />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
