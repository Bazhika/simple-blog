import React from "react";
import "./Footer.css";

export const Footer = ({ name, year }) => {
  return (
    <footer>
      <span>
        © {name} - {year}
      </span>
    </footer>
  );
};
