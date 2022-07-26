import React, { useEffect } from 'react'
import "./Home.css";
import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Typography } from "@mui/material"
import TimeLine from '../TimeLine/TimeLine';

import moonImage from "../../images/moon.jpeg"
import venusImage from "../../images/venus.jpeg"
import spaceImage from "../../images/space.jpg"

import { Link } from "react-router-dom"

// import htmlImage from "../../images/html.jpeg"
// import cssImage from "../../images/css.jpg"
// import bootStrapImgae from "../../images/bootstrap.png"
// import javaScriptImage from "../../images/javascript.jpg"
// import ReactImage from "../../images/react.jpeg"
// import phpImage from "../../images/php.jpeg"




import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs

} from "react-icons/si";

import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { MouseOutlined } from '@mui/icons-material';


const Home = ({ timelines, youtubes, skills }) => {
    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();

        //creating textures
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);



        const scence = new THREE.Scene();
        //setting camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector('.homeCanvas')
        const renderer = new THREE.WebGLRenderer({ canvas });
        camera.position.set(4, 4, 8);

        //moon geometry
        const moongeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moongeometry, moonmaterial);


        //venus geometry
        const venusgeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusgeometry, venusmaterial);
        venus.position.set(8, 5, 5)



        //setting light
        // const lightHelper = new THREE.PointLightHelper(pointLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(8, 5, 5);
        //another dim point light
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
        pointLight2.position.set(-8, -5, -5);



        // const controls = new OrbitControls(camera, renderer.domElement);//no need of control in main app

        //adding scenes
        scence.add(moon);
        // scence.add(lightHelper);
        scence.add(venus);
        scence.add(pointLight);
        scence.add(pointLight2);
        scence.background = spaceTexture;

        //
        const constSpeed = 0.01;
        window.addEventListener('mousemove', (e) => {
            //left side screen
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;

            }
            //right side screen
            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }


            //up side screen
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            //down side screen
            if (e.clientX <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        })

        //recursive function for rotating moon
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scence, camera);
        }

        animate();

        return window.addEventListener("scroll", () => {
            camera.rotation.z = window.scrollY * 0.003;
            // camera.rotation.y = window.scrollY * 0.003;

            const skillsBox = document.getElementById("homeSkillBox");

            if (window.scrollY > 1500) {
                skillsBox.style.animationName = "homeSkillBoxAnimationON";
            }
            else {
                skillsBox.style.animationName = "homeSkillBoxAnimationOFF";
            }
        })

    }, [])

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>

            <div className="homeCanvasContainer">
                <Typography variant='h1'>
                    <p> G </p>
                    <p> A </p>
                    <p> U </p>
                    <p> R </p>
                    <p> A </p>
                    <p> V </p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant='h2'>DESIGNER</Typography>
                    <Typography variant='h2'> DEVELOPER </Typography>
                    <Typography variant='h2'> STUDENT </Typography>
                    <Typography variant='h2'> CONTENT CREATOR </Typography>
                </div>

                <Link to="/projects">VIEW WORK</Link>
            </div>

            <div className="homeScrollBtn">
                <MouseOutlined/>
            </div>




            <div className="homeContainer">
                <Typography variant='h3'> TIME LINE</Typography>
                <TimeLine timelines={timelines} />
            </div>

            <div className="homeSkill">
                <Typography variant='h3'>SKILLS</Typography>
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={skills.image1.url} alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={skills.image2.url} alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={skills.image3.url} alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={skills.image4.url} alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={skills.image5.url} alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={skills.image6.url} alt="" />
                    </div>

                </div>

                <div className="cubeShadow"></div>

                <div className="homeSkillBox" id='homeSkillBox'>
                    <SiCplusplus />
                    <SiReact />
                    <SiJavascript />
                    <SiMongodb />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiCss3 />
                    <SiHtml5 />
                    <SiThreedotjs />
                </div>
            </div>

            <div className="homeYoutbe">
                <Typography variant='h3'>
                    YOUTUBE VIDEOS
                </Typography>

                <div className="homeYoutbeWrapper">

                    {
                        youtubes.map((item) => (
                            <YoutubeCard
                                image={item.image.url}
                                title={item.title}
                                url={item.url}
                                id={item._id}
                                key={item._id}

                            />
                        ))
                    }




                </div>
            </div>
        </div>
    )
}

export default Home
