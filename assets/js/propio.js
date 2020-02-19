 var estado = "inicial"
 $('.icono_menu_celular').click(function(){
  if (estado == "inicial") {
    $('#menu_pequeno').fadeIn(500);
/*menu_pequeno').css({'transform': 'translate3d(0%,0,0)'});
  $('#menu_pequeno').css({'transition': 'transform 1.35s'});*/
  $('#border_menu').css({'border':'0px'});
  $('.icono_menu_celular').removeClass("icono");
  $('.icono_menu_celular').addClass("remove");
  $('#img_ocultar').css({'display':'none'});
  estado="click";
  }else{
     $('.icono_menu_celular').removeClass("remove");
    $('.icono_menu_celular').addClass("icono");
     $('#menu_pequeno').fadeOut(500);
     $('#img_ocultar').css({'display':'block'});
      estado="inicial";
  }
 });

  $(document).ready(function() {
  $('select').niceSelect();
   });

 /* acordion */


$(".accordion-wrap").on("click", function(){   
    $(this).children().eq(1).slideToggle(300);  
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fas").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
});

/* collapse */
/*var btn1 = $("#btn_solicitando");
var btn2 = $("#btn_reembolso");
var btn3 = $("#btn_informacion");
 $(document).ready(function() {
     if (btn1==$("#btn_solicitando")) {
      $("#btn_solicitando").click(function(){
        $("#solicitando1").css({'display':'block'});
        $("#collapse1").css({'display':'block'});
      });
     }
});*/
$(document).ready(function(){
  $("#btn_solicitando").click(function(){
    $("#collapse1").css('display','block');
    $("#solicitando1").css('display','block');
    $("#collapse2").css('display','none');
    $("#reebolso").css('display','none');
    $("#collapse3").css('display','none');
    $("#informacion").css('display','none');
  });
  $("#btn_reembolso").click(function(){
    $("#collapse1").css('display','none');
    $("#solicitando1").css('display','none');
    $("#collapse3").css('display','none');
    $("#informacion").css('display','none');
    $("#collapse2").css('display','block');
    $("#reebolso").css('display','block');
  });
  $("#btn_informacion").click(function(){
    $("#collapse3").css('display','block');
    $("#informacion").css('display','block');
    $("#collapse2").css('display','none');
    $("#reebolso").css('display','none');
    $("#collapse1").css('display','none');
    $("#solicitando1").css('display','none');
  });
});

/*mostrar el formulario */
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
});

$(document).ready(function(){
  $("#btn_modal").click(function(){
    $('#titulo_bajo').css('z-index','0');
  });
  $("#exampleModalCenter").click(function(){
    $('#titulo_bajo').css('z-index','9999');
  });
});


/* srcolll */
$(document).on("scroll", function(){
    //sacamos el desplazamiento actual de la página
    var desplazamiento = $(document).scrollTop();
    if($(window).width()>=360){
        if(desplazamiento >= 1000){
            $('.box_home').css('display','block');
            $('.box_home').css('top','50%');
            estado=1;
        }else{
            $('.box_home').css('display','none');
            estado=0;
        }
    }
    if($(window).width()>=411){
        if(desplazamiento >= 1000){
            $('.box_home').css('display','block');
            $('.box_home').css('top','50%');
            estado=1;
        }else{
            $('.box_home').css('display','none');
            estado=0;
        }
    }
    if($(window).width()>=640){
        if(desplazamiento >= 1300){
            $('.box_home').css('display','block');
            $('.box_home').css('top','50%');
            estado=1;
        }else{
            $('.box_home').css('display','none');
            estado=0;
        }
    }
    if($(window).width()>=768){
        if(desplazamiento >= 1500){
            $('.box_home').css('display','block');
            $('.box_home').css('top','50%');
            estado=1;
        }else{
            $('.box_home').css('display','none');
            estado=0;
        }
    }
    if($(window).width()>=1200){
        if(desplazamiento >= 700){
            $('.box_home').css('display','block');
            $('.box_home').css('top','50%');
            estado=1;
        }else{
            $('.box_home').css('display','none');
            estado=0;
        }
    }
});

