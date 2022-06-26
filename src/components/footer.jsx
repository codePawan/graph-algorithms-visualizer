import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with Love by &copy;V Pawan Sudhir{" "}
         
          <a target = "_blank" href="www.linkedin.com/in/vinjamuri-pawan-sudhir-3409a4190">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
