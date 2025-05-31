const logo = document.getElementById("logo");
const header = document.querySelector(".header-bar");

let isRed = true;

logo.addEventListener("click", () => {
  if (isRed) {
    logo.src = "/Imágenes/Referencia pokemon/LogoB.png";
    header.style.backgroundImage = "url('/Imágenes/Referencia pokemon/TechoB.png')";
  } else {
    logo.src = "/Imágenes/Referencia pokemon/LogoR.png";
    header.style.backgroundImage = "url('/Imágenes/Referencia pokemon/TechoR.png')";
  }
  isRed = !isRed;
});
