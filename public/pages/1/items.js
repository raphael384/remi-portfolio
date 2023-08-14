
// ici tu ajoute le chemin du fichier en copiant collant la derniere ligne (sans oublier de virgule) et en remplacant 
// le chiffre par celui que tu as ajouté dans le dossier des photos

const posts = [];
const images = [];


for (let index = 1; index < 50; index++) {
  images.push(`../../photos/pa${index}.jpg`)
  
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
