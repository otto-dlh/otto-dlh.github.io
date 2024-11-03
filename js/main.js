(function ($) {
    "use strict";

    //constantes
    const fechaObjetivo = new Date('2025-01-18T15:00:00').getTime();
    const data = [
        { nombre: "Ottoniel de León", valor: 1 },
        { nombre: "Ligia Chanquín", valor: 1 },
        { nombre: "Ana Villeda", valor: 1 },
        { nombre: "Melissa Chanquín", valor: 1 },
        { nombre: "Alexander Sagastume", valor: 1 },
        { nombre: "Herberth Chanquín", valor: 1 },
        { nombre: "Familia Paz", valor: 2 },
        { nombre: "Familia Castillo", valor: 2 },
        { nombre: "Familia Ángel Valdez", valor: 4 },
        { nombre: "Familia Nancy Girón", valor: 3 },
        { nombre: "Silvia González", valor: 1 },
        { nombre: "María José", valor: 1 },
        { nombre: "Daniela Vásquez", valor: 2 },
        { nombre: "Dulce Noriega", valor: 1 },
        { nombre: "Thelma Palencia", valor: 2 },
        { nombre: "Esdras Samayoa", valor: 1 },
        { nombre: "Diana Vásquez", valor: 1 },
        { nombre: "Anneth", valor: 1 },
        { nombre: "Team Maestría", valor: 4 },
        { nombre: "Yasmín Vásquez", valor: 1 },
        { nombre: "Catherine Pineda", valor: 1 },
        { nombre: "Kristal de León", valor: 1 },
        { nombre: "Mishelle Lecointe", valor: 2 },
        { nombre: "Familia Mejía", valor: 3 },
        { nombre: "Familia Mimi", valor: 2 },
        { nombre: "Anabelly Hernández", valor: 1 },
        { nombre: "Miranda Matías", valor: 1 },
        { nombre: "Jeannifer Pérez", valor: 1 },
        { nombre: "Bryant Bran", valor: 1 },
        { nombre: "Alex García", valor: 1 },
        { nombre: "Dhaffnne Arriola", valor: 1 },
        { nombre: "Lourdes Cruz", valor: 2 },
        { nombre: "Evelyn Najera", valor: 1 },
        { nombre: "Mónica Castellanos", valor: 1 },
        { nombre: "Saulo Camey", valor: 1 },
        { nombre: "Evelyn Castellanos", valor: 2 },
        { nombre: "Familia Erick Pineda", valor: 2 },
        { nombre: "Familia Tomás Avendaño", valor: 4 },
        { nombre: "Familia Juan Echeverría", valor: 2 },
        { nombre: "Familia Manolo Echeverría", valor: 2 },
        { nombre: "Familia Jennifer Avendaño", valor: 2 },
        { nombre: "Familia Rivera", valor: 4 },
        { nombre: "Mauricio Sánchez", valor: 1 },
        { nombre: "Jeshua Uribio", valor: 1 },
        { nombre: "Gerson Rodríguez", valor: 2 },
        { nombre: "Kathy y Daniel", valor: 2 },
        { nombre: "Familia Sergio Barrios", valor: 2 },
        { nombre: "Familia Sara Donis", valor: 3 },
        { nombre: "Jose Díaz", valor: 1 },
        { nombre: "Ottoniel de León Natareno", valor: 1 },
        { nombre: "Reyna Hernández", valor: 1 },
        { nombre: "Lesly de León", valor: 2 },
        { nombre: "Daniel de León", valor: 1 },
        { nombre: "Familia Mildred de León", valor: 4 },
        { nombre: "Familia Elí de León", valor: 4 },
        { nombre: "Familia Maynor de León", valor: 4 },
        { nombre: "Familia Ceci de León", valor: 3 },
        { nombre: "Familia Joel de León", valor: 4 },
        { nombre: "Familia Marlon de León", valor: 2 },
        { nombre: "Familia Analí de León", valor: 3 },
        { nombre: "Familia Caro de León", valor: 4 },
        { nombre: "Familia Noly de León", valor: 5 },
        { nombre: "Familia Antonia de León", valor: 2 },
        { nombre: "Sonia Salvatierra", valor: 3 },
        { nombre: "Familia David Gonzáles", valor: 4 },
        { nombre: "Familia Alan Ortega", valor: 3 },
        { nombre: "Edu Gonzales", valor: 1 },
        { nombre: "Edgar Alvarado", valor: 1 },
        { nombre: "Edwin Ixcoy", valor: 2 },
        { nombre: "Cristian Florian", valor: 1 },
        { nombre: "Diego Taracena", valor: 2 },
        { nombre: "José Urias", valor: 1 },
        { nombre: "Antulio Morales", valor: 2 },
        { nombre: "Soly", valor: 1 },
        { nombre: "Doña Xiomara", valor: 2 },
        { nombre: "Vaneska Corado", valor: 2 }
    ];

    // Ejecutar el código cuando el contenido del DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function () {
        const audio = document.getElementById('miAudio');
        const buttons = document.querySelectorAll('.controlAudio'); // Seleccionar ambos botones

        // Añadir el evento de clic a todos los botones
        buttons.forEach(function (button) {
            button.addEventListener('click', togglePlayPause);
        });

        // Función para reproducir o pausar el audio y actualizar el texto de los botones
        function togglePlayPause() {
            if (audio.paused) {
                audio.play();

            } else {
                audio.pause();

            }
        }

        // Función para actualizar el texto de todos los botones
        function updateButtonText(text) {
            buttons.forEach(function (button) {
                button.textContent = text;
            });
        }

        // Pausar el audio cuando el usuario cambie de pestaña
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                audio.pause();
                //updateButtonText("Reproducir música"); // Actualiza todos los botones
            }
        });
    });

    $(document).ready(function () {


        function actualizarReloj() {
            const ahora = new Date().getTime();
            const diferencia = fechaObjetivo - ahora;

            // Cálculo de días, horas, minutos y segundos
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            // Actualizar el contenido de los elementos
            $('#dias').text(String(dias).padStart(2, '0'));
            $('#horas').text(String(horas).padStart(2, '0'));
            $('#minutos').text(String(minutos).padStart(2, '0'));
            $('#segundos').text(String(segundos).padStart(2, '0'));

            // Verificar si la cuenta regresiva ha terminado
            if (diferencia < 0) {
                clearInterval(intervalo);
                $('#dias').text('00');
                $('#horas').text('00');
                $('#minutos').text('00');
                $('#segundos').text('00');
            }
        }

        // Actualizar cada segundo
        const intervalo = setInterval(actualizarReloj, 1000);

        // Función para obtener el valor del query string
        function getQueryParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Obtener el número del query string
        const numero = getQueryParameter('v');

        // Encontrar el objeto correspondiente al número
        const resultado = data[numero - 1]; // restamos 1 ya que los índices del array empiezan en 0

        // Mostrar el resultado en la página
        if (resultado) {
            document.getElementById('resultado').innerText = ` ${resultado.nombre} \n Cantidad de personas: ${resultado.valor}`;
        }

        const iValue = getQueryParameter('i');

        const aceptaInv = document.getElementById('aceptaInv');
        const NoaceptaInv = document.getElementById('noAceptaInv');

        // Cambiar href del enlace basado en el valor de 'i'
        if (iValue === 'NA') {
            aceptaInv.href = 'https://wa.me/50236337642?text=Asistiré';
        } else if (iValue === 'NO') {
            aceptaInv.href = 'https://wa.me/50254119312?text=Asistiré';
        } else {
            aceptaInv.href = '#'; // Puedes definir un valor por defecto si el parámetro 'i' no está en la URL
        }

        // Cambiar href del enlace basado en el valor de 'i'
        if (iValue === 'NA') {
            NoaceptaInv.href = 'https://wa.me/50236337642?text=No%20podré%20asistir';
        } else if (iValue === 'NO') {
            NoaceptaInv.href = 'https://wa.me/50254119312?text=No%20podré%20asistir';
        } else {
            NoaceptaInv.href = '#'; // Puedes definir un valor por defecto si el parámetro 'i' no está en la URL
        }


        function togglePlayPause() {
            const audio = document.getElementById('miAudio');
            const button = document.getElementById('controlAudio');

            if (audio.paused) {
                audio.play();
                button.textContent = "Pausar música"; // Cambiar el texto del botón
            } else {
                audio.pause();
                button.textContent = "Reproducir música"; // Cambiar el texto del botón
            }
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const textContainer = document.querySelector('.text-container');
        const textElement = document.getElementById('animated-text');

        // Verifica si textElement no es nulo
        if (!textElement) {
            console.log("No se encontró un elemento con el ID 'animated-text'");
            return;
        }
        else {

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
    /*$(document).ready(function () {
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
    });*/


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

