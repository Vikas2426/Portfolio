export default function createCards(projectList, section) {
  let projectDiv = "";
  for (let i = 0; i < projectList.demoLinks.length; i++) {
    projectDiv += ` <div class="card">
    ${!projectList.images[i].endsWith('webm') ?
        `<img class='skeleton' src=${projectList.images[i]} alt=${projectList.names[i]}/>`
        : `<video class='skeleton' autoplay loop>
    <source src=${projectList.images[i]} type="video/webm">
    </video>`
      }

    <div class="card-text">
    <h2>${projectList.names[i]}</h2> 
    <p>${projectList.tech[i]}</p>
      <div class="card-btn-container">
        <a href='${projectList.githubLinks[i]}' target="_blank">
          <i class="fa fa-github-square" aria-hidden="true"></i>
          Code
        </a>
        <a href='${projectList.demoLinks[i]}'target="_blank">
          Live
          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
`;
  }
  section.innerHTML += projectDiv;
}