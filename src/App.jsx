
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'

import { useState } from 'react';

function App() {
    const [active, setActive] = useState('Portfolio');

  return (
    <>
    <div className='main-content'>
      <Menu active={active} setActive={setActive} />
      { active === "Portfolio" && (
        <section>
          <AboutMe setActive={setActive} />
          <hr style={{ color: 'white', margin: '40px 0' }} />
          <Skills/>
          <hr style={{ color: 'transparent', margin: '40px 0' }} />
          <Projects setActive={setActive} />
          <Contact/>
        </section>
      )}
      { active === "Blog" && (
        <section>
          <Blog/>
        </section>
      )}
      { active === "Contact" && (
        <section>
          <Contact />
        </section>
      )}
      <hr style={{ color: 'white', margin: '40px 0' }} />
      <Menu active={active} setActive={setActive} />
    </div>
    </>
  )
}

export default App
