import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <div className="work__content">
            <p>{item.description}</p>
            <p><strong>Tools: </strong>{item.used}</p>
        </div>

        <div className="work__links">
            <a href={item.github} className="work__button" target="_blank" rel="noreferrer">
                Source <i class="uil uil-github-alt"></i>
            </a>
            <a href={item.link} className="work__button" target="_blank" rel="noreferrer">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            
            
        </div>
    </div>
  )
}

export default WorkItems
