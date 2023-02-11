
function crear() {
    fetch('https://randomuser.me/api/')
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
            mostrarImagen(data.results[0].picture.large);
            nombreYapellido(data.results[0].name.first, data.results[0].name.last,data.results[0].name.title);
            let array = [
                data.results[0].phone, data.results[0].email, data.results[0].location.state + ',' + data.results[0].location.country, data.results[0].cell
            ];
            iconos(array);
            progreso();


        });
}
crear();

function mostrarImagen(variable) {
    var img = document.querySelector('img');
    img.setAttribute('src', variable);
}

function nombreYapellido(nombre, apellido,titulo) {
    document.querySelector('#nombre').innerHTML = nombre;
    document.querySelector('#apellido').innerHTML = apellido;
    document.querySelector('#titulo').innerHTML = titulo;
}

function iconos(array) {
    let contacto = document.querySelector('.contacto');
    let icono = document.querySelectorAll('#icono');
    let cont = 0;

    for (const item in array) {
        console.log(array[item]);
        icono[cont].addEventListener('mouseenter', function () {
            contacto.innerHTML = array[item];
        })
        cont++;
    }
}

function progreso() {
    let progreso = document.querySelectorAll('#progreso');
    let array = [75, 80, 50, 80, 40];
    let cont = 0;

    for (const item of array) {
        progreso[cont].setAttribute('value', item);
        progreso[cont].setAttribute('max', 100);
        cont++;
    }
}


