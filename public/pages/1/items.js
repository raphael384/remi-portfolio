const posts = [];
const images = [
  '../../photos/pa1.jpg',
  '../../photos/pa3.jpg',
  '../../photos/pa4.jpg',
  '../../photos/pa5.jpg',
  '../../photos/pa6.jpg',
  '../../photos/pa7.jpg',
  '../../photos/pa8.jpg',
  '../../photos/pa9.jpg',
  '../../photos/pa10.jpg',
  '../../photos/pa11.jpg',
  '../../photos/pa12.jpg',
  '../../photos/pa13.jpg',
  '../../photos/pa14.jpg',
  '../../photos/pa15.jpg',
  '../../photos/pa16.jpg',
  '../../photos/pa17.jpg',
  '../../photos/pa18.jpg',
  '../../photos/pa19.jpg',
  '../../photos/pa21.jpg',
  '../../photos/pa22.jpg',

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
