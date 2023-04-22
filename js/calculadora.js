let arrNumeros = [];
let arrOp = [];

// obtener valor/operador
$(".numero").click(function() {
    let valor = $(this).attr("att-valor");
    let pantalla =  $("#resultado").html();
    let valorCompleto = $("#acum").val();
    
    switch (valor) {
        case '+':
        case '-':
        case 'X':
        case '/':
            arrOp.push(valor);
            arrNumeros.push($("#acum").val());
            $("#acum").val("");
            
            $("#resultado").html(pantalla+" "+valor);
        break;
        case '=':
            arrNumeros.push($("#acum").val());
            calcular();
        break;
        default:
            $("#acum").val(valorCompleto + valor);
            $("#resultado").html(pantalla+""+valor);
    }
});

// limpiar valores
$("#btnBorrar").click(function() {
    arrNumeros = [];
    arrOp = [];
    $("#acum").val("");
    $("#resultado").html("&nbsp;");
});

// calcular
function calcular() {
    let resultado = 0;

    if(arrNumeros.length == 2){
        switch (arrOp[0]) {
            case '+':
                resultado = parseInt(arrNumeros[0]) + parseInt(arrNumeros[1]);
                break;
            case '-':
                resultado = parseInt(arrNumeros[0]) - parseInt(arrNumeros[1]);
                break;
            case 'X':
                resultado = parseInt(arrNumeros[0]) * parseInt(arrNumeros[1]);
                break;
            case '/':
                if(parseInt(arrNumeros[1]) == 0 ){
                    alert("No es posible dividir con 0");
                    $("#btnBorrar").click();
                    return false;
                }
                resultado = parseInt(arrNumeros[0]) / parseInt(arrNumeros[1]);
            break;
        }
    }

    $("#resultado").html(
        arrNumeros[0] +" "+
        arrOp[0] +" "+
        arrNumeros[1] +" = "+ resultado.toString()
    );

    // limpiar variables
    arrNumeros = [];
    arrOp = [];
    $("#acum").val("");
}