var mernProjectList = {
  names: [

    "Amazon Clone",
    "Google Keep Clone",
    "ToDo App FullStack"
  ],

  links: [

    "https://vikas2426.github.io/amazon-clone/",
    "https://vikas2426.github.io/GoogleKeepClone-React-App/",
    "https://vikas2426.github.io/ToDo/"
  ],

  images: [

    "images/amazon-clone-min.jpg",
    "images/keep-min.jpg",
    "images/todoApp-min.jpg",
  ],

  tech: [

    "Work in progress ! ReactJS, Firebase Auth",
    "ReactJS, CSS",
    "MongoDB, ExpressJs, REACT, Node",
  ],
};
var vanillaProjectsList = {
  names: [
    "Jokes",
    "Expense App",
    "Click Music",
    "Gradient Generator",
  ],

  links: [

    "https://just-kidding.netlify.app/",
    "https://vikasexpense.netlify.com",
    "https://clickmusic.netlify.com/",
    "https://gradientgenerator.netlify.com"
  ],

  images: [

    "/images/justKidding-min.jpeg",
    "images/expense-min.jpeg",
    "images/clickmusic-min.jpeg",
    "images/gradient.png",
  ],

  tech: [

    "HTML5, CSS, Javascript and an API",
    "HTML5, CSS, Javascript and Bootstrap.",
    "HTML5, CSS and Javascript.",
    "Generate linear gradients",
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
    "images/ixxo-min.jpeg",
    "images/ml-min.jpg",
    "images/dino-min.jpg",

  ],

  tech: [
    "Internship project. Logistic Regression",
    "Machine learning projects. Github Repository.",
    "Game bot to play the google offline dinosaur game.",

  ],
};



// Copyright text in footer
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML = `<p></p>Copyright © Vikas Choubey, ${year}`;


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
  mernProjectDiv += ` <section class="sub-section">
<a
  class="blog-link"
  href='${mernProjectList.links[i]}'
  target="_blank"
>
<img class="project-img" src='${mernProjectList.images[i]}' />
</div>
</a>
<div class="img-description">
<h4 class="project-name">${mernProjectList.names[i]}</h4> 
  <p>
  ${mernProjectList.tech[i]}
  </p>
</div>
</section>
`;
}

mernSection.innerHTML += mernProjectDiv;





// vanillaProjectDiv

const jsButton = document.querySelector(".javascript");
const jsSection = document.querySelector(".js-section");
var vanillaProjectDiv = "";

for (let i = 0; i < vanillaProjectsList.links.length; i++) {
  vanillaProjectDiv += ` <section class="sub-section">
<a
  class="blog-link"
  href='${vanillaProjectsList.links[i]}'
  target="_blank"
>
<img class="project-img" src='${vanillaProjectsList.images[i]}' />
</div>
</a>
<div class="img-description">
<h4 class="project-name">${vanillaProjectsList.names[i]}</h4> 
  <p>
  ${vanillaProjectsList.tech[i]}
  </p>
</div>
</section>`;
}
jsSection.innerHTML += vanillaProjectDiv;




//   otherProjectDiv
const otherButton = document.querySelector(".other");
const otherSection = document.querySelector(".other-section");
var otherProjectDiv = "";


for (let i = 0; i < otherProjectList.links.length; i++) {
  otherProjectDiv += `<section class="sub-section">
<a
  class="blog-link"
  href='${otherProjectList.links[i]}'
  target="_blank"
>
<img class="project-img" src='${otherProjectList.images[i]}' />
</div>
</a>
<div class="img-description">
<h4 class="project-name">${otherProjectList.names[i]}</h4> 
  <p>
  ${otherProjectList.tech[i]}
  </p>
</div>
</section>
`;
}

otherSection.innerHTML += otherProjectDiv;



// display only MERN projects
mernButton.addEventListener('click', () => {
  mernSection.classList.remove("hide");
  jsSection.classList.add("hide");
  otherSection.classList.add("hide");
});

// display only Javascript projects

jsButton.addEventListener('click', () => {
  jsSection.classList.remove("hide");
  mernSection.classList.add("hide");
  otherSection.classList.add("hide");
});

// display only Other projects

otherButton.addEventListener('click', () => {
  otherSection.classList.remove("hide");
  jsSection.classList.add("hide");
  mernSection.classList.add("hide");
})




