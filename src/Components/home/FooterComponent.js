import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <ul className="list-inline mb-5">
          <li className="list-inline-item">
            <a
              target="blank"
              className="social-link rounded-circle text-white mr-3"
              href="https://www.instagram.com/trabajo_decente/"
            >
              <i className="icon-social-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="blank"
              className="social-link rounded-circle text-white mr-3"
              href="https://twitter.com/_trabajodecente"
            >
              <i className="icon-social-twitter"></i>
            </a>
          </li>
        </ul>
        <p className="text-muted small mb-0">
          Copyright &copy; 2020 - Developed by{" "}
          <a
            target="blank"
            href="https://www.linkedin.com/in/jeison-adarme-75534a115/"
          >
            Jeison Adarme
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
