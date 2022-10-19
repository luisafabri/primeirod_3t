function total(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;
    for(let i = 1; i <= t; i++){
        r = c * (1 + (j/100));
        document.write("Mês " + i + " valor: " + r +"<br>");
        c = r;
    }
    
    document.write("Resultado: " + r);
}
function adicao () {
     let val1 = document.getElementById("v1").value;
     let val2 = document.getElementById("v2").value;
     let r = Number( val1 ) + Number( val2 );
     document.getElementById(" resultado ").innerHTML = r;
}

function subtracao () {
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number( val1 ) - Number( val2 );
    document.getElementById(" resultado ").innerHTML = r;
}
