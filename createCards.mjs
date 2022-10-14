export default function createCards(projectList, section) {
  let projectDiv = "";
  for (let i = 0; i < projectList.demoLinks.length; i++) {
    projectDiv += ` <section class="card">
  <div class="card-img-container">
  <a
  class="blog-link"
  href=${projectList.demoLinks[i]}
  target="_blank"
  >
  ${!projectList.images[i].endsWith('webm') ?
        `<img class='skeleton' src=${projectList.images[i]} alt=${projectList.names[i]}/>`
        : `<video class='skeleton' autoplay loop>
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

  <div class='card-button-container'>
  <button class='card-button'>
  <a href='${projectList.githubLinks[i]}' target="_blank" class='demo-btn'>
  Code
  </a>
</button>  
<button class='card-button'>
<a href='${projectList.demoLinks[i]}'target="_blank" class='demo-btn'>
Live
</a>
</button>
</div>

</section>
`;
  }
  section.innerHTML += projectDiv;
}
// <i class="fa fa-github-square" aria-hidden="true"></i>
// <i class="fas fa-external-link-alt" aria-hidden="true"></i>