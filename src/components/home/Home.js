import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id='home' className='w-full h-[800px] py-20 flex  border-b-[1px] font-titleFont border-b-black'>
      <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize">Kavindu Gamage</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I use animation as a third dimension by which to simplify experiences
            and kuiding thro each and every interaction. I'm not adding motion
            just to spruce things up, but doing it in ways that.
          </p>
        </div>
        <div>
          <h2 className='text-base uppercase font-titlefont mb-4'>Finde me in</h2>
        </div>
      </div>
      <div className='w-1/2'>

      </div>

    </section>
  )
}

export default Home