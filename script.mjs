import experience from "./experience.min.mjs";
import mernProjectList from "./mernProject.min.mjs";
// import vanillaProjectsList from './vanillaProjects.min.mjs';
import otherProjectList from './otherProjects.min.mjs';
import createCards from './createCards.min.mjs';

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

//Experience

function addExperience() {
  let exp = '';
  for (let i = 0; i < experience.designation.length; i++) {
    let tasks =
      experience.tasks[i].map(task =>
        `<li>${task}</li>`
      )
    tasks = tasks.join('\n');
    exp += `<div class="timeline-container info">
    <div class="timeline-icon">
    <div>
    <img src=${experience.images[i]} alt='company-logo' max-height='100%' max-width='100%'/>
    </div>
    </div>
    <div class="timeline-body">
        <h4 class="timeline-title">
            <span class="badge">
                <span class="designation">${experience.designation[i]}, ${experience.company[i]}</span>
            </span>
        </h4>
        <ul class="tasks">${tasks}</ul>
        <p class="timeline-subtitle">${experience.timeline[i]}</p>
    </div>
</div>`
  }
  const timeline = document.getElementsByClassName('timeline')[0];
  timeline.innerHTML += exp;
}
addExperience();

// reveal right animation
var experiences = document.querySelectorAll('.timeline-container');
function revealRight() {
  let windowHeight = window.innerHeight;
  experiences.forEach(experience => {
    let experienceTop = experience.getBoundingClientRect().top;
    let diff = 50;
    if (experienceTop < windowHeight - diff) {
      experience.classList.add('after-timeline-animation');
    }
  })
}
window.addEventListener('scroll', revealRight);


// MERN projects
const mernButton = document.querySelector(".mern");
const mernSection = document.querySelector(".mern-section");
createCards(mernProjectList, mernSection);

// vanillaProjectDiv
// const jsButton = document.querySelector(".javascript");
// const jsSection = document.querySelector(".js-section");
// createCards(vanillaProjectsList, jsSection);

//   otherProjectDiv
const otherButton = document.querySelector(".other");
const otherSection = document.querySelector(".other-section");
createCards(otherProjectList, otherSection);



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

// jsButton.addEventListener('click', () => {
//   jsSection.style.display = 'flex';
//   jsButton.classList.add('selected');

//   mernSection.style.display = 'none';
//   otherSection.style.display = 'none';

//   mernButton.classList.remove('selected');
//   otherButton.classList.remove('selected');
// });

// display only Other projects

otherButton.addEventListener('click', () => {
  otherSection.style.display = 'flex';
  otherButton.classList.add('selected');

  // jsSection.style.display = 'none';
  mernSection.style.display = 'none';

  mernButton.classList.remove('selected');
  // jsButton.classList.remove('selected');
})

// reveal cards on scroll
var projectsSection = document.querySelectorAll('.projects')[0];
var cards = document.querySelectorAll('.card');

function revealUp() {
  let windowHeight = window.innerHeight;
  let projectsSectionTop = projectsSection.getBoundingClientRect().top;
  let diff = 100;
  if (projectsSectionTop < windowHeight - diff) {
    cards.forEach(card => {
      card.classList.add("after-card-animation");
    })
    window.removeEventListener('scroll', revealUp);
  }
}

window.addEventListener('scroll', revealUp);




