alert("BIENVENIDO");
var acumulador=0;

var n=parseInt(prompt("INGRESE LA CANTIDAD DE PRACTICAS "));
for(i=1;i<=n;i++){
    var nota=parseFloat(prompt("INGRESE LA CALIFICACION DE LA PRACTICA NÚMERO "+i));
    if(nota>=0 && nota<=20){
        acumulador+=nota;
    }else{
        alert("CALIFICACION INVALIDA");   
    }
}
var promedio=acumulador/n;

var ep=parseFloat(prompt("INGRESE LA CALIFICACION DEL EXAMEN PARCIAL"));
var ef=parseFloat(prompt("INGRESE LA CALIFICACION DEL EXAMEN FINAL"));

var resultado=promedio*0.50+ep*0.20+ef*0.30;
if(resultado>=0 && resultado<13)estado="DESAPROBADO";
else if(resultado>=13 && resultado<=20) estado="APROBADO";
else estado="CALIFICACION INVALIDA";

document.write("CALIFICACION : "+resultado.toFixed(2)+"<br>ESTADO DEL ESTUDIENTE : "+estado);
