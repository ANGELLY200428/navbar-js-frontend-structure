// Lógica del formulario de contacto de proyecto Frelancer

// El objetivo es poder manipular los datos que se registren en el formulario
// Explicación a fondo de las siguientes dos líneas de código
    //=== const formdata = new FormData(form);
    //=== const data =Object.formEntries(formdata);

// ¿Qué significa new?
// En JavaScript, la palabra reservada new sirve para crear una nueva instancia de un objeto a partir de una función constructora o una clase.
// FormData(form) = [
//     ["Nombre", "Angelly Agudelo"]
//     ["Teléfono", "3054411190"]
//     ["Correo electrónico", "angellna2004@gmail.com"]
//     ["Mensaje", "Hola que tal?, requiero información"]
// ]

// // Ahora transformo esos datos en un objeto JS, con esta li´nea de código data = Object.fromEntries(formdata);
// data = {
//     Nombre: "Angelly Agudelo",
//     Teléfono: "3054411190",
//     Correo: "angellna2004@gmail.com",
//     Mensaje: "Hola que tal?, requiero información"
// }

// // Por último convierto ese objeto JS  a JSON

// {
//     Nombre: "Angelly Agudelo",
//     Teléfono: "3054411190",
//     Correo: "angellna2004@gmail.com",
//     Mensaje: "Hola que tal?, requiero información"
// }




//const { FormData } = require("undici-types");

// Espera que el DOM este completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () =>{
    // Esto selecciona el formulario con la clase contact-form__form 
    const form = document.querySelector(".contact-form__form")

    // Verifica que el formulario exista en el DOM
    if (form) {
        // Escucha el evento submit del formulario
        form.addEventListener("submit", async (e) =>{
            // Prevenir el comportamiento por defecto del navegador de recarga de la página
            e.preventDefault();

            // Convierte lo datos del formulario en un objeto JS
            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);

            try{

                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {"Content-Type":    "application/json"},
                    // Covierte el objeto de los datos del formulario a formato JSON
                    body: JSON.stringify(data),      
                });

                // Verifica si la respuesta es éxitosa (codigo 200 - 299)
                if(response.ok) {
                    alert("Mensae enviado con éxito");
                    form.reset();
                }else {
                    alert("Hubo un problema al enviar el mensaje")//Notifica de un error en el servidor
                }
            } catch (error) {
                console.error(error);
                alert("Error de conexión")
            }
        });

    };
});