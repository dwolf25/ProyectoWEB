
 
 
 export const formulario ={
    email:'',
    nombre_cliente:'',
    nombre_producto:'',
    fecha: ''  
}

const inputEmail = document.querySelector('#correoCliente')
const inputNombre = document.querySelector('#nombreCliente')
const inputFecha = document.querySelector('#fechaSolicitud')
const botonEnviar = document.querySelector('#boton_continuar')
const inputNombre_producto = document.querySelector('#nombre_producto');


//* Eventos 



if (inputEmail) inputEmail.addEventListener('input', leerDatos)
if (inputNombre) inputNombre.addEventListener('input', leerDatos)
if (inputNombre_producto) inputNombre_producto.addEventListener('input', leerDatos)

if (inputFecha) inputFecha.addEventListener('input', leerDatos)



// todo FUNCIONES

//* funcion para reiniciar datos del localstorage del formulario

function reiniciarFormulario(){
    Object.keys(formulario).forEach(key =>formulario [key] = '');
    localStorage.removeItem('formularioData');
}
//* funcion para limpiar unicamente los input se eliminar los datos
function limpiarInputs(){
    inputEmail.value = '';
    inputNombre.value = '';
    inputFecha.value = '';
    inputNombre_producto.value = '';
}

function leerDatos(e){
    formulario[e.target.name] = e.target.value.trim().toLowerCase();
    // guardar en el local storage
    localStorage.setItem('formularioData', JSON.stringify(formulario))
    
}

export function getformulario(){
    const storedFormulario = localStorage.getItem('formularioData');
    return storedFormulario ? JSON.parse(storedFormulario) : formulario;
}

//* Aqui tengo el evento que sucede cuando le doy click al boton enviar
if (botonEnviar) {
    botonEnviar.addEventListener('click', function(e) {
        if (e.target.dataset.info.includes('pagina1')) {

            //*guardar datos 
            const datosGuardados ={...formulario};

            limpiarInputs()
            
            //* Navegar a la siguiente pagina 
            window.location.href = 'pagina2.html';
        

        }
    });
}

//* iteradores

if(window.location.pathname.includes('Inicio.html')){
    reiniciarFormulario()
    console.log(formulario)
}


