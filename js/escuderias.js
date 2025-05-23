
function traer(){
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/info`
    axios.get(link)
    .then((response)=>{
        let mostrar = document.getElementById("mostrar-escuderias")
        for (let i =0; i<response.data[0].equipo.length;i++){
            mostrar.innerHTML += `<img class="imagencita" src="${response.data[0]["equipo"][i].logoImage}" data-id="${i}" onclick="mostrarinfo(this)">`
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
        <p>Nombre: ${response.data[0].equipo[id].nombre}</p>
        <img class="loguito" src="${response.data[0].equipo[id].logoImage}">
        <p>País: ${response.data[0].equipo[id].país || response.data[0].equipo[id].pais} </p>
        <img class="banderita" src="${response.data[0].equipo[id].bandera}">
        <p>Marca del motor: ${response.data[0].equipo[id].motor}</p>
        <p>Modelo coche: ${response.data[0].equipo[id].modelo}</p>
        <p>Numero de copas: ${response.data[0].equipo[id].copas}</p>
        <p>Año de entrada: ${response.data[0].equipo[id].entradaEquipo}</p>
        <p>Numero pilotos: ${response.data[0].equipo[id].pilotos[0]}, ${response.data[0].equipo[id].pilotos[1]}</p>`
    })
}
function ocultar(data){
    data.style.display = "none";
}
traer()