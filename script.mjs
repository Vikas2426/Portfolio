import experience from "./experience.mjs";
import mernProjectList from "./mernProject.mjs";
import vanillaProjectsList from './vanillaProjects.mjs';
import otherProjectList from './otherProjects.mjs';
import createCards from './createCards.mjs';

// reveal experience Description on scroll
window.addEventListener('scroll', revealIn);
function revealIn() {
  var experienceDesc = document.querySelector('#experience-desc');
    let windowHeight = window.innerHeight;
    let top = experienceDesc.getBoundingClientRect().top;
    let point = 50;

    if (top < windowHeight - point) {
      experienceDesc.classList.add('appear');
    }
    else {
      experienceDesc.classList.remove('appear');

    }
  
}

// reveal cards on scroll
window.addEventListener('scroll', revealUp);
function revealUp() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let windowHeight = window.innerHeight;
    let cardTop = card.getBoundingClientRect().top;
    let cardPoint = 50;

    if (cardTop < windowHeight - cardPoint) {
      card.classList.add('active');
    }
    else {
      card.classList.remove('active');
    }
  })
}


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

function addExperience(curr) {
  const counter = document.querySelector('#job-count');
  counter.innerText = `${curr + 1} / ${experience.designation.length}`;
  const designation = document.querySelector('#designation');
  designation.innerText = experience.designation[curr];
  const company = document.querySelector('#company');
  company.innerText = experience.company[curr];
  const timeline = document.querySelector('#timeline');
  timeline.innerHTML = `<i>${experience.timeline[curr]}</i>`;
  const tasks = document.querySelector('#tasks');
  tasks.innerHTML = ''
  experience.tasks[curr].forEach(task =>
    tasks.innerHTML += `<li>${task}</li>`
  );
}
window.addEventListener('load', addExperience(0))

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
var curr = 0;
next.addEventListener('click', nextExp);
prev.addEventListener('click', prevExp);

function nextExp() {
  if (curr < experience.designation.length - 1) {
    curr++;
  }
  else {
    curr = 0;
  }
  addExperience(curr);
}

function prevExp() {
  if (curr > 0) {
    curr--;
  }
  else {
    curr = experience.designation.length - 1;
  }
  addExperience(curr);
}

// MERN projects
const mernButton = document.querySelector(".mern");
const mernSection = document.querySelector(".mern-section");
createCards(mernProjectList, mernSection);

// vanillaProjectDiv
const jsButton = document.querySelector(".javascript");
const jsSection = document.querySelector(".js-section");
createCards(vanillaProjectsList, jsSection);

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



