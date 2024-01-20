// here is basically where u define the data structure of each UI comoponent 
// to be rendered and send this structured data over api to be display 
// so we need like images to be imported if the DS has any image or links to be rendered 
import heroimg from "../assets/hero.png"

import vcover1 from "../assets/video/vcover1.png"
import vcover2 from "../assets/video/vcover2.png"
import vcover3 from "../assets/video/vcover3.png"
import clip from "../assets/video/clip.mp4"

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

//for first Hero.jsx UI we create a DS called 'heroapi' based on the UI struc: 2 h tags, 1 button, 1 img, 1 array of social media links and 1 array of video (link)
const heroapi = {
    title: "Play With Electric Nike",
    subtitle: "Adapt 2.0 Sneakers",
    img: heroimg,
    btntext: "Explore Product",
    clips: [
        { imgsrc: vcover1, clip: clip },
        { imgsrc: vcover2, clip: clip },
        { imgsrc: vcover3, clip: clip },
    ],
    socials: [
        { icon: facebook },
        { icon: messenger },
        { icon: instagram },
        { icon: twitter },
        { icon: youtube },
    ],
};

export {heroapi}