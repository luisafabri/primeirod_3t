let tabuada = 6;

function escreva(){
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<br>");
}

function repete(){
    for(let i = 1; i <= 10; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j =1; j <= 10; j++){
            document.write(i + " x " + j + " = "+(j*i)+"<br>");
        }
        document.write("<br>");
    }
}

let lista = ["Banana","Uva","Abacate","Tomate"];

function minhaLista(){
    document.write(lista[3]);
}
