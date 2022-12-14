import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">バックエンド</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-ruby-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">Ruby</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="devicon-rails-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">Rails</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-mysql-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="devicon-postgresql-plain skills__devicon"></i>
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
