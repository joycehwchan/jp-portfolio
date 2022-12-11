import React from "react";

const Design = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">デザイン</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-figma-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="devicon-sketch-line skills__devicon"></i>
            <div>
              <h3 className="skills__name">Sketch</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="devicon-webflow-original skills__devicon"></i>
            <div>
              <h3 className="skills__name">Webflow</h3>
              {/* <span className="skills__level">Advance</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-photoshop-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">Photoshop</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="devicon-xd-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">AdobeXD</h3>
              {/* <span className="skills__level">Advance</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="devicon-illustrator-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">Illustrator</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
