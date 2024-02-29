import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Aboutbanner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Once the section is in view, you can trigger animations or any other logic here
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 text-gray-400 bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, delay: 0.9 }}
      >
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-gray-900 to-gray-800 hover:text-8xl" />

        <div className="mx-auto max-w-2xl lg:max-w-4xl ">
          <h1 className="text-4xl flex justify-center aline-center ">About Me</h1>
          <img
            className="mx-auto h-20 w-20 rounded-full mt-4"
            src={require('./I11.jpg')}
            alt="image her"
          />
          <figure className="mt-10">
            <div className="text-center text-xl font-semibold leading-8 text-white-900 sm:text-2xl sm:leading-9">
              <p>Hey there! 👋 I'm Rizwan Shahid, a passionate web developer with over 2 years of experience crafting compelling and functional websites. I thrive on transforming design concepts into responsive and interactive web experiences.
🚀 Expertise: Converting PSD, XD, and Sketch designs to pixel-perfect HTML Bootstrap 5 and Tailwind CSS for modern and sleek interfaces JavaScript for dynamic and engaging user interactions Responsive design principles ensuring compatibility across devices Crafting HTML email templates for effective communication</p>
            </div>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white-900">Rizwan</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-white-600">Web developer at FIT</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </motion.div>
    </section>
  );
}
