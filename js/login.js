function iniciar(user,password){
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/usuarios`
    axios.get(link)
    .then((Response)=>{
        console.log(Response)
        console.log(Response["data"])
        for (let i = 0; i<Response["data"].length;i++){
            if(Response["data"][i]["Usuario"]==user && Response["data"][i]["Contrasena"]==password){
                console.log("correctos")
                if( Response["data"][i]["Tipo"]=="Admin"){
                    window.location.href = "https://acevedoleonardo.github.io/ProyectoJavaScript_AcevedoEdgarGranadosOmar/verinfo.html"
                }
                else{
                    window.location.assign("https://acevedoleonardo.github.io/ProyectoJavaScript_AcevedoEdgarGranadosOmar/verinfo.html")
                }
            }
        }
    })
}
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault()
    let user= document.getElementById("user").value
    let password= document.getElementById("password").value
    iniciar(user,password)
})