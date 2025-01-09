const input = document.getElementById('ingresarTarea');
const btn = document.querySelector('button');
const listaTareas = document.getElementById('listaTareas');

// funcion para agregar una tarea 

function agregarTarea(){
    
    if( input.value){
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

    //texto ingreado por el usuario de la nueva tarea
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        // crear y agregar contenedor de iconos 
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //iconos 
        let completar = document.createElement('i');
            completar.classList.add('bi', 'bi-check-circle-fill', 'iconoCompletar')
            completar.addEventListener('click', completarTarea);

        // icono para eliminar 
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'iconoEliminar')
        eliminar.addEventListener('click',eliminarTarea);

        iconos.append(completar, eliminar);
        //agregar la tarea a la lista 
        listaTareas.appendChild(tareaNueva);

        //limpia el espacio 
        input.value = '';
    } else{
        alert('porfavor ingresa una tarea ')
    }
}

//funcion para completar la tarea 
function completarTarea(event){
    let tarea = event.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}


//eliminar una tarea 
function eliminarTarea (event){
    let tarea = event.target.parentNode.parentNode;
    tarea.remove();
}



input.addEventListener('keydown', (event)=>{
    if( event.key === 'Enter'){
        event.preventDefault();
        agregarTarea();
    }
});
btn.addEventListener('click', agregarTarea);