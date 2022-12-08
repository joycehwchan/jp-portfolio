import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">経歴</h2>
            <span className="section__subtitle"></span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> 
                        学歴・資格
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> 
                        職歴・経験
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">ウェブ開発コース</h3>
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
                                <h3 className="qualification__title">Google UXデザイン プロフェッショナル認定</h3>
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
                                <h3 className="qualification__title">日本語能力試験 N1</h3>
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
                                <h3 className="qualification__title">ヨーク大学経済学部経済学科</h3>
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
                                <h3 className="qualification__title">フロントエンドエンジニア</h3>
                                <span className="qualification__subtitle">
                                    プロジェクト: 旅Now
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
                                <h3 className="qualification__title">フルスタックエンジニア</h3>
                                <span className="qualification__subtitle">
                                    プロジェクト: MinaNoka
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2022.11
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UX/UI デザイナー</h3>
                                <span className="qualification__subtitle">
                                    プロジェクト: OnTrack
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
                                <h3 className="qualification__title">国際交流員</h3>
                                <span className="qualification__subtitle">
                                    橿原市役所　魅力創造部　観光政策課　広域観光係
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calender"></i> 2018.08 - 2022.08
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">インターン</h3>
                                <span className="qualification__subtitle">
                                    Whitehole Design Studio, 香港
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