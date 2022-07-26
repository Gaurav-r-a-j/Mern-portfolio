import { Typography } from '@mui/material'
import React from 'react'
import "./About.css"
const About = ({about} )=> {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography> {about.quote} </Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={about.avatar.url} alt="Gaurav" className='aboutAvatar' />
                    <Typography variant='h4' style={{margin:"1vmax 0", color:"black"}}>{about.name}</Typography>
                    <Typography >{about.title} </Typography>
                    <Typography 
                    style={{
                        margin:"1vmax 0", 
                        color:"black",
                        textAlign:"center"
                        }}> {about.subTitle  }</Typography>
                </div>


                <div className='aboutDesc'>
                    <Typography >
                        {about.description}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About
