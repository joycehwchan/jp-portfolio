import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Work6 from "../../assets/work6.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "旅Now",
    description: "旅行のしおりを自動生成、自由にカスタマイズ。",
    link: "https://tabinow.tours/",
    github: "https://github.com/joycehwchan/tabinow",
    category: "web",
    used: "HTML/Sass, Javascript, Ruby on Rails, Devise, Pundit, APIs, Cloudinary, Mapbox, Figma",
  },
  {
    id: 2,
    image: Work2,
    title: "MinaNoka",
    description: "近くの畑を借りて野菜作り、みんなで農家。",
    link: "",
    github: "https://github.com/joycehwchan/minanoka",
    category: "web",
    used: "HTML/CSS, Bootstrap, Ruby on Rails, Devise, Cloudinary, Mapbox, Figma",
  },
  {
    id: 3,
    image: Work3,
    title: "記憶ゲーム",
    description: "同じキャラを2回クリックしたら負け！",
    link: "https://joycehwchan.github.io/memory-game/",
    github: "https://github.com/joycehwchan/memory-game",
    category: "fun",
    used: "React, CSS",
  },
  {
    id: 4,
    image: Work4,
    title: "ひみつチャット",
    description: "友達と楽しく話せるチャットアプリ。",
    link: "https://www.figma.com/proto/1EKelARAwncltUYDV1bhyF/OnTrack?node-id=69%3A2604&scaling=scale-down&page-id=69%3A2574&starting-point-node-id=69%3A2604&hide-ui=1",
    github: "",
    category: "design",
    used: "React, Firebase, Sass",
  },
  {
    id: 5,
    image: Work5,
    title: "OnTrack",
    description: "自分に合うメンターを見つけて、人生を変えよう。",
    link: "https://www.figma.com/proto/1EKelARAwncltUYDV1bhyF/OnTrack?node-id=69%3A2604&scaling=scale-down&page-id=69%3A2574&starting-point-node-id=69%3A2604&hide-ui=1",
    github: "",
    category: "design",
    used: "Figma",
  },
  {
    id: 6,
    image: Work6,
    title: "Muvie",
    description:
      "映画チケットを友達にプレゼント！みんなとシネマで映画を楽しもう！",
    link: "https://www.figma.com/proto/0v75ojAIQkhzLjeSeVL1HO/Muvie?node-id=401%3A5069&scaling=scale-down&starting-point-node-id=615%3A14010&hide-ui=1",
    github: "",
    category: "design",
    used: "Figma",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "web" },
  { name: "design" },
  { name: "fun" },
];
