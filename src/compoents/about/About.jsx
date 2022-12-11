import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Resume from "../../assets/resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">プロフィール</h2>
      <span className="section__subtitle"></span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            カナダ生まれの香港育ち。2018年に来日、現在は東京在住、フロントエンドエンジニア兼Webデザイナー。{" "}
            <br />
            <br />
            2022年10月からLe Wagon
            Tokyoでウェブ開発を学び、HTML・CSS・Javascript・Ruby on
            Rails・SQLなどのスキルを身につけ、いくつかのアプリをゼロから開発し、デプロイ。{" "}
            <br />
            <br />
            今はReact、Typescriptについて勉強中。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
