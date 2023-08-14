const posts = [];
const images = [];

for (let index = 1; index < 50; index++) {
  images.push(`../../photos/p${index}.jpg`)
  
}

let imageIndex = 0;

for (let i = 1; i <= images.length; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
