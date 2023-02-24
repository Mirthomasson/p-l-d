import React from "react";

const Button = ({ styles }) => (
  <button href="#popup1" type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Request Quote
  </button>
);

export default Button;
