import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> 
                        Education
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> 
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full-stack Web Development</h3>
                                <span className="qualification__subtitle">
                                    Le Wagon Tokyo
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2022.10 - 2022.12
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Google UX Design Professional Certificate</h3>
                                <span className="qualification__subtitle">
                                    Google / Coursera
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2021.11 - 2022.01
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Japanese-Language Proficiency Test N1</h3>
                                <span className="qualification__subtitle">
                                    Japan Foundation
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bachelor's Degree, Economics</h3>
                                <span className="qualification__subtitle">
                                York University
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2014 - 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Front-end Lead</h3>
                                <span className="qualification__subtitle">
                                    Project: TabiNow
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2022.11 - 2022.12
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Lead Developer</h3>
                                <span className="qualification__subtitle">
                                    Project: MinaNoka
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2022.11
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UX/UI Designer</h3>
                                <span className="qualification__subtitle">
                                    Project: OnTrack
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2021.12 - 2022.01
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Coordinator for International Relations</h3>
                                <span className="qualification__subtitle">
                                    Kashihara City Hall, Nara
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2018.08 - 2022.08
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Market Research Intern</h3>
                                <span className="qualification__subtitle">
                                    Whitehole Design Studio, Hong Kong
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2017.07 - 2017.08
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification