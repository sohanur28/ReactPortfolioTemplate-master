import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Sohanur",
    lastName: "Rahman",
    initials: "sr", 
    position: "a Front-End Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: "📧",
            text: "gsrahman28@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Sohanur. I'm a Front-end Developer. I am currently pursuing a Bachelor's degree in Computer Science at North Western University, Khulna, Bangladesh, where I have been actively engaged in various projects and coursework related to web development. My coursework has provided me with a solid understanding of JavaScript, HTML, CSS, and other relevant technologies. I enjoy long walks on the beach, and my academic experiences have served me well in developing my teamwork, time-management, and collaboration skills. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'tailwind', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'firebase', 'mongodb']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://lambent-paletas-36020d.netlify.app/", 
            source: "https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-sohanur28", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://fascinating-kangaroo-3a151c.netlify.app/",
            source: "https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-sohanur28",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://gleaming-syrniki-ca4130.netlify.app/",
            source: "https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-sohanur28",
            image: mock3
        }
    ]
}