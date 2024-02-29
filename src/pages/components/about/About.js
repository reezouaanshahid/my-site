import React from 'react';
import { motion } from 'framer-motion';

export default function About1() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
        >
          <img
            className="object-cover object-center rounded border-2 duration-500 hover:border-sky-500 max-md:mt-28"
            alt="hero"
            src={require('./I11.jpg')}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi There
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'M <span className='text-sky-500'> Web-developer </span>
          </h1>
          <p className="mb-8 hover:text-2xl duration-500">
            I'm an expert front-end web developer. I've
            made a sum of 40+ sites over the course of the last 2+ years and
            with those tasks came a great deal of involvement. I'm a specialist
            in PSD to HTML, XD to HTML, Sketch to HTML, and furthermore, I have
            many encounters with making an HTML email layout. <span className='text-sky-500'> It's not just my
            calling it's likewise my energy. So let me in on about your task
            and We should begin work. :) My Skills: - HTML 5 - CSS 3 -
            Bootstrap  - Tailwind CSS - Javascript - Responsive plan - React - Next.js
            email format Gratitude forb visiting my profile:)</span>
          </p>
          <div className="flex w-full md:justify-start justify-center items-end"></div>
          <a href='https://www.fiverr.com/rizwanbarcha393?up_rollout=true' className="text-sm mt-2 text-gray-500 mb-8 w-full text-sky-500 hover:text-2xl duration-500">
            click here for my fiver account
          </a>
        </motion.div>
      </div>
    </section>
  );
}
