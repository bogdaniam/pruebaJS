function numero(){
    let n1 = window.prompt("Introduce primer numero: ");
    n1=Number(n1);
    let n2 = window.prompt("Introduce segundo numero: ");
    n2=Number(n2);
    let p1 = n1 % 2;
    let p2 = n2 % 2;
    let m1 = n1 % 7;
    let m2 = n2 % 7;
   

    if (p1 == 0  && m1 == 0 && p2 == 0 && m2 == 0){
        alert("Los dos numeros son pares y multiplos de 7");
    } else if (p1 == 0  && m1 == 0) {
        alert("solo uno de los numeros es par y multiplo de 7");
    } else if (p2 == 0 && m2 == 0) {
        alert("solo uno de los numeros es par y multiplo de 7");
    } else {
        alert("Ninguno de los numeros es par y multiplo de 7");
    }
}

function letra (){
    let l = window.prompt("Introduce una palabra: ");
    let primera = l[0];
    let ultima = l[l.length - 1];
    
    if (primera == "a" || ultima == "a"){
        alert("La palabra introducida empieza o termina por a");
    } else {
        alert("La palabra introducida ni empieza ni termina por a");
    };
};

