import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer font-small blue mt-5">
      <div className="footer-copyright text-center py-3">
        © {year} Copyright:
        <a href="#"> salguero.dev</a>
      </div>
    </footer>
  );
};
