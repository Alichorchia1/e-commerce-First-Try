class Usuario {
    constructor(nombre, apellido, email, telefono, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.id = id;
    }
}
//Array
usuarios = [];

function crearUsu(e) {
    e.preventDefault()
    //Variables de los datos ingresados
    const nombre = $(`#nombre1`).val()
    const apellido = $(`#apellido2`).val()
    const email = $(`#email3`).val()
    const telefono = $("#telefono4").val()
    let paso1 = JSON.parse(localStorage.getItem("usuarios"))
    //logica condicional para crear el usuario y guardar sus datos en un Json
    if (localStorage.getItem("usuarios") != null) {
        let index = paso1.length + 1
        usuarios.push(new Usuario(nombre, apellido, email, telefono, index))
        localStorage.setItem("usuarios", JSON.stringify(paso1))
        $(`.aca`).append(`<p style="display: none" >Buenas ${nombre} ${apellido} tu email es ${email} y tu telefono es: ${telefono} </p>`)
    } else {
        localStorage.clear()
        let index = 1
        usuarios.push(new Usuario(nombre, apellido, email, telefono, index))
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }
}

function Imprimir(e){
    e.preventDefault()
    $(`p`).show();
          
}
//Eventos
$(`.menu__logo2`).click(mostrar_menu);
function mostrar_menu(){

    $("#move-content").toggleClass('move-container-all');
    $("#show-menu").toggleClass('show-lateral');
}

$(`#guardar`).click(crearUsu);
$(`#imprimir`).click(Imprimir)

console.log(usuarios)
