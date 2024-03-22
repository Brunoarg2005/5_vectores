//declaracion de variables
let N=prompt("Ingrese la longitud del vector: ");
let A = [N];
let B =[];
let C =[N];


//***********asignamos valores aleatorios al vector A
for(let i = 0; i<N; i++){
    A[i]=Random(32000);
}
//***********mostrar los elementos de A
document.write("Numeros del vector: <br>");
for(let i=0;i<A.length;i++){
    document.write(A[i]+"<br>");
}
//***********mostrar el promedio de A
document.write("<br>Promedio: "+promedio(A)+"<br>");

//************mostrar numeros de A mayores al promedio
B=mayores(A);
document.write("<br>Numeros mayores al promedio: <br>")
for(let i=0; i<B.length; i++){
    document.write("    "+B[i]+"<br>");
}

//*********mostrar numeros multiplos de 2 y 3 de A
document.write("<br>Numeros multiplos de 2 y 3: "+multiplos(A));

//*********mostrar suma de todos los numeros de A
document.write("<br>Suma de los numeros: "+suma(A));

//*********mostrar vector A x2
C=x2(A);
document.write("<br><br>Vector A pero x2:");
for(let i=0; i<C.length; i++){
    document.write("    <br>"+C[i]);
}

//funcion de llenar un array con numeros random
function Random(max){
    return Math.floor(Math.random()*max);
}

//funcion promedio
function promedio(V){
    let cont=0;
    for(let i = 0; i<V.length; i++){
        cont+=V[i];
    }
    return cont/V.length;   
}

//funcion mayores al promedio
function mayores(A){
    let B = [];
    for(let i=0; i<A.length; i++){
        if(A[i]>promedio(A)){
            B.push(A[i]);
        }
    }
    return B;
}

//funcion multiplos de 2 y 3
function multiplos(V){
    let cont=0;
    for(let i = 0; i<V.length; i++){
        if(V[i]%2==0&&V[i]%3==0){
            cont++;
        }
    }
    return cont;
}

//funcion de suma de todos los numeros
function suma(V){
    let cont=0;
    for(let i=0; i<V.length; i++){
        cont+=V[i];
    }
    return cont;
}

//funcion de multiplicar por 2
function x2(V){
    let C = [V.length];
    for(let i=0; i<V.length; i++){
        C[i]=V[i];
    }
    return C;
}