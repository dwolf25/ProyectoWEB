//TODO VARIABLES
const softgel = document.querySelector("#softgel");
const capsula = document.querySelector("#capsula");
const viales = document.querySelector("#viales");
const comprimido = document.querySelector("#comprimido");

//TODO EVENTOS
if (comprimido) comprimido.addEventListener("click", demostracion);
if (capsula) capsula.addEventListener("click", demostracion);
if (softgel) softgel.addEventListener("click", demostracion);
if (viales) viales.addEventListener("click", demostracion);



//TODO FUNCIONES

function demostracion(e) {
  if (e.target.dataset.info.includes("softgel")) {
  }
  if (e.target.dataset.info.includes("capsula")) {
    console.log("hola");
    window.location.href = "../Formato_productos/formatoproducto.html";
  }
  if (e.target.dataset.info.includes("comprimido")) {
  }
  if (e.target.dataset.info.includes("vial")) {
  }
}
