let h3P = document.querySelectorAll("h3");

h3P.forEach(element => {
    if(element.id != "index"){
        element.addEventListener("click", () => {
            cargarContenido(element.id);
        })
    }/* else{
        element.addEventListener("click", () =>{
            limpiarIFrame();
        })
    } */
});

async function cargarContenido(id){
    // document.getElementById("miFrame").src = `/${id}.html`;

    const iFrame = document.getElementById("miFrame");
    const iFrameContainer = document.getElementById("containerIFrame");
    
    let url = "";
    
    if(id != "inicio"){
        url = `Bandas/${id}.html`;
    }else{
        url = `${id}.html`;
    }

    try{
        const response = await fetch(url, {method: 'HEAD'});

        if(response.ok){
            iFrame.src = url;
            iFrameContainer.innerHTML = '';
            iFrameContainer.appendChild(iFrame);
        }else{
            const errorMessage = `No se pudo cargar la página: /${url}.`;
            alert(`¡Atención!\n${errorMessage}\nLa página solicitada no está disponible actualmente.`);
            /* iFrameContainer.innerHTML = `<div style="padding: 20px; background-color: #ffe0e0; border: 1px solid #ff9999; color: #cc0000;">
                                                    <h3>Error al cargar la página</h3>
                                                    <p>${errorMessage}</p>
                                                    <p>Por favor, intente con otra opción.</p>
                                                </div>`; */
            iFrame.src = 'about:blank';
        }
    }catch(error){
        const errorMessage = `Error de red al cargar /${url}.`;

        iFrameContainer.innerHTML = `<div style="padding: 20px; background-color: #ffe0e0; border: 1px solid #ff9999; color: #cc0000;">
                                        <h3>Problema de Conexión</h3>
                                        <p>${errorMessage}<p>
                                        <p>Verifique su conexión a internet o intente de nuevo.</p>
        </div>`;
        iFrame.src = 'about:blank';
        alert(`¡Error de conexión!\n${errorMessage}`);
        console.error("Error en la verificación de la URL:", error);
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('miIframe').src = 'about:blank';
    });
}

function limpiarIFrame(){
    document.getElementById("miFrame").src = 'about:blank';
}

function pruebaInicio(){
    console.log("Esto funciona!");
}

//Siempre al final - Código específico de páginas
function inicializarPorRuta(){
    const path = window.location.pathname;
    console.log(path);
    let fileName = "";
    fileName += path.substring(path.lastIndexOf("/") + 1);

    switch(fileName){
        case "index.html" || "/" || "" || null:
            console.log(fileName);
            let altoH = document.querySelector(".index-grid-item.header").clientHeight;
            let altoN = document.querySelector(".nav").clientHeight;
            let contenedorPW = document.querySelector(".contenedor-prueba");
            contenedorPW.setAttribute("style", `height: calc(100vh - ${altoH}px - ${altoN}px - 37px)`);
            console.log("Esta parte funciona!");
            break;
        case "inicio.html":
            console.log(fileName);
            break;
        case "the-warning.html":
            console.log(fileName);
            let anchoTWHeader = document.querySelector(".tW-header").clientWidth;
            let H3TW = document.querySelector(".tW-header");
            H3TW.setAttribute("style", `width: calc(${anchoTWHeader}px + 30px)`)

            let pruebaB = document.getElementById("pruebame");
            pruebaB.addEventListener("click", () => {
                pruebaInicio();
            })
            break;
        case "avenged-sevenfold.html":
            console.log(fileName);
            break;
        case "jinjer.html":
            console.log(fileName);
            break;
        case "poppy.html":
            console.log(fileName);
            break;
        case "spiritbox.html":
            console.log(fileName);
            break;
        case "eminem.html":
            console.log(fileName);
            break;
        case "daft-punk.html":
            console.log(fileName);
            break;
        case "videoclub.html":
            console.log(fileName);
            break;
        case "adele-castillon.html":
            console.log(fileName);
            break;
        case "TDG.html":
            console.log(fileName);
            break;
        default:
            console.log("Path no encontrada,", path);
            break;
    }
}
document.addEventListener("DOMContentLoaded", inicializarPorRuta);