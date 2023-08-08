const posts = [];
const images = [
  '../../photos/m1.jpg',
  '../../photos/m2.jpg',
  '../../photos/m3.jpg',

];

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
