const images = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img"); //html 구성 만들기

bgImage.src = `img/${chosenImage}`;
bgImage.id = 'bgImg';

//appendChild body에 추가
document.body.appendChild(bgImage); 