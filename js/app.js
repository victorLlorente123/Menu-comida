window.addEventListener('load', function() {
    let platos = [
        { id: 1,  nombre: "Lentejas con chorizo",    precio: 3,  imagen: "img/lentejas.jpeg",  TipoPlato: "primer plato"},
        { id: 2,  nombre: "Crema de calabaza",       precio: 2,  imagen: "img/calabaza.jpg",   TipoPlato: "primer plato"},
        { id: 3,  nombre: "Escarlope de pollo",      precio: 4,  imagen: "img/pollo.jpeg",      TipoPlato: "segundo plato"},
        { id: 4,  nombre: "Lubrina al horno",        precio: 5,  imagen: "img/lubina.jpg",    TipoPlato: "segundo plato"},
        { id: 5,  nombre: "Flan de huevo",           precio: 1,  imagen: "img/flan.jpeg",      TipoPlato: "postre"},
        { id: 6,  nombre: "Arroz con leche",         precio: 2,  imagen: "img/arroz.jpeg",     TipoPlato: "postre"}
    ];

    let tipos = ["primer plato", "segundo plato", "postre"];

    let colocarElementos = document.getElementById("colocarElementos");
    let checkbox1; // Declare in a higher scope
    let Boton; // Declare in a higher scope
    let resultado = document.createElement('div');

    // Filtrar platos por tipo
    tipos.forEach(tipo => {
        // Crear un <select> para cada tipo de plato
        let select = document.createElement('select');
        select.id = `select-${tipo.replace(" ", "-")}`;

        // Crear una opción por cada plato del tipo correspondiente
        platos.forEach(plato => {
            if (plato.TipoPlato === tipo) {
                let option = document.createElement('option');
                option.value = plato.id; // valor del option
                option.textContent = `${plato.nombre} (${plato.precio}€)`; // texto a mostrar
                select.appendChild(option);
                select.classList.add("selectClase");
            }
        });

        // Crear un <img> para mostrar la imagen del plato seleccionado
        let img = document.createElement('img');
        img.id = `img-${tipo.replace(" ", "-")}`;
        img.alt = "Plato seleccionado";
        img.src = "img/default.jpeg"; // Fixed typo

        // Añadir el evento para actualizar la imagen
        select.addEventListener('change', function() {
            let selectedId = parseInt(this.value);
            let selectedPlato = platos.find(plato => plato.id === selectedId);
            if (selectedPlato) {
                img.src = selectedPlato.imagen;
                img.style.display = "block"; // Mostrar la imagen
            } else {
                img.style.display = "none"; // Ocultar si no hay selección
            }
        });

        let contenedor = document.createElement('div');
        contenedor.classList.add("contenedor");
        contenedor.appendChild(select);
        contenedor.appendChild(img);
        colocarElementos.appendChild(contenedor);
    });

    let Descuento = document.createElement('div');
    Descuento.classList.add("Descuento");

    checkbox1 = document.createElement('input');
    checkbox1.type = 'checkbox';
    checkbox1.id = 'checkbox1';
    Descuento.appendChild(checkbox1);

    let Textocheckbox = document.createElement('div');
    Textocheckbox.innerHTML = "10% de descuento";
    Descuento.appendChild(Textocheckbox);

    colocarElementos.appendChild(Descuento);

    Boton = document.createElement('input');
    Boton.type = 'button';
    Boton.id = 'button';
    Boton.value = '¡A comer!';
    colocarElementos.appendChild(Boton);
    colocarElementos.appendChild(resultado); // Append the result div after the button

    // Event listener for the button click
    Boton.addEventListener('click', function() {
        let total = 0;
        tipos.forEach(tipo => {
            let select = document.getElementById(`select-${tipo.replace(" ", "-")}`);
            let selectedId = parseInt(select.value);
            let selectedPlato = platos.find(plato => plato.id === selectedId);
            if (selectedPlato) {
                total += selectedPlato.precio;
            }
        });

        // Apply discount if checkbox is checked
        if (checkbox1.checked) {
            total *= 0.9; // Apply a 10% discount
        }

        // Display total
        resultado.innerHTML = `Total: ${total.toFixed(2)}€`; // Display total price
    });
});





















/*
    for (let i = 0; i < fotos.length; i++) {
        // Crear un elemento <a> para el enlace
        let a = document.createElement('a');
        a.href = links[i];
        a.textContent = nombrelinks[i];


        // Crear un elemento <img> para la imagen
        let img = document.createElement('img');
        img.src = fotos[i];

        let contenedorImagen  = document.createElement('div');
        let contenedor  = document.createElement('div');
        // Agregar la imagen y el enlace al contenedor

        contenedor.appendChild(img);
        contenedor.appendChild(a);
        contenedor.classList.add("contenedor");



        colocarElementos.appendChild(contenedor);



        SelectedIndex,Array,getElementById
    }*/