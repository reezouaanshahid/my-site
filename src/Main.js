import React from 'react'
// import Head1 from './pages/components/Head/Head'
import Contact from './pages/components/Contact/contact'
// import About from './pages/components/about/About'
import Aboutbanner from './pages/components/Aboutbanner/aboutbanner'
import Eduction from './pages/components/Eduction/eduction'
import Skills from './pages/components/Skills/skills'
import About1 from './pages/components/about/About'
import Head1 from './pages/components/Head/Head'

export default function Main() {
  return (
    <div>
        <Head1/>
        <About1/>
        <Aboutbanner/>
        <Eduction/>
        <Skills/>
        <Contact/>
       

    </div>
  )
}
