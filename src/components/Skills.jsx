import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javaScript from '../assets/javascript.png'
import github from '../assets/github.png'
import next from '../assets/nextjs.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import eact from '../assets/react.png'
import Image from 'next/image'


const Skills = () => {

    const skils = [
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javaScript,
            title:"JavaScript",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:eact,
            title:"React",
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:next,
            title:"Next js",
            style:'shadow-white'
        },
        {
            id:7,
            src:github,
            title:"GitHub",
            style:'shadow-gray-500'
        },
        {
            id:8,
            src:node,
            title:"Node js",
            style:'shadow-green-500'
        },
    ]
  return (
    <div name="Skills" className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className=' py-6'>These are technologies I've worked with</p>
            </div>

        <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {
            skils.map(({id,src,title,style})=>(
            <div key={id} className={` shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                <Image src={src} className=' w-20 mx-auto'/>
                <p className=' mt-4'>{title}</p>
            </div>
            ))
        }
            </div>
        </div>
    </div>
  )
}

export default Skills