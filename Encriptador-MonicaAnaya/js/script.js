var boton = document.getElementById("boton");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonEncriptar2 = document.getElementById("botonEncriptar2");
var botonLimpiar = document.getElementById("botonLimpiar");


botonEncriptar.onclick=function(){
    var input = document.getElementById("texto").value;
    input.toLowerCase();
    //i es par que afecte a tanto mayus como minusculas
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = input.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    var txtcifrado = txtcifrado.replace(/h/igm,"jpl");
    var txtcifrado = txtcifrado.replace(/ /igm,"vfd");
    document.getElementById("textos").value=txtcifrado;
    //alert(txtcifrado);

}
botonEncriptar2.onclick=function(){
    var textos = document.getElementById("textos").value;
    var txtcifrado = textos.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    var txtcifrado = txtcifrado.replace(/jpl/igm,"h");
    var txtcifrado = txtcifrado.replace(/vfd/igm," ");

    document.getElementById("textos2").value=txtcifrado;
}
botonLimpiar.onclick=function(){
    var texto=document.getElementById("texto").value="";
    var textos=document.getElementById("textos").value="";
    var textos2=document.getElementById("textos2").value="";
}