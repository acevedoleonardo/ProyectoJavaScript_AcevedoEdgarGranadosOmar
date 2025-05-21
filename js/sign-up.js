function añadir(user,email,password){
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/usuarios`
    let datos = {
        "Usuario":user,
        "Correo":email,
        "Contrasena":password,
        "Tipo":"User"
    }
    axios.post(link, datos)
    .then(
        alert("cuenta creada con exito"),
        window.location.href = `../index.html`
    )
}
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault()
    let user = document.getElementById("user").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm = document.getElementById("confirm-password").value
    if (confirm!=password){
        alert("Las contraseñas deben ser iguales")
    } else {
        añadir(user,email,password)
    }
})