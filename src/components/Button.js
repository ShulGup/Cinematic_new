import React from "react";

export const Button = ({ children }) => {
  return (
    <div>
      <p>Button Components</p>
      <button
        type="button"
        class="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {children}
      </button>
    </div>
  );
};
