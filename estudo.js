function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function total(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if ( ! Number (c)){
        alert("O capital tem que ser número, tente novamente.")
        document . getElementById ("valor").valeu="";
        document . getElementById ("valor").focus ();
        return
    }
    if ( ! Number (j)){
        alert("O juros tem que ser números, tente novamente.")
        document . getElementById ("valor").valeu="";
        document . getElementById ("valor").focus ();
        return
    }
    if ( ! Number (t)){
        alert("Os meses tem que ser número, tente novamente.")
        document . getElementById ("valor").valeu="";
        document . getElementById ("valor").focus ();
        return
    }
    let r = 0;
    for(let i = 1; i <= t; i++){
        r = c * (1 + (j/100));
        document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
        c = r;
    }

    
    document.write("Resultado: " + moeda(r));
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
