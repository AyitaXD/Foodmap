$(document).ready(function() {
  setTimeout(function(){
    $(".splashScreen").fadeOut();
    $('.pagPrincipal').removeClass('hide')
  },3000);

  $('ul.dropdown-menu li .p').click(function() {
    var img = $('.images');
    img.append('<div class="aq a" data-toggle="modal" data-target="#modal1"></div>' + '<div class="aq b" data-toggle="modal" data-target="#modal2"></div>' + '<div class="aq c" data-toggle="modal" data-target="#modal3"></div>' + '<div class="aq d" data-toggle="modal" data-target="#modal4"></div>' + '<div class="aq e" data-toggle="modal" data-target="#modal5"></div>' + '<div class="aq f" data-toggle="modal" data-target="#modal6"></div>');
    $('.bq,.cq,.principal').hide();

    $('.a').mouseover(function() {
      $('.mouseover1').show();
    }).mouseout(function() {
      $('.mouseover1').hide();
      $('p').css('z-index', '-1')
    });

    $('.b').mouseover(function() {
      $('.mouseover2').show();
    }).mouseout(function() {
      $('.mouseover2').hide();
    });

    $('.c').mouseover(function() {
      $('.mouseover3').show();
    }).mouseout(function() {
      $('.mouseover3').hide();
    });

    $('.d').mouseover(function() {
      $('.mouseover4').show();
    }).mouseout(function() {
      $('.mouseover4').hide();
    });

    $('.e').mouseover(function() {
      $('.mouseover5').show();
    }).mouseout(function() {
      $('.mouseover5').hide();
    });

    $('.f').mouseover(function() {
      $('.mouseover6').show();
    }).mouseout(function() {
      $('.mouseover6').hide();
    });
  });
  $('ul.dropdown-menu li .l').click(function() {
    var img = $('.images');
    img.append('<div class="bq g" data-toggle="modal" data-target="#modal7"></div>' + '<div class="bq h" data-toggle="modal" data-target="#modal8"></div>' + '<div class="bq i" data-toggle="modal" data-target="#modal9"></div>' + '<div class="bq j" data-toggle="modal" data-target="#modal10"></div>' + '<div class="bq k" data-toggle="modal" data-target="#modal11"></div>' + '<div class="bq ll" data-toggle="modal" data-target="#modal12"></div>');
    $('.aq,.cq').hide()

    $('.g').mouseover(function() {
      $('.mouseover7').show();
    }).mouseout(function() {
      $('.mouseover7').hide();
    });

    $('.h').mouseover(function() {
      $('.mouseover8').show();
    }).mouseout(function() {
      $('.mouseover8').hide();
    });

    $('.i').mouseover(function() {
      $('.mouseover9').show();
    }).mouseout(function() {
      $('.mouseover9').hide();
    });

    $('.j').mouseover(function() {
      $('.mouseover10').show();
    }).mouseout(function() {
      $('.mouseover10').hide();
    });

    $('.k').mouseover(function() {
      $('.mouseover11').show();
    }).mouseout(function() {
      $('.mouseover11').hide();
    });

    $('.ll').mouseover(function() {
      $('.mouseover12').show();
    }).mouseout(function() {
      $('.mouseover12').hide();
    });
  });
  $('ul.dropdown-menu li .o').click(function() {
    var img = $('.images');
    img.append('<div class="cq m" data-toggle="modal" data-target="#modal13"></div>' + '<div class="cq n" data-toggle="modal" data-target="#modal14"></div>' + '<div class="cq r" data-toggle="modal" data-target="#modal15"></div>' + '<div class="cq s" data-toggle="modal" data-target="#modal16"></div>' + '<div class="cq t" data-toggle="modal" data-target="#modal17"></div>' + '<div class="cq u" data-toggle="modal" data-target="#modal18"></div>');
    $('.aq,.bq').hide()

    $('.m').mouseover(function() {
      $('.mouseover13').show();
    }).mouseout(function() {
      $('.mouseover13').hide();
    });

    $('.n').mouseover(function() {
      $('.mouseover14').show();
    }).mouseout(function() {
      $('.mouseover14').hide();
    });

    $('.r').mouseover(function() {
      $('.mouseover15').show();
    }).mouseout(function() {
      $('.mouseover15').hide();
    });

    $('.s').mouseover(function() {
      $('.mouseover16').show();
    }).mouseout(function() {
      $('.mouseover16').hide();
    });

    $('.t').mouseover(function() {
      $('.mouseover17').show();
    }).mouseout(function() {
      $('.mouseover17').hide();
    });

    $('.u').mouseover(function() {
      $('.mouseover18').show();
    }).mouseout(function() {
      $('.mouseover18').hide();
    });
  })
})
