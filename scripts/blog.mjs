const addBlogList = (container, blogList) => {
    let list = '';
    for (let idx = 0; idx < blogList.link.length; idx++) {
        list += `<a href=${blogList.link[idx]} target="_blank">
    <div class="blog">
    ${(idx + 1) + "." + " " + blogList.title[idx]} 
    <i> ${blogList.description[idx]}...</i>
    </div >
  </a >
    `}
    container.innerHTML = list;
}

export default addBlogList;