function sumar(v1, v2){
    return (v1 + v2);
}

function restar(v1, v2){
    return (v1 - v2);
}

function multiplicar(v1, v2){
    return (v1 * v2);
}

function dividir(v1, v2){
    if (v2 != 0){
        return (v1 / v2);
    }else{
        alert("No es posible dividir por 0");
        return "No se puede dividir por 0";
    }
    
}

function potenciar(v1, v2){
    let resultado = Math.pow(v1, v2);
    return (resultado);
}

function operar(f){
    var v1 = parseInt(document.getElementById("num1").value);
    var v2 = parseInt(document.getElementById("num2").value);
    
    console.log(isNaN(v1));    
    console.log(isNaN(v2));


    
    if (isNaN(v1) || isNaN(v2)){
        
        alert("¡Por favor llene el campo faltante!");
    }
    else{
        var res = 0;
    
    switch (f) {
    case 'sumar':
            res = sumar(v1, v2);
            document.getElementById("respuesta").innerHTML = "Suma: " + res;
    
    break;

    case 'restar':
            res = restar(v1, v2);
            document.getElementById("respuesta").innerHTML = "Resta: " + res;

        
    break;

    case 'multiplicar':
            res = multiplicar(v1, v2);
            document.getElementById("respuesta").innerHTML = "Multiplicación: " + res;
    break;

    case 'dividir':
            res = dividir(v1, v2);
            document.getElementById("respuesta").innerHTML = "División: " + res;
    break;       

    case 'potencia':
            res = potenciar(v1, v2);
            document.getElementById("respuesta").innerHTML = "Potencia: " + res;
    break;


    default:
    console.log(f);
    break;
    }
    
    }
}