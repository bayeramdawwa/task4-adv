import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/HomeNavStyle.css";
import { BsQuestionCircle, BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaAlignJustify } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function HomeNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [show, setShow] = useState(false);


  const controlNavbar = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }



  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);



  return (
    <div className="navbar">
      <div className={`headernav  ${show && 'none'}`}>
        <div className="contact">
          <p><BsQuestionCircle />Have a questions </p>
          <p><BsFillTelephoneFill />10 20 123 357 </p>
          <p><BsMailbox2 />info@mydomin.com </p>
        </div>
        <div className="account">
          <a className="accountLINK" href="">log in</a>
          <a className="accountLINK" href="">Register</a>
        </div>
      </div>
      <div className={`fixcednav  ${show  && 'navback' || navbarOpen && 'navback'}`}>
        <h3 className="logo">Learner</h3>
        <ul className={`${navbarOpen ? ' linkmenu show' : 'linkmenu '}`}>
          <li><a className="link" href="">Home</a></li>
          <li><button className="btn-dropdown">Dropdown <BiSolidDownArrow /></button></li>
          <li><a className="link" href="">Our Staff</a></li>
          <li><a className="link" href="">News</a></li>
          <li><a className="link" href="">Gallary</a></li>
          <li><a className="link" href="">About</a></li>
          <li><a className="link" href="">Contact</a></li>
        </ul>

        <a href="" className="enrol">ENROLL NOW</a>
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}><FaAlignJustify /></button>
      </div>
    </div>
  );
}
