$(document).ready(function(){
  $('.fotos').hide();
  $('.fotos:first').show();
  $('.fa-circle:first').css({'color':'purple'});
  $('.fa-circle').click(paginacion);

function paginacion(){
   var circuloID = $(this).index() + 1;

   console.log(circuloID);
   $('.fotos').hide();
   $('#img' + circuloID).fadeIn(500);
   $('.fa-circle').css({'color':'#FFF'});
   $(this).css({'color': 'pink'});

}
})
