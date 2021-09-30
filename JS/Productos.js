const deJson = localStorage.getItem("productos");
const Productos = JSON.parse(deJson);

let cantidad = 0;
let Tabla = "Tabla";
let Pant = "Pantalon";
let Reme = "Remera";
let Zapas = "Zapatillas"; 

class Carrito{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

let categoria = [];
let carrito = [];

function mostrarProd() {
Productos.forEach((element) => {
    $(`#cardsId`).append(`
        <div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img src=${element.imagen} class="card-img-top">
                <br>
                <h5 class="card-title"><b>${element.Nombre}</b></h5>
                <p class="card-text"><b>${element.Marca}</b></p>
                <p class="card-text"><b>${element.Modelo}</b></p>
                <p class="card-text colorRed"><b>$ ${element.Precio}</b></p>
                <button class="btn btn-primary agregar-carrito" id="${element.id}">Comprar</button>
            </div>
        </div>
    </div>`
)
})
}
//if(carrito.hasOwnProperty(e.producto.id)){
  //  e.cantidad = carrito.cantidad[e.producto.id]+ 1;

function CrearNmbr1(Tabla, Pant, Reme, Zapas) {
    $(`#cardsId`).html(` `);
    let categoriaActual = `Tabla`
    let categoria = Productos.filter(Producto => Producto.Nombre == Pant )
    categoria.forEach(element => {
        $(`#cardsId`).append( `
        <div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img src=${element.imagen} class="card-img-top">
                <br>
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text">${element.Marca}</p>
                <p class="card-text">${element.Modelo}</p>
                <p class="card-text colorRed">$ ${element.Precio}</p>
                <a href="#" class="btn btn-primary" id="btnComp">Comprar</a>
            </div>
        </div>
    </div>`
    )});
}
function CrearNmbr2(){
    $(`#cardsId`).html(` `);
    let categoriaActual = `Zapatillas`;
    let categoria = Productos.filter(Producto => Producto.Nombre == categoriaActual)  
    categoria.forEach(element => {
        $(`#cardsId`).prepend( `
        <div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img src=${element.imagen} class="card-img-top">
                <br>
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text">${element.Marca}</p>
                <p class="card-text">${element.Modelo}</p>
                <p class="card-text colorRed">$ ${element.Precio}</p>
                <a href="#" class="btn btn-primary" id="btnComp">Comprar</a>
            </div>
        </div>
    </div>`
    )}); 
}
function CrearNmbr3(){
    $(`#cardsId`).html(` `);
    let categoriaActual = `Remera`;
    let categoria = Productos.filter(Producto => Producto.Nombre == categoriaActual)  
    categoria.forEach(element => {
        $(`#cardsId`).prepend( `
        <div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img src=${element.imagen} class="card-img-top">
                <br>
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text">${element.Marca}</p>
                <p class="card-text">${element.Modelo}</p>
                <p class="card-text colorRed">$ ${element.Precio}</p>
                <a href="#" class="btn btn-primary" id="btnComp">Comprar</a>
            </div>
        </div>
    </div>`
    )});
}
function CrearNmbr4(){
    $(`#cardsId`).html(` `);
    let categoriaActual = `Pantalon`;
    let categoria = Productos.filter(Producto => Producto.Nombre == categoriaActual)  
    categoria.forEach(element => {
        $(`#cardsId`).prepend( `
        <div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img src=${element.imagen} class="card-img-top">
                <br>
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text">${element.Marca}</p>
                <p class="card-text">${element.Modelo}</p>
                <p class="card-text colorRed">$ ${element.Precio}</p>
                <a href="#" class="btn btn-primary" id="btnComp">Comprar</a>
            </div>
        </div>
    </div>`
    )});
}
$(`.menu__logo2`).click(mostrar_menu);
function mostrar_menu(){

    $("#move-content").toggleClass('move-container-all');
    $("#show-menu").toggleClass('show-lateral');
}

mostrarProd();

