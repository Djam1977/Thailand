console.log("connecté");
//=> Lorsque je clique sur l'icone l'element nav-list-mobile apparait
// je séléctionne et stocke les éléments nécessaire
const icon = document.querySelector(".fa-bars");

const list = document.querySelector(".nav-list-mobile");
//2 je les soummets à l'évènement
icon.addEventListener("click", function () {
  //instructions

  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});

// function changeImage(){
let displayImageVille2 = document.querySelector(".ville2");

let srcOrigin = displayImageVille2.src;

displayImageVille2.addEventListener("click", function changeImageVille2() {
  if (displayImageVille2.src === srcOrigin) {
    displayImageVille2.src = "bangkok3.jpg";
  } else {
    displayImageVille2.src = srcOrigin;
  }
});
let displayImageBuffle5 = document.querySelector(".buffle5");

let srcOrigin1 = displayImageBuffle5.src;

displayImageBuffle5.addEventListener("click", function changeImageBuffle5() {
  if (displayImageBuffle5.src === srcOrigin1) {
    displayImageBuffle5.src = "foret1.jpg";
  } else {
    displayImageBuffle5.src = srcOrigin1;
  }
});
let displayImageBeach2 = document.querySelector(".beach2");

let srcOrigin2 = displayImageBeach2.src;

displayImageBeach2.addEventListener("click", function changeImageBeach2() {
  if (displayImageBeach2.src === srcOrigin2) {
    displayImageBeach2.src = "plagef1.jpg";
  } else {
    displayImageBeach2.src = srcOrigin2;
  }
});
