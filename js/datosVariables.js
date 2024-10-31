
import {getformulario} from './triggers.js';
//TODO VARIABLES
const softgel = document.querySelector('#softgel')
const capsula = document.querySelector('#capsula')
const viales = document.querySelector('#viales')
const comprimido = document.querySelector('#comprimido')



//TODO EVENTOS
if(comprimido) comprimido.addEventListener('click', demostracion)
if(capsula) capsula.addEventListener('click', demostracion)
if(softgel) softgel.addEventListener('click', demostracion)
if(viales) viales.addEventListener('click', demostracion)


    //* aqui tenemos la función que se ejecuta cuando se recuper los datos del formulario de triggers.js desde el localstorage.
    function mostrarFormulario(){
        const formularioGuardado = getformulario();
        console.log('Formulario recuperado ',formularioGuardado)
    }
    mostrarFormulario()


//* aqui solo prueblo si me saca la informacion ingresada en el data-info del elemento a:link del html asi identifico si seleccionan un producto especifico 
//* tambien podría hacerlo con un id pero para este caso es para practicar
function demostracion(e){
    if(e.target.dataset.info.includes('softgel')){
        
    }
    if(e.target.dataset.info.includes('capsula')){
        console.log('hola')
        window.location.href = "../Cantidad_envase/cantidad_envase.html";
    }
    if(e.target.dataset.info.includes('comprimido')){
       
        
    }
    if(e.target.dataset.info.includes('vial')){
        
    }
    
}

// function actualizarFormulario(){
//    const  formularioActualizado = getformulario()
//     console.log('Formulario actualizado',formularioActualizado)
// }

// document.addEventListener('input', actualizarFormulario)




