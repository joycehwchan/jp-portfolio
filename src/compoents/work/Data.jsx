import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: '旅Now',
        description: '旅行のしおりを自動生成、自由にカスタマイズ。',
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
        description: '近くの畑を借りて野菜作り、みんなで農家。',
        link: '',
        github: 'https://github.com/joycehwchan/minanoka',
        category: 'web',
        role: 'Lead Developer',
        used: 'HTML/CSS, Bootstrap, Ruby on Rails, Devise, Cloudinary, Mapbox, Figma'
    },
    {
        id: 3,
        image: Work3,
        title: 'ポートフォリオ',
        description: 'プロジェクトを載せるための個人サイト。',
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