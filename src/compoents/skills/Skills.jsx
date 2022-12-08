import React from 'react'
import "./skills.css"
import Frontend from "./Frontend"
import Backend from './Backend'
import Design from './Design'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Languages and tools I use</span>
       
       <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Tools />
       </div>
    </section>
  )
}

export default Skills