import React from "react";
import { Link } from "react-router-dom";

export const FooterComp = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2030{" "}
                <a href="/" className="hover:underline">
                  Cinematic™
                </a>
                All Rights Reserved...
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  Linkedlin
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  Instagram Page
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
