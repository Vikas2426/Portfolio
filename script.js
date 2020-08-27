var myProjects = {
  names: [
    "Resume",
    "Google Keep Clone",
    "ToDo App FullStack",
    "Portfolio",
    "Expense App",
    "Click Music",
    "Data Scientist @ IXXO",
    "ML Projects",
    "Dinosaur Game Player",
    "Gradient Generator",
  ],

  links: [
    "https://vikas-choubey-resume.netlify.app/",
    "https://vikas2426.github.io/GoogleKeepClone-React-App/",
    "https://vikas2426.github.io/ToDo/",
    "https://vikasresume.netlify.com",
    "https://vikasexpense.netlify.com",
    "https://clickmusic.netlify.com/",
    "https://github.com/Vikas2426/Internship",
    "https://github.com/Vikas2426/Machine-Learning-Projects",
    "https://github.com/Vikas2426/Python-Programs/blob/master/DinosaurBot.ipynb",
    "https://gradientgenerator.netlify.com",
  ],

  images: [
    "images/resume.jpg",
    "images/keep.jpg",
    "images/todoApp.jpg",
    "images/portfolio",
    "images/expense",
    "images/clickmusic",
    "images/ixxo.jpeg",
    "images/ml.jpg",
    "images/dino.jpg",
    "images/background.png",
  ],

  tech: [
    "Resume.io",
    "REACT, CSS",
    "MongoDB, ExpressJs, REACT, Node (MERN)",
    "HTML5, CSS, Javascript and Bootstrap.",
    "HTML5, CSS, Javascript and Bootstrap.",
    "HTML5, CSS and Javascript.",
    "Internship project. Logistic Regression",
    "Machine learning projects. Github Repository.",
    "Game bot to play the google offline dinosaur game.",
    "Generate linear gradients",
  ],
};
const copy = document.querySelector("#copy-icon");
const emailId = document.querySelector("#email-id");
const projectContainer = document.querySelector(".projects");

copy.addEventListener("click", () => {
  emailId.select();
  document.execCommand("copy");
});
var projectDiv = "";

for (let i = 0; i < myProjects.links.length; i++) {
  projectDiv += ` <div class="card">
    <a href = ${myProjects.links[i]} target="_blank">
    <img class="project-image" src= '${myProjects.images[i]}' width="100%" height="50%" />
  <h4 class="project-name">${myProjects.names[i]}</h4>
  <div class="caption">
  <p class="project-caption">${myProjects.tech[i]}</p></div></a>
</div> 
  `;
}

projectContainer.innerHTML = projectDiv;
