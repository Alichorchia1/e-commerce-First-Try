//Variables
const URLJSON = "/apiProyecto.json"
const cards =document.querySelector('#cards')
const items =document.querySelector('#items')
const footer = document.querySelector('#footer')
const templateFooter = document.querySelector('#template-footer').content
const templateCarrito = document.querySelector('#template-carrito').content
const templateCard = document.querySelector('#template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}
catProduct = 0;
// Carga inicial
$(document).ready( Cargado = e => {
    $(`.menu__logo2`).click(function (){
        if(localStorage.getItem("visibilidad") == ("oculto")){
            mostrar()
          } else{
              ocultar()
          }
        })
        // Traigo el Json mediante una api creada por mi
    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
          const data = respuesta; 
            $(`.category_item`).click( function () {
                let catProduct = $(this).attr('category');
                console.log(catProduct)
                if(data.filter(data => data.Nombre == catProduct)){
                    $(`#cards`).html(``)
                    let Matching = data.filter(data => data.Nombre == catProduct)
                    Matching.forEach(item => {
                    templateCard.querySelector('h5').textContent = item.Nombre
                    templateCard.querySelector('#marca').textContent = item.Marca
                    templateCard.querySelector('b').textContent =  item.Precio
                    templateCard.querySelector(`img`).setAttribute(`src`, item.imagen)
                    templateCard.querySelector('button').dataset.id = item.id
                    const clone = templateCard.cloneNode(true)
                    fragment.appendChild(clone)
                })
                cards.appendChild(fragment)
                
                }
            })
        }
    });
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        mostrarResultados()
    }
});

//Traigo la api Json de los data
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let data = respuesta; 
      mostrardata(data)
     }
});

// Imprimo las card en el html
const mostrardata = (data) => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.Nombre
        templateCard.querySelector('#marca').textContent = item.Marca
        templateCard.querySelector('b').textContent =  item.Precio
        templateCard.querySelector(`img`).setAttribute(`src`, item.imagen)
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
//Agrego al carrito los elementos seleccionados
const addCarrito = e => {
    if (e.target.classList.contains('agregar-carrito')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

//Creo un array con los data seleccionados y aumentando su cantidad si esta repetido.
const setCarrito = item => {
   
    const producto = {
        Nombre: item.querySelector('h5').textContent,
        Precio: item.querySelector('b').textContent,
        id: item.querySelector('button').dataset.id,
        imagen : item.querySelector('img').getAttribute(`src` ,item.imagen),
        cantidad: 1
    }
  //Aumento la cantidad del producto
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    console.log(carrito)
    mostrarResultados()
}
// Mostramos los resultados del evento del boton comprar en el carrito
const mostrarResultados = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('img').setAttribute(`src` ,producto.imagen),
        templateCarrito.querySelectorAll('td')[0].textContent = producto.Nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.Precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.append(fragment)

    mostrarTotales()

    localStorage.setItem('carrito', JSON.stringify(carrito))
  
}
// Se suman las cantidades con los totales mostrandolas en su footer
const mostrarTotales = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Ningun producto seleccionado</th>
        `
        return
    }
    
    // Se suman las cantidades con los totales a travez 
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, Precio}) => acc + cantidad * Precio ,0)
 

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    //Guardo los elemntos en el clone
    const clone = templateFooter.cloneNode(true)
    //Imprimo los elementos en el fragment
    fragment.appendChild(clone)
    //Y en el footer es donde se imprimen
    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        mostrarResultados()
    })

}
//Aumentamos o disminuimos las cantidades del carrito
const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        mostrarResultados()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        mostrarResultados()
    }
    e.stopPropagation()
}
//Boton Responsive
function ocultar(){
$("#move-content").toggleClass('move-container-all');
$("#show-menu").toggleClass('show-lateral');
$("aside").hide();
localStorage.setItem("visibilidad", "oculto")
}
function mostrar(){
    $("#move-content").toggleClass('move-container-all');
    $("#show-menu").toggleClass('show-lateral');
    $("aside").show();
    localStorage.setItem("visibilidad", "visible")
}
//Eventos
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })
