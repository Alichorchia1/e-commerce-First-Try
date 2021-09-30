//Variables
const items =document.querySelector('#items')
const footer = document.querySelector('#footer')
const templateFooter = document.querySelector('#template-footer').content
const templateCarrito = document.querySelector('#template-carrito').content
const fragment = document.createDocumentFragment()
catProduct = 0;
let carrito = JSON.parse(localStorage.getItem('carrito'));
console.log(carrito);

// Eventos ready
$($).ready( Cargado = e => {
    $(`.menu__logo2`).click(mostrar_menu);
});

items.addEventListener('click', e => { btnAumentarDisminuir(e) })
// Muestro los resultados seleccionados 
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
    
    // Se suman las cantidades con los totales
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

// Al disminuirse el tamaño de la pagina, se le agrega funcionalidad al boton.
function mostrar_menu(){
        $("#move-content").toggleClass('move-container-all');
        $("#show-menu").toggleClass('show-lateral');
    };
mostrarResultados()