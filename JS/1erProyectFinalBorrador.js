//Varaibles
const templateCard = document.querySelector('.template-card').content
const fragment = document.createDocumentFragment()
const cards =document.querySelector('#cards')
const cards2 =document.querySelector('#cards2')

//Class con todos los productos
class Producto{
    constructor(Nombre, Marca, Modelo, Color, Tamaño, Precio, stock, imagen, id){
       this.Nombre = Nombre;
       this.Marca = Marca;
       this.Modelo = Modelo;
       this.Color = Color;
       this.Tamaño = Tamaño;
       this.Precio = parseFloat(Precio);
       this.stock = stock;
       this.imagen = imagen;
       this.id = id;
    }
}
//Array con todos los productos dentro
const productos = [];

// Todos los productos cargados
productos.push(new Producto("Tabla", `Woodo`, `BH 2017`, `Rosa y Negro`, `8,25`, "6500", false, "Png/RosayNe.jpg",1));
productos.push(new Producto("Tabla", `Woodo`, `BH 2021`, `Blanco y Negro`, `8,5`, "7000", true, "Png/NeyBla.jpg",2 ));
productos.push(new Producto("Tabla", `Woodo`, `BH 2021`, `Blanco y Negro`, `8,25`, "7000", true, "Png/NeyBla.jpg",3 ));
productos.push(new Producto("Tabla", `Woodo`, `BH 2021`, `Brujo`, `8,25`, "7000", true, "Png/Brujo.jpg",4 ));
productos.push(new Producto("Tabla", `Woodo`, `BH 2017`, `Negro y Rosa`, `8,25`, "6500", false, "Png/NeyRosa.jpg",5 ));
productos.push(new Producto("Tabla", `Woodo`, `BH 2020`, `Calavera`, `8,25`, "6000", false, "Png/Random.jpg",6 ));
productos.push(new Producto("Tabla", `Woodo`, `BH 2020`, `Diablo Sonriente`, `8`, "6000", false, "Png/Satatata.jpg",7 ));
productos.push(new Producto("Remera", `Captain Fin`, `Original`, `Rojo`, `L`, "1300", true, "Png/RemeCapt.jpg",8 ));
productos.push(new Producto("Remera", `Captain Fin`, `Original`, `Negro`, `L`, "1300", true, "Png/RemeCapt.jpg",9 ));
productos.push(new Producto("Remera", `Captain Fin`, `Original`, `Rojo`, `XL`, "1300", true, "Png/RemeCapt.jpg",10 ));
productos.push(new Producto("Remera", `Captain Fin`, `Original`, `Rojo`, `S`, "1300", false, "Png/RemeCapt.jpg",11 ));
productos.push(new Producto("Remera", `Captain Fin`, `Original`, `Rojo`, `M`, "1300", true, "Png/RemeCapt.jpg",12 ));
productos.push(new Producto("Zapatillas", `Nike`, `SkateBoarding(SB)`, `Negro y Negro`, `37`, "7800", false, "Png/Zapas.jpg",13 ));
productos.push(new Producto("Zapatillas", `Nike`, `SkateBoarding(SB)`, `Negro y Negro`, `42`, "7800", true, "Png/Zapas.jpg",14 ));
productos.push(new Producto("Zapatillas", `Nike`, `SkateBoarding(SB)`, `Negro y Negro`, `40`, "7800", false, "Png/Zapas.jpg",15 ));
productos.push(new Producto("Zapatillas", `Nike`, `SkateBoarding(SB)`, `Negro y Negro`, `45`, "7800", true, "Png/Zapas.jpg",16 ));
productos.push(new Producto("Zapatillas", `Nike`, `SkateBoarding(SB)`, `Negro y Negro`, `44`, "7800", true, "Png/Zapas.jpg",17 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Beige`, `L`, "6999", true, "Png/PantSkate.jpg",18 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Beige`, `XL`, "6999", false, "Png/PantSkate.jpg",19 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Beige`, `S`, "6999", true, "Png/PantSkate.jpg",20 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Beige`, `M`, "6999", false, "Png/PantSkate.jpg",21 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Negro`, `L`, "6999", true, "Png/PantSkate.jpg",22 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Negro`, `M`, "6999", false, "Png/PantSkate.jpg",23 ));
productos.push(new Producto("Pantalon", `Volcom`, `Jogger Frikin`, `Negro`, `XL`, "6999", true, "Png/PantSkate.jpg",24 ));

function Imprimir_Prod () {
    let TablaMatch = productos.filter(productos => productos.Nombre == "Tabla")
    TablaMatch.forEach(item => {
    templateCard.querySelector('h5').textContent = item.Nombre
    templateCard.querySelector('#marca').textContent = item.Marca
    templateCard.querySelector('b').textContent =  item.Precio
    templateCard.querySelector(`img`).setAttribute(`src`, item.imagen)
    templateCard.querySelector('button').dataset.id = item.id
    const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
    cards2.appendChild(fragment)
;}

// Al disminuirse el tamaño de la pagina, se le agrega funcionalidad al boton.
$(`.menu__logo2`).click(mostrar_menu);
function mostrar_menu(){

    $("#move-content").toggleClass('move-container-all');
    $("#show-menu").toggleClass('show-lateral');
}

// Guardo los productos
function saveLocal() {
    let aJson = JSON.stringify(productos)
    localStorage.setItem("productos", aJson)
}
saveLocal()
Imprimir_Prod()
