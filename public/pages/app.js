const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts) {
  container.innerHTML = '';
  var isError = false;

  //Store column arrays that contain relevant posts
  let columnWrappers = {};

  //Create column item array and  add this to column wrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }
  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }
  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let column = document.createElement('div');
    column.classList.add('column');
    columnPosts.forEach((posts) => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      let image = document.createElement('img');
      image.src = posts.image;
      image.onload = () => {
        // Vous pouvez ajouter d'autres actions ici, comme afficher un message à l'utilisateur.
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        let title = document.createElement('h3');
        title.innerText = posts.title;

        overlay.appendChild(title);
        postDiv.append(image, overlay);
        column.appendChild(postDiv);
      };
      image.onerror = () => {
        // nothing
      }


    });
    container.appendChild(column);
  }
}

let previousScreenSize = innerWidth;

window.addEventListener('resize', () => {
  imageIndex = 0;
  if (innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (
    innerWidth >= 600 &&
    innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, posts);
  } else if (innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, posts);
  }
  previousScreenSize = innerWidth;
});

//Page Load
if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(4, posts);
}

VanillaTilt.init(document.querySelectorAll(".post"), {
  max: 5,
  speed: 50
});
