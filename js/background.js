const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); 
bgImage.src = `img/${chosenImage}`; 
document.body.appendChild(bgImage);

function handleClick() {
  const randomButton = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${randomButton}`;
}

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

