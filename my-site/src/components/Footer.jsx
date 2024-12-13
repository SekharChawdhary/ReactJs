import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='footer'>
      <footer className='footer_container'>
        <div className='footer_container_left'>
            <h5>Sekhar Abboori</h5>
        </div>
        <div className='footer_container_center'>
        <div className='footer_container_center-location'>
        <MdOutlineLocationOn />
            <p>Srinivasa Nagar,Ameerpet,Hydrabad,Telengana,500038</p>
            </div>
            <div className='footer_container_center-mobile'>
            <IoCallOutline />
            <p>6302688393</p>
            </div>
            <div className='footer_container_center-gmail'>
            <CgMail />
            <p>sekharabboori@gmail.com</p>
            </div>
        </div>
        <div className='footer_container_right'>
        <FaInstagram />
        <FaFacebookF />
        <RiTwitterXLine />

        </div>
      </footer>
    </div>
  )
}

export default Footer
