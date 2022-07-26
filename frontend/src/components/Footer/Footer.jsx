import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import{BsGithub,BsYoutube,BsInstagram,BsLinkedin} from "react-icons/bs";


import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
            Hey, MY name is Gaurav Kumar. I am a full-stack Developer and a tutor on youtube channel called <b> tier3wale</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Us</Typography>
        </Link>
        </div>

        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href="http://" target="blank">
                <BsGithub/>
            </a>
            <a href="http://" target="blank">
                <BsYoutube/>
            </a>
            <a href="http://" target="blank">
                <BsInstagram/>
            </a>
            <a href="http://" target="blank">
                <BsLinkedin/>
            </a>
        </div>
    </div>
  )
}

export default Footer
