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
    "images/keep.gif",
    "images/todo.gif",
  ],

  tech: [

    "Work in progress ! Clone of Amazon e-commerce website using ReactJS and Firebase Auth",
    "Clone of Google's Note taking app 'Google Keep' using ReactJS",
    "Full-stack to-do list web app using MongoDB, ExpressJs, ReactJS and Node",
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

    "/images/joker.gif",
    "images/expense-min.jpeg",
    "images/music.gif",
    "images/gradient.gif",
  ],

  tech: [

    "A joke generating app which displays joke fetched from an API. Used HTML5, CSS, Javascript and an API",
    "A expense management web app using HTML5, CSS, Javascript and Bootstrap. Takes in amount spent and item/service bought.",
    "Music generator web app. Plays audio on listening to click to different coloured scales. Used HTML5, CSS and Javascript.",
    "Linear gradient generator web app. Let you choose colours for the gradient and copy the code with just one click. Used HTML5, CSS and Javascript",
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
    "Internship project. Developed a program which classifies text into various categories such as email, code, web content etc. Trained a logistic regression model for text classification and used 'Tesseract OCR' for optical charater recognition.",
    "Machine learning projects. All my other machine learning project code are in my github.",
    "Game bot to play the google offline dinosaur game.Used python library 'PIL' for real time image grabbing and optimisation and 'PYAUTOGUI' for simulating button clicks.",

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
  mernButton.classList.add('selected');
  jsButton.classList.remove('selected');
  otherButton.classList.remove('selected');
});

// display only Javascript projects

jsButton.addEventListener('click', () => {
  jsSection.classList.remove("hide");
  mernSection.classList.add("hide");
  otherSection.classList.add("hide");
  mernButton.classList.remove('selected');
  jsButton.classList.add('selected');
  otherButton.classList.remove('selected');
});

// display only Other projects

otherButton.addEventListener('click', () => {
  otherSection.classList.remove("hide");
  jsSection.classList.add("hide");
  mernSection.classList.add("hide");
  mernButton.classList.remove('selected');
  jsButton.classList.remove('selected');
  otherButton.classList.add('selected');
})




