export default function createCards(projectList, section) {
  let projectDiv = "";
  for (let i = 0; i < projectList.links.length; i++) {
  projectDiv += ` <section class="card">
  <div class="card-img-container">
  <a
  class="blog-link"
  href=${projectList.links[i]}
  target="_blank"
  >
  ${!projectList.images[i].endsWith('webm') ?
      `<img  src=${projectList.images[i]} alt=${projectList.names[i]}/>`
      : `<video  autoplay loop>
  <source src=${projectList.images[i]} type="video/webm">
  </video>`
    }
</a>
</div>
<div class="img-description">
<p class="project-name"><strong>${projectList.names[i]}</strong></p> 
  <p class="project-desc">
  ${projectList.tech[i]}
  </p>
  
</div>
<a href='${projectList.links[i]}'
  target="_blank"><button class='demo-btn'>
  ${projectList.links[i].includes("github.com") ? "Github Repo": "Demo"}
  <i class="fas fa-external-link-alt"></i></button></a>
</section>
`;
  }
  section.innerHTML += projectDiv;
}