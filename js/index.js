// Colocá las declaraciones acá:

const listaDeTareas = [];
const inputTarea = document.querySelector("#task");
const inputPrioridad = document.querySelector("#prioridad");
const ul = document.querySelector("#lista-de-tareas");

// Declaramos el class Tarea:

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    agregarTarea(objetoTarea) {
        listaDeTareas.push(objetoTarea);
    }
}

const mostrarLista = () => {
    ul.innerHTML = "";
    inputTarea.value = "";
    inputPrioridad.value = document.querySelector("#selectorPorDefecto").textContent;
    listaDeTareas.forEach((element, index) => (
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" id="${index}"> Tarea: ${element.nombre[0].toUpperCase() + element.nombre.substring(1)} - Prioridad: ${element.prioridad} <i class="far fa-times-circle hov" onclick="eliminar(event)"></i></li>`
    ));
}

const boton = document.querySelector("#agregar");

const todoList = () => {
    if (inputTarea.value !== "" && inputPrioridad.value !== document.querySelector("#selectorPorDefecto").textContent) {
        const tarea = new Tarea(inputTarea.value, inputPrioridad.value);
        tarea.agregarTarea(tarea);
        mostrarLista();
    } else { 
        ul.innerHTML += `<li class="list-group-item fw-bold"> ¡Usted no ha ingresado correctamente algún dato, inténtelo de nuevo! </li>`;
    };
}

boton.addEventListener("click", todoList);

const botonEnter = function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        todoList();
    }
}

inputTarea.addEventListener("keypress", botonEnter);
inputPrioridad.addEventListener("keypress", botonEnter);

const eliminar = (e) => {
    const id = e.target.parentElement.id;
    listaDeTareas.splice(id, 1);
    mostrarLista();
}