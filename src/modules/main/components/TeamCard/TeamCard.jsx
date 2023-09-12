import React from 'react'
import "../Styles/TeamCardStyle.css"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
export default function TeamCard(props) {
  return (
 
        <div className='TeamCard' data-aos="fade-right">
    <div className="cardIMG" >
        <img src={props.img} alt="" />
        
    </div>
    <p className="name">{props.name}</p>
        <p className="jop" >{props.jop}</p>
        <p className="info">{props.info}</p>
        <div className="social">
       <a className='socail' href='#'> <FaFacebookF/></a>
       <a className='socail' href='#'> <FaTwitter/></a>
       <a className='socail' href='#'> <FaLinkedinIn/></a>
        </div>
</div>
  )
}
