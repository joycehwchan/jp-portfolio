import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'TabiNow',
        description: 'A few clicks to generate and customize travel itineraries.',
        link: 'https://tabinow.tours/',
        github: 'https://github.com/joycehwchan/tabinow',
        category: 'web',
        role: 'Front-end Lead',
        used: 'HTML/Sass, Javascript, Ruby on Rails, Devise, Pundit, APIs, Cloudinary, Mapbox, Figma'
    },
    {
        id: 2,
        image: Work2,
        title: 'MinaNoka',
        description: 'Rent a farming field to experience rural Japan.',
        link: 'http://www.minanoka.com/',
        github: 'https://github.com/joycehwchan/minanoka',
        category: 'web',
        role: 'Lead Developer',
        used: 'HTML/CSS, Bootstrap, Ruby on Rails, Devise, Cloudinary, Mapbox, Figma'
    },
    {
        id: 3,
        image: Work3,
        title: 'Portfolio',
        description: 'Personal portfolio to showcase my projects.',
        link: '#',
        github: 'https://github.com/joycehwchan/portfolio',
        category: 'design',
        role: 'Front-end Developer, UI Designer',
        used: 'Figma, React, CSS'
    },
]

export const projectsNav = [
    {name: 'all'},
    {name: 'web'},
    {name: 'design'},
]