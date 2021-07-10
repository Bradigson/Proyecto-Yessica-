$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
)


function Continuar(){
    nombre = document.getElementById("nombre").value;
    fecha = document.getElementById("fecha").value;

    if(nombre == ""){
        alert("El campo Nombre No puede estar Vacio");
        return;
    }else if (!/^[a-zA-Z]*$/g.test(nombre)) {
        alert("No se permiten numeros en el campo nombre");
        nombre.focus();
        return false;
    }else if(isNaN(fecha) || fecha == "" || fecha != 622){
        alert(nombre+", "+"el campo fecha no esta comppleto, o contiene letras, o no es la fecha de tu madre, por favor" +" "+nombre+" "+"mira que todo este bien.");
        return;

    }else{
        location.href="html/index2.html";
    }
}