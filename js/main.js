// soft scrolling for all links

  $(document).ready(function(){
    $("a").on('click', function(event) {
        var hash = this.hash;
            if (this.hash !== "") {
              event.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

// fade in each section as it appears in the window as scrolled down

$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.4;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.1s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});