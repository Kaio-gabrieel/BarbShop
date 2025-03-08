const form = document.querySelector(".for")
const mascara = document.querySelector(".mascara-formulario")

function cliquei(){
    form.style.top = "25%"
    form.transform = "translatey(-50%)"
     mascara.style.visibility = "visible"
    }
    
    function CliqueiNaMascara(){
      mascara.style.visibility = " hidden"
      form.style.transform = "translatey(0)"
      form.style.top = "-170%"
    }