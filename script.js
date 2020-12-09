// review data 
const reviews = [
    {
        id  : 1,
        name: "John Snow",
        job : "Web Developer",
        img : "img/face (1).jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur impedit temporibus, ex illo et accusamus",
    },
    {
        id  : 2,
        name: "Selina Maze",
        job : "Marketting Assistant",
        img : "img/face (2).jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur impedit temporibus, ex illo et accusamus",
    },
    {
        id  : 3,
        name: "Jane Doe",
        job : "Teacher",
        img : "img/face (3).jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur impedit temporibus, ex illo et accusamus",
    },
    {
        id  : 4,
        name: "Susan Simum",
        job : "Musician",
        img : "img/face (4).jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur impedit temporibus, ex illo et accusamus",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    const items = reviews[]
});