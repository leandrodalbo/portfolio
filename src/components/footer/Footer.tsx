import React from "react";
import "./style.css";
import { FooterService } from "./FooterService";

interface FooterProps {
  service: FooterService;
}

const Footer = ({ service }: FooterProps) => {
  return (
    <footer id="footer" className="py-1">
      <div className="container py-1">
        <div className="row py-1 ">
          <div className="col py-1">
            <p className="d-flex justify-content-center py-2">
              &copy;{service.content()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
