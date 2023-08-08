const posts = [];
const images = [
  '../../photos/p1.jpg',
  '../../photos/p2.jpg',
  '../../photos/p3.jpg',
  '../../photos/p4.jpg',
  '../../photos/p5.jpg',
  '../../photos/p6.jpg',
  '../../photos/p7.jpg',
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
