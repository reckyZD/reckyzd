$(document).ready(function() {
    // Saat tautan dengan class 'page-scroll' diklik
    $('.page-scroll').on('click', function(event) {
        event.preventDefault(); // Menghentikan perilaku bawaan tautan

        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1000); // Durasi animasi dalam milidetik (misalnya, 1000ms atau 1 detik)
    });
});
// parallax
// about dan skill
$(window).on('load', function () {
    $('.kr').addClass('Pon');
    $('.kn').addClass('Pon');
});


$(document).ready(function () {
    $(window).scroll(function () {
        var wscroll = $(this).scrollTop();

        // jumbotron
        $('.jumbotron img').css({
            'transform' : 'translate(0px, '+ wscroll/6+'%)'
        });

        $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+ wscroll/2+'%)'
        });
        
        $('.jumbotron p').css({
            'transform' : 'translate(0px, '+ wscroll/4+'%)'
        });

        // portofolio
        if (wscroll > $('.portofolio').offset().top - 250) {
            $('.portofolio .thumbnail').each(function (i) {
                setTimeout(function() {
                    $('.portofolio .thumbnail').eq(i).addClass('muncul');
                }, 500 * (i+1));
            });
            
        }
    });
    
});


$(document).ready(function () {
    const text = $('.sec-text');
    const textLoad = () => {
    setTimeout(() => {
      text.text("Programmer");
    }, 0);

    setTimeout(() => {
      text.text("Designer");
    }, 3000);

    setTimeout(() => {
      text.text("Developer");
    }, 5000);
  }

  textLoad();
  setInterval(textLoad, 8000);


})


