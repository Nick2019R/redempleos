
$(function(){
 $('select').formSelect();
 $(".negocio").hide("fast");
 $(".servicios").hide("fast");
 $("#registrar").click(function(){
   $(".aservicios").hide("fast");
   $(".anegocio").hide("fast");
   $(".negocio").show("fast");
 })
 $("#serviciosB").click(function(){
   $(".aservicios").hide("fast");
   $(".anegocio").hide("fast");
   $(".negocio").hide("fast");
   $(".servicios").show("fast")
 })
 $(".volver").click(function(){
   $(".aservicios").show("fast");
   $(".anegocio").show("fast");
   $(".negocio").hide("fast");
   $(".servicios").hide("fast");
 })
 $("#registrobt").click(function(){
   var datosN = $(":text").val()
   alert(datosN)
 })
})
