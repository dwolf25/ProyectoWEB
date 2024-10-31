const Bote = document.querySelector("#Bote");

if(Bote) Bote.addEventListener('click', navegar);

function navegar(e){
    if(e.target.dataset.info.includes('Bote'))
        window.location.href = "../Bote/Bote.html"
}