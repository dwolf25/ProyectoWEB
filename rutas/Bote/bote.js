// Función que agrega los contenedores de opción de color
function agregarOpcionesDeColor(colores) {
    const contenedorPrueba = document.getElementById("contenedor_colores");
    
    // Limpiar contenido previo
    contenedorPrueba.innerHTML = '';
    
    // Iterar a través del array de colores
    colores.forEach((color, index) => {
      // Crear un contenedor para cada opción de color
      const contenedorOpcion = document.createElement("div");
      contenedorOpcion.classList.add("contenedor_opcion");
      
      // Crear un input de tipo radio
      const inputRadio = document.createElement("input");
      inputRadio.type = "radio";
      inputRadio.id = `colorOpcion${index + 1}`;
      inputRadio.name = "color";
      inputRadio.value = color;
      inputRadio.classList.add("botones_invisibles");
      
      // Crear el label para el input de radio
      const label = document.createElement("label");
      label.setAttribute("for", inputRadio.id);
      label.classList.add("contenedor_seleccion");
      label.textContent = color;
      
      // Añadir el input y el label al contenedor de opción
      contenedorOpcion.appendChild(inputRadio);
      contenedorOpcion.appendChild(label);
      
      // Añadir el contenedor de opción al contenedor principal
      contenedorPrueba.appendChild(contenedorOpcion);
    });
  }
  
  // Ejemplo de uso: llamar a la función con un array de colores
  const colores = ["Blanco", "Negro", "Ambar", "Antrancita","Transparente","Azul","Verde oscuro"];
  agregarOpcionesDeColor(colores);
  










// Función que agrega los contenedores de opción de tamaño
function agregarOpcionesDeTamaño(tamaños) {
  const contenedorTamañoBote = document.getElementById("contenedor_tamaño_bote");
  
  // Limpiar contenido previo
  contenedorTamañoBote.innerHTML = '';
  
  // Iterar a través del array de tamaños
  tamaños.forEach((tamaño, index) => {
    // Crear un contenedor para cada opción de tamaño
    const contenedorOpcion = document.createElement("div");
    contenedorOpcion.classList.add("contenedor_opcion");
    
    // Crear un input de tipo radio
    const inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    inputRadio.id = `tamañoOpcion${index + 1}`;
    inputRadio.name = "tamaño";
    inputRadio.value = tamaño;
    inputRadio.classList.add("botones_invisibles");
    
    // Crear el label para el input de radio
    const label = document.createElement("label");
    label.setAttribute("for", inputRadio.id);
    label.classList.add("contenedor_seleccion");
    label.textContent = tamaño;
    
    // Añadir el input y el label al contenedor de opción
    contenedorOpcion.appendChild(inputRadio);
    contenedorOpcion.appendChild(label);
    
    // Añadir el contenedor de opción al contenedor principal
    contenedorTamañoBote.appendChild(contenedorOpcion);
  });
}

// Ejemplo de uso: llamar a la función con un array de tamaños
const tamañosBote = ["55", "75", "100", "150", "200","250","300","400","500"];
agregarOpcionesDeTamaño(tamañosBote);
