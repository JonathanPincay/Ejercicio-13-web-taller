
//Ejercicio 1
const def = 3600;
var hora = new Date().getHours();
var minutos = new Date().getMinutes();
var segundos = new Date().getSeconds();

document.getElementById("fecha").innerHTML=hora + ":"+minutos+":"+segundos +"<br>";

var conversion = hora * def;

document.getElementById("hola").innerHTML = "Esta es la conversion de horas a segundos <br>"+conversion;

//Ejercicio 2

document.getElementById("boton").addEventListener(('click'), (e)=>{

    e.preventDefault();
    var Base = document.getElementById("Base").value;
    var Altura = document.getElementById("Altura").value;

    var resulta = (Base * Altura)/2;

    document.getElementById('res').innerHTML = "Este es el area: "+resulta;
})

// Ejercicio 3
    document.getElementById("btn-raiz").addEventListener(("click"), (i)=>{
    i.preventDefault();

    var raiz = document.getElementById("raiz").value;
    var resulta_raiz = Math.sqrt(raiz);

    document.getElementById("result").innerHTML = resulta_raiz.toPrecision(3);
    
})
// Ejercicio 4
document.getElementById("btn-palabra").addEventListener(("click"), ()=>{

    var palabra = document.getElementById("palabra").value;

    document.getElementById("result-palabra").innerHTML = palabra.length;

})
// Ejercicio 5
var array1 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
var array2 = ["Sabado", "Domingo"];



document.getElementById("contenar").innerHTML = array1 + array2;

// Ejercicio 6
document.getElementById("version-navegador").innerHTML = navigator.appVersion;
// Ejercicio 7
document.getElementById("tamaño").innerHTML = "Ancho "+screen.width +" alto "+ screen.height;
// Ejercicio 8
document.getElementById("impresion").addEventListener(("click"), (impri)=>{

    impri.preventDefault();
    window.print();

})



