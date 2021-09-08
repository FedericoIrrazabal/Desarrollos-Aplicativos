document.addEventListener("DOMContentLoaded", () => {
    function actualizar(){
        let url = "https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas"
     
        fetch (url).then(response => response.json())
        .then(informacion => mostrarInformacion(informacion))
        .catch(error => console.log (error))
    
        const mostrarInformacion = (informacion) => {
            // console.log(informacion)
            let body = "";
            for (let index = 0; index < informacion.length; index++) {
                body += `<tr><td>${informacion[index]["id"]}</td>
                <td>${informacion[index]["nombre"]}</td>
                <td>${informacion[index]["apellido"]}</td>
                <td>${informacion[index]["direccion"]}</td>
                <td>${informacion[index]["titulo"]}</td>
                <td>${informacion[index]["edad"]}</td>
                <td><img src = "${informacion[index]["avatar"]}" width= "50px"  class = "img-fluid rounded-circle"></td></tr> `
                
            }
            document.querySelector("#info").innerHTML = body;
           
        }
    }
    setInterval(actualizar(), 2000)
 
    document.querySelector("#crearPersona").addEventListener("click", () => {
        let persona = {
            nombre : document.querySelector("#nombre").value,
            apellido : document.querySelector("#apellido").value,
            direccion : document.querySelector("#direccion").value,
            titulo : document.querySelector("#titulo").value,
            edad : document.querySelector("#edad").value,
            avatar : document.querySelector("#avatar").value
        }
        crearPersona(persona);
        document.querySelector("#nombre").value = ""
        document.querySelector("#apellido").value = ""
        document.querySelector("#direccion").value = ""
        document.querySelector("#titulo").value = ""
        document.querySelector("#edad").value = ""
        document.querySelector("#avatar").value = ""
    })



async function crearPersona(persona) {
    await fetch("https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona, {
        })
    }).then(response => {
        if (response.ok) {
            actualizar()
            console.log(response)
        } else {
            console.log("Si no funcione entro aca")
            throw new Error("no pude insertar")
        }
    }).catch((error) =>  {
        console.log("falle porque " + error);
    })
}

document.querySelector("#editarPersona").addEventListener("click", () => {
    let persona = {
        nombre : document.querySelector("#actualizarNombre").value,
        apellido : document.querySelector("#actualizarApellido").value,
        direccion : document.querySelector("#actualizarDireccion").value,
        titulo : document.querySelector("#actualizarTitulo").value,
        edad : document.querySelector("#actualizarEdad").value,
        avatar : document.querySelector("#actualizarAvatar").value
    }
    let id = document.querySelector("#unico").value
    editarPersona(persona, id);

    document.querySelector("#actualizarNombre").value = ""
    document.querySelector("#actualizarApellido").value = ""
    document.querySelector("#actualizarDireccion").value = ""
    document.querySelector("#actualizarTitulo").value = ""
    document.querySelector("#actualizarEdad").value = ""
    document.querySelector("#actualizarAvatar").value = ""
    document.querySelector("#unico").value = ""
})



async function editarPersona(persona, id) {
await fetch("https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas/" + id, {
    method: "PUT",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(persona, {
    })
}).then(response => {
    if (response.ok) {
        actualizar()
        console.log(response)
    } else {
        console.log("Si no funcione entro aca")
        throw new Error("no pude insertar")
    }
}).catch((error) =>  {
    console.log("falle porque " + error);
})
}
document.querySelector("#eliminarPersona").addEventListener("click", () => {
    let id = document.querySelector("#unicoEliminar").value
    eliminarPersona(id);
    document.querySelector("#unicoEliminar").value = ""
})



async function eliminarPersona(id) {
await fetch("https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas/" + id, {
    method: "DELETE",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: null
}).then(response => {
    if (response.ok) {
        actualizar()
        console.log(response)
    } else {
        console.log("Si no funcione entro aca")
        throw new Error("no pude insertar")
    }
}).catch((error) =>  {
    console.log("falle porque " + error);
})
}

})