// les liens page-scroll déclenchent un scroll animé
$('.page-scroll a').bind('click', function(event) {

  // cible & vitesse
  var target = $(this).attr('href');
  var speed = 750;

  // Pour éviter le clignotement dans IE / Firefox, ...
  event.preventDefault();

  // fermeture du menu déroulant
  $('.navbar-toggle:visible').click();

  // animation
  $('html, body').animate( { scrollTop: $(target).offset().top }, speed ); 
});

