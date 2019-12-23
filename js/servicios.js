$(function(){
  $("#buscarB").click(function(){
    var serB = $("#servF").val();
    var mos = $("[class*="+serB+"]").html();
    $("#mostrado").html(mos);
  });

})
