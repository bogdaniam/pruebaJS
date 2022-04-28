function frase (){
    let f = window.prompt("Introduce una frase: ");
    let p = 1;
    for (i = 0; i <= f.length; i++){
        if (f[i] == " ")
        p++;
    }
    alert(`La frase tiene ${p} palabras`);
}