console.log("connecté");
//=> Lorsque je clique sur l'icone l'element nav-list-mobile apparait
// je séléctionne et stocke les éléments nécessaire
const icon = document.querySelector(".fa-bars");

const list = document.querySelector(".nav-list-mobile");
//2 je les souymets à l'évènement
icon.addEventListener("click", function() {
  //instructions
  console.log("coucou");
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
})
