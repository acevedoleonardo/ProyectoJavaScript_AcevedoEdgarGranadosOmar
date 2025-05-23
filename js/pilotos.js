
function traer(){
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/info`
    axios.get(link)
    .then((response)=>{
        let mostrar = document.getElementById("mostrar-escuderias")
        for (let i =0; i<response.data[0].pilotos.length;i++){
            mostrar.innerHTML += `<img class="imagencita" src="${response.data[0]["pilotos"][i].foto}" data-id="${i}" onclick="mostrarinfo(this)">`
        }
    })
}
function mostrarinfo(elemento){
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/info`
    axios.get(link)
    .then((response)=>{
        console.log(response)
        let id = elemento.getAttribute("data-id")
        let recurso = document.getElementById("mostrar-info")
        console.log(id)
        recurso.style.display = "block";
        recurso.innerHTML = `
        <p>Nombre: ${response.data[0].pilotos[id].nombre}</p>
        <p>Escuderia: ${response.data[0].pilotos[id].escudería}</p>
        <img class="loguito" src="${response.data[0].pilotos[id].foto}">
        <p>Rol: ${response.data[0].pilotos[id].rol} </p>
        <img class="banderita" src="${response.data[0].pilotos[id].bandera}">
        <p>Podios: ${response.data[0].pilotos[id].Podios}</p>
        <p>Modelo coche: ${response.data[0].pilotos[id].modelo}</p>
        `
    })
}
function ocultar(data){
    data.style.display = "none";
}
traer()