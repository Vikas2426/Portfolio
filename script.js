var mernProjectList = {
  names: [
    "Resume",
    "Amazon Clone",
    "Google Keep Clone",
    "ToDo App FullStack"
  ],

  links: [
    "https://vikas-choubey-resume.netlify.app/",
    "https://vikas2426.github.io/amazon-clone/",
    "https://vikas2426.github.io/GoogleKeepClone-React-App/",
    "https://vikas2426.github.io/ToDo/"
  ],

  images: [
    "images/resume-min.jpg",
    "images/amazon-clone-min.jpg",
    "images/keep-min.jpg",
    "images/todoApp-min.jpg",
  ],

  tech: [
    "Resume.io",
    "Work in progress !",
    "ReactJS, CSS",
    "MongoDB, ExpressJs, REACT, Node",
  ],
};
var vanillaProjectList = {
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
const copy = document.querySelector("#copy-icon");
const emailId = document.querySelector("#email-id");
const mernProjectContainer = document.querySelector(".mern-projects");
const vanillaProjectContainer = document.querySelector(".vanilla-projects");
const otherProjectContainer = document.querySelector(".other-projects");
const footer = document.querySelector("#footer");


copy.addEventListener("click", () => {
  emailId.select();
  document.execCommand("copy");
});
var mernProjectDiv = "";
var vanillaProjectDiv = "";
var otherProjectDiv = "";

for (let i = 0; i < mernProjectList.links.length; i++) {
  mernProjectDiv += `       
  <div class="card">  
    <a href = ${mernProjectList.links[i]} target="_blank">    
      <div class="project-image-container">
        <img class="project-image" src= '${mernProjectList.images[i]}' width="100%" height="50%" />  
      </div>
      <div class="project-info-container">
        <h4 class="project-name">${mernProjectList.names[i]}</h4>  
        <p class="project-caption">${mernProjectList.tech[i]}</p>
        <button class="visit-link">VISIT</button>
      </div>
    </a>   
  </div> `;
}

mernProjectContainer.innerHTML = mernProjectDiv;

for (let i = 0; i < vanillaProjectList.links.length; i++) {
  vanillaProjectDiv += `         
  <div class="card">
    <a href = ${vanillaProjectList.links[i]} target="_blank">
    <div class="project-image-container">
        <img class="project-image" src= '${vanillaProjectList.images[i]}' width="100%" height="50%" />  
      </div>
      <div class="project-info-container">
        <h4 class="project-name">${vanillaProjectList.names[i]}</h4>  
        <p class="project-caption">${vanillaProjectList.tech[i]}</p>
        <button class="visit-link">VISIT</button>
      </div>
    </a>
  </div> `;
}

vanillaProjectContainer.innerHTML = vanillaProjectDiv;

for (let i = 0; i < otherProjectList.links.length; i++) {
  otherProjectDiv += `         
  <div class="card">
    <a href = ${otherProjectList.links[i]} target="_blank">
    <div class="project-image-container">
        <img class="project-image" src= '${otherProjectList.images[i]}' width="100%" height="50%" />  
      </div>
      <div class="project-info-container">
        <h4 class="project-name">${otherProjectList.names[i]}</h4>  
        <p class="project-caption">${otherProjectList.tech[i]}</p>
        <button class="visit-link">GITHUB</button>
      </div>
    </a>
</div> `;
}

otherProjectContainer.innerHTML = otherProjectDiv;

const year = new Date().getFullYear();
footer.innerHTML = `<p></p>Copyright © Vikas Choubey, ${year}`;