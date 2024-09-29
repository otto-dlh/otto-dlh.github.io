(function ($) {
    "use strict";

    /*function actualizarContador() {
        const fechaObjetivo = new Date('2025-01-18T00:00:00');
        const fechaActual = new Date();
        const diferenciaTiempo = fechaObjetivo - fechaActual;

        if (diferenciaTiempo <= 0) {
            clearInterval(intervalo);
            document.getElementById('contador').textContent = "¡Hoy es el día!";
            return;
        }

        const diasRestantes = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
        const horasRestantes = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);

        const horasFormateadas = horasRestantes.toString().padStart(2, '0');
        const minutosFormateados = minutosRestantes.toString().padStart(2, '0');
        const segundosFormateados = segundosRestantes.toString().padStart(2, '0');

        document.getElementById('contador').textContent = `Falta ${diasRestantes} días, ${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
    }

    //const intervalo = setInterval(actualizarContador, 1000); // Actualiza cada segundo
    //actualizarContador(); // Llama a la función inmediatamente para evitar el retraso inicial

    // Definir la fecha y hora objetivo (18/01/2025 a las 3pm)
    const fechaHoraObjetivo = new Date('2025-01-18T15:00:00');

    // Obtener la marca de tiempo de Unix en milisegundos
    const marcaTiempoUnixMilisegundos = fechaHoraObjetivo.getTime();

    // Convertir la marca de tiempo de Unix de milisegundos a segundos
    const marcaTiempoUnixSegundos = Math.floor(marcaTiempoUnixMilisegundos / 1000);
    // Set up FlipDown
    var flipdown = new FlipDown(marcaTiempoUnixSegundos)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });
        */

        document.addEventListener('DOMContentLoaded', function() {
            const textContainer = document.querySelector('.text-container');
            const textElement = document.getElementById('animated-text');
        
            // Verifica si textElement no es nulo
            if (!textElement) {
                console.error("No se encontró un elemento con el ID 'animated-text'");
                return;
            }
        
            const text = textElement.textContent;
            textElement.textContent = '';  // Vaciar el contenido original
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        textContainer.classList.add('visible');
                        revealText();
                        observer.disconnect();  // Dejar de observar una vez que el texto ha sido revelado
                    }
                });
            }, { threshold: 0.1 });
        
            observer.observe(textContainer);
        
            function revealText() {
                let i = 0;
                const interval = setInterval(() => {
                    if (i < text.length) {
                        textElement.textContent += text[i];
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 100);  // Ajusta el tiempo entre letras (100 ms en este caso)
            }
        });
        

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

})(jQuery);

