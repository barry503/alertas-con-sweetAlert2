// desarrollado por Barry503

const $btnSimple = document.querySelector("#btnSimple"),
    $btnBotonPersonalizado = document.querySelector("#btnBotonPersonalizado"),
    $btnTituloYTexto = document.querySelector("#btnTituloYTexto"),
    $btnHtmlPersonalizado = document.querySelector("#btnHtmlPersonalizado"),
    $btnConfirm = document.querySelector("#btnConfirm"),
    $btnInput = document.querySelector("#btnInput");


//Escuchar el evento click del btn
$btnSimple.addEventListener("click", () => {
    Swal.fire({
        title:"Ventana Desplegada.",
        icon: 'success'
    })
        .then(() => {
            // Aquí la alerta se ha cerrado
            console.log("Alerta Minimizada");
        });
});




//Escuchar el evento click del btn
$btnBotonPersonalizado.addEventListener("click", () => {
    Swal.fire({
        icon: 'info',
        title: "Ventana Personalizada",
        confirmButtonText: "Confirmado",
    });
});




//Escuchar el evento click del btn
$btnTituloYTexto.addEventListener("click", () => {
    Swal.fire({
        icon: 'warning',
        title: "Ventana Con texto",
        text: "texto agregado ademas del titulo",
        confirmButtonText: "Boton Aceptar",
    });
});




//Escuchar el evento click del btn
$btnHtmlPersonalizado.addEventListener("click", () => {
    Swal.fire({
        icon:'success',
        html: `<h1>Ventana con html </h1>
    <p>Etiqueta p  <strong>Etiqueta strong</strong></p>
    <br>
    <a href="#">Etiqueta a</a>
    `,
    });
});

//Escuchar el evento click del btn
$btnConfirm.addEventListener("click", () => {

    Swal
        .fire({
            title: "Venta De confirmacion",
            text: "¿Quieres realizar una alerta ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "alerta js",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                // Hicieron click en "Sí"
                console.log("Confirmacion verdadera");
                alert("Alerta generada");
            } else {
                // Dijeron que no
                console.log("Confirmacion falsa");
            }
        });
});

//Escuchar el evento click del btn
$btnInput.addEventListener("click", () => {
    Swal.fire({
            title: "Tu Pais de origen",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "confirmar",
            cancelButtonText: "Cancelar",
            inputValidator: nombre => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena
                if (!nombre) {
                    return "Por favor escribe tu pais de origen";
                } else {
                    return undefined;
                }
            }
        })
        .then(resultado => {
            if (resultado.value) {
                let pais = resultado.value;
                console.log("Bienvenido a " + pais);
                swal.fire("Tu pais es:  "+pais)
            }
        });
});