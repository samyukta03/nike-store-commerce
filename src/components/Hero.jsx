import React from 'react'
import { heroapi } from '../data/data.js'
import Clips from './utils/Clips.jsx'
import Social from './utils/Social.jsx'
//basically here we are using props to pass a param to this component. 
// props pass an object as parameter which can be destructured like below to access its members. if not destrcutred we can use it like:
// const component_name = (props) => { return {props.objname.membername }}
// eg) const Hero = (props) => { return <> <h1> {props.heroapi.title }</h1></> }
const Hero = ({heroapi : {title,subtitle,btntext,img,socials,clips}}) => { 
    console.log(heroapi)
  return (
    <>
    <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
        <div className='grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-slate-200 filter drop-shadow-sm'>{title}</h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-slate-200 filter drop-shadow-sm'>{subtitle}</h1>
            <button type='button' className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
            <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
               {clips?.map((val,i) => ( 
               <Clips
                 key={i}
                 imgsrc = {val.imgsrc}
                 clip = {val.clip}
                 />
               ))}
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
               {socials?.map((val,i)=>(
                <Social
                    key = {i}
                    icon = {val.icon}
                />
               ))} 
            </div>
        </div>
            <div>
                <img src={img}alt='hero-img/img' className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xs:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill' ></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero