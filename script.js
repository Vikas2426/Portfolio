var mernProjectList = {
  names: [

    "Amazon Clone",
    "Google Keep Clone",
    "Visualizr",
    "ToDo App FullStack"
  ],

  links: [

    "https://vikas2426.github.io/amazon-clone/",
    "https://vikas2426.github.io/GoogleKeepClone-React-App/",
    "https://vikas2426.github.io/Visualizr-React",
    "https://vikas2426.github.io/ToDo/"
  ],

  images: [

    "images/amazon-clone-min.jpg",
    "images/keep.webm",
    "images/visualizr.webm",
    "images/todo.webm",
  ],

  tech: [

    "Work in progress! <span class='highlighted-text'>Clone of Amazon e-commerce</span>  website using ReactJS and Firebase Auth",
    "Clone of Google's Note taking app 'Google Keep' using ReactJS. With <span class='highlighted-text'>theme that defaults to system's theme(Light/Dark)</span>.",
    "ReactJS app to <span class='highlighted-text'>visualize the runtime of different algorithms based on user input.</span> Algorithms for searching,sorting, optimizes arithmetic.",
    "Full-stack to-do list web app with <span class='highlighted-text'>drag-n-drop feature</span> using React-beautiful-DND,  MongoDB, ExpressJs, ReactJS and Node",
  ],
};
var vanillaProjectsList = {
  names: [
    "Jokes",
    "Gradient Generator",
    "Expense App",
    "Click Music",
  ],

  links: [

    "https://just-kidding.netlify.app/",
    "https://gradientgenerator.netlify.com",
    "https://vikasexpense.netlify.com",
    "https://clickmusic.netlify.com/",
  ],

  images: [

    "/images/joker.webm",
    "images/gradient.webm",
    "images/expense.webm",
    "images/music.webm",
  ],

  tech: [

    "A joke generating app which displays joke fetched from an API. Used HTML5, CSS, Javascript and an API",
    "Linear gradient generator web app. Let you choose colours for the gradient and copy the code with just one click. Used HTML5, CSS and Javascript",
    "An expense management web app using HTML5, CSS, Javascript and Bootstrap. Takes in amount spent and item/service bought.",
    "Music generator web app. Plays audio on listening to clicks on different coloured scales. Used HTML5, CSS and Javascript.",
  ],
};

var otherProjectList = {
  names: [
    "Data Scientist @ IXXO",
    "ML Projects",
    "Dinosaur Game Player",

  ],

  links: [
    "https://github.com/Vikas2426/Internship",
    "https://github.com/Vikas2426/Machine-Learning-Projects",
    "https://github.com/Vikas2426/Python-Programs/blob/master/DinosaurBot.ipynb",

  ],

  images: [
    "images/ixxo-min.png",
    "images/ml-min.jpg",
    "images/dino-min.jpg",

  ],

  tech: [
    "Trained logistic regression model and built text classifier and categoriser (email/code/web content etc.) Used 'Tesseract OCR' for optical character recognition.",
    "All my other machine learning project codes are in my github.",
    "Game bot to play google's offline dinosaur game. Used python library 'PIL' for real time image grabbing and optimisation and 'PYAUTOGUI' a player.",

  ],
};



// Copyright text in footer
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML = `<p>Copyright © Vikas Choubey, ${year}</p>`;


//hamburger menu
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
});


const navLI = document.querySelectorAll('ul > *');

for (var i = 0; i < navLI.length; i++) {
  navLI[i].addEventListener('click', () => {
    navLinks.classList.toggle('active')
  });
}



// MERN projects
const mernButton = document.querySelector(".mern");
const mernSection = document.querySelector(".mern-section");
var mernProjectDiv = "";


for (let i = 0; i < mernProjectList.links.length; i++) {
  mernProjectDiv += ` <section class="card">
  <div class="card-img-container">
  <a
  class="blog-link"
  href=${mernProjectList.links[i]}
  target="_blank"
  >
  ${ !mernProjectList.images[i].endsWith('webm') ? 
  `<img  src=${mernProjectList.images[i]} alt=${mernProjectList.names[i]}/>`
  : `<video  autoplay loop>
  <source src=${mernProjectList.images[i]} type="video/webm">
  </video>`
}
</a>
</div>
<div class="img-description">
<p class="project-name"><strong>${mernProjectList.names[i]}</strong></p> 
  <p class="project-desc">
  ${mernProjectList.tech[i]}
  </p>
  
</div>
<a href='${mernProjectList.links[i]}'
  target="_blank"><button class='demo-btn'>Demo <i class="fas fa-external-link-alt"></i></button></a>
</section>
`;
}

mernSection.innerHTML += mernProjectDiv;





// vanillaProjectDiv

const jsButton = document.querySelector(".javascript");
const jsSection = document.querySelector(".js-section");
var vanillaProjectDiv = "";

for (let i = 0; i < vanillaProjectsList.links.length; i++) {
  vanillaProjectDiv += ` <section class="card">
  <div class="card-img-container">
<a
  class="blog-link"
  href=${vanillaProjectsList.links[i]}
  target="_blank"
>
${ !vanillaProjectsList.images[i].endsWith('webm') ? 
`<img  loading="lazy" src=${vanillaProjectsList.images[i]}  alt=${vanillaProjectsList.names[i]}/>` : `<video  autoplay loop>
  <source src=${vanillaProjectsList.images[i]} type="video/webm">
  </video>`
}
</a>
</div>
<div class="img-description">
<p class="project-name"><strong>${vanillaProjectsList.names[i]}</strong></p> 
  <p class="project-desc">
  ${vanillaProjectsList.tech[i]}
  </p>
  
</div>
<a href='${vanillaProjectsList.links[i]}'
  target="_blank"><button class='demo-btn'>Demo <i class="fas fa-external-link-alt"></i></button></a>
</section>`;
}
jsSection.innerHTML += vanillaProjectDiv;




//   otherProjectDiv
const otherButton = document.querySelector(".other");
const otherSection = document.querySelector(".other-section");
var otherProjectDiv = "";


for (let i = 0; i < otherProjectList.links.length; i++) {
  otherProjectDiv += `<section class="card">
  <div class="card-img-container">
<a
  class="blog-link"
  href=${otherProjectList.links[i]}
  target="_blank"
>
<img  loading="lazy" src=${otherProjectList.images[i]}  alt=${otherProjectList.names[i]}/>
</a>
</div>
<div class="img-description">
<p class="project-name"><strong>${otherProjectList.names[i]}</strong></p> 
  <p class="project-desc">
  ${otherProjectList.tech[i]}
  </p>
  
</div>
<a href='${otherProjectList.links[i]}'
  target="_blank"><button class='demo-btn'>Github Repo <i class="fas fa-external-link-alt"></i></button></a>
</section>
`;
}

otherSection.innerHTML += otherProjectDiv;



// display only MERN projects
mernButton.addEventListener('click', () => {
  mernSection.style.display = 'flex';
  mernButton.classList.add('selected');

  jsSection.style.display = 'none';
  otherSection.style.display = 'none';

  jsButton.classList.remove('selected');
  otherButton.classList.remove('selected');
});

// display only Javascript projects

jsButton.addEventListener('click', () => {
  jsSection.style.display = 'flex';
  jsButton.classList.add('selected');

  mernSection.style.display = 'none';
  otherSection.style.display = 'none';

  mernButton.classList.remove('selected');
  otherButton.classList.remove('selected');
});

// display only Other projects

otherButton.addEventListener('click', () => {
  otherSection.style.display = 'flex';
  otherButton.classList.add('selected');

  jsSection.style.display = 'none';
  mernSection.style.display = 'none';

  mernButton.classList.remove('selected');
  jsButton.classList.remove('selected');
})




