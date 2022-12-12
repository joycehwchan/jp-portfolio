import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__content">
        <p>{item.description}</p>
        <p>
          <strong>使用言語など: </strong>
          {item.used}
        </p>
      </div>

      <div className="work__links">
        {item.github ? (
          <a
            href={item.github}
            className="work__button"
            target="_blank"
            rel="noreferrer"
          >
            Source <i class="uil uil-github-alt"></i>
          </a>
        ) : (
          ""
        )}

        {item.link ? (
          <a
            href={item.link}
            className="work__button"
            target="_blank"
            rel="noreferrer"
          >
            Demo <i class="uil uil-external-link-alt"></i>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WorkItems;
