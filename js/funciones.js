
$(function(){
  $("#listo").click(function(e){
    e.preventDefault();
    $("#listo").hide("fast");
    $(".input-field").hide("fast");
    $("#textarea2").parent().show("fast");
  })
 $(".persona").hide("fast");
 $(".empresa").hide("fast");
 $(".comentarios").hide("fast");
 $(".tipo").change(function(){
 var cual =  $(".tipo").val();
 if (cual == 1){
   $(".ayuda1").hide("fast");
    $(".persona").hide("fast");
    $(".empresa").show("fast");
    $(".qempresa2").hide("fast");
     $(".qempresa1").hide("fast");
 }else{
   $(".ayuda1").hide("fast");
   $(".empresa").hide("fast");
   $(".persona").show("fast");
   $(".qpersona2").hide("fast");
    $(".qpersona1").hide("fast");
 }
 })
 $(".Qempresa").change(function(){
 var cual =  $(".Qempresa").val();
 if (cual == 1){
    $(".qempresa2").hide("fast");
    $(".qempresa1").show("fast");
 }else{
   $(".qempresa2").show("fast");
   $(".qempresa1").hide("fast");
 }
 })
 $(".Qpersona").change(function(){
 var cual =  $(".Qpersona").val();
 if (cual == 1){
    $(".qpersona2").hide("fast");
    $(".qpersona1").show("fast");
 }else{
   $(".qpersona2").show("fast");
   $(".qpersona1").hide("fast");
 }
 })
$('.fixed-action-btn').floatingActionButton();
$(".nombre").blur(function(){
  var tipousuario = $("#icon_prefix").value;
  console.log(tipousuario)
  localStorage.setItem( "Nombre" , tipousuario);
})

})
