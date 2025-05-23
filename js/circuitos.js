
function traer(){
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/info`
    axios.get(link)
    .then((response)=>{
        let mostrar = document.getElementById("mostrar-escuderias")
        for (let i =0; i<response.data[0].pilotos.length;i++){
            mostrar.innerHTML += `<img class="imagencita" src="${response.data[0]["circuitos"][i].imagen}" data-id="${i}" onclick="mostrarinfo(this)">`
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
        <p>Nombre: ${response.data[0].circuitos[id].nombre}</p>
        <p>Primer gran premio: ${response.data[0].circuitos[id].primer_gran_premio}</p>
        <img class="loguito" src="${response.data[0].circuitos[id].imagen}">
        <p>Longitud (km): ${response.data[0].circuitos[id].longitud_circuito_km} </p>
        <p>Distancia (km): ${response.data[0].circuitos[id].distancia_carrera_km}</p>
        <p>Descripcion: ${response.data[0].circuitos[id].descripcion}</p>
        `
    })
}
function ocultar(data){
    data.style.display = "none";
}
traer()