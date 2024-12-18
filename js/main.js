(function ($) {
    "use strict";

    //constantes
    const fechaObjetivo = new Date('2025-01-18T15:00:00').getTime();
    const data = [
        { "nombre": "Ottoniel de León", "valor": 1 },
        { "nombre": "Ligia Chanquín", "valor": 1 },
        { "nombre": "Ana Villeda", "valor": 1 },
        { "nombre": "Melissa Chanquín", "valor": 1 },
        { "nombre": "Alexander Sagastume", "valor": 1 },
        { "nombre": "Herberth Chanquín", "valor": 1 },
        { "nombre": "Familia Paz Villeda", "valor": 2 },
        { "nombre": "Familia Castillo Solís", "valor": 2 },
        { "nombre": "Familia Váldez Villeda", "valor": 2 },
        { "nombre": "Familia Ham Girón", "valor": 3 },
        { "nombre": "Silvia González", "valor": 1 },
        { "nombre": "Daniela Vásquez", "valor": 2 },
        { "nombre": "Dulce Noriega", "valor": 1 },
        { "nombre": "Familia Urbina Palencia", "valor": 2 },
        { "nombre": "Esdras Samayoa", "valor": 1 },
        { "nombre": "Diana Vásquez", "valor": 1 },
        { "nombre": "Anneth Pérez", "valor": 1 },
        { "nombre": "Karla Hernández", "valor": 1 },
        { "nombre": "Yasmín Vásquez", "valor": 1 },
        { "nombre": "Cathy Pineda", "valor": 1 },
        { "nombre": "Kristal de León", "valor": 1 },
        { "nombre": "Mishelle Lecointe", "valor": 2 },
        { "nombre": "Familia Avendaño Mejía", "valor": 3 },
        { "nombre": "Familia García Reyes", "valor": 2 },
        { "nombre": "Anabelly Hernández", "valor": 2 },
        { "nombre": "Miranda Matías", "valor": 1 },
        { "nombre": "Jeannifer Pérez", "valor": 1 },
        { "nombre": "Bryant Bran", "valor": 1 },
        { "nombre": "Telma Gómez", "valor": 1 },
        { "nombre": "Dhaffnne Arriola", "valor": 1 },
        { "nombre": "Familia Fuentes Cruz", "valor": 2 },
        { "nombre": "Evelyn Nájera", "valor": 1 },
        { "nombre": "Williams Mejía", "valor": 1 },
        { "nombre": "Mónica Castellanos", "valor": 1 },
        { "nombre": "Saulo Camey", "valor": 1 },
        { "nombre": "Familia Batz Gómez", "valor": 2 },
        { "nombre": "Familia Pineda Osorio", "valor": 2 },
        { "nombre": "Familia Avendaño Shioc", "valor": 4 },
        { "nombre": "Familia Echeverría Morales", "valor": 2 },
        { "nombre": "Familia Marroquín", "valor": 2 },
        { "nombre": "Familia Godoy Avendaño", "valor": 2 },
        { "nombre": "Mauricio Sánchez", "valor": 1 },
        { "nombre": "Jeshua Uribio", "valor": 1 },
        { "nombre": "Familia Rodríguez Agustín", "valor": 2 },
        { "nombre": "Kathy Córdova", "valor": 2 },
        { "nombre": "Familia Barrios Ávila", "valor": 2 },
        { "nombre": "Familia Pineda Donis", "valor": 3 },
        { "nombre": "José Díaz", "valor": 1 },
        { "nombre": "Familia De León Hernández", "valor": 2 },
        { "nombre": "Leslie De León", "valor": 2 },
        { "nombre": "Daniel De León", "valor": 1 },
        { "nombre": "Familia Velásquez De León", "valor": 4 },
        { "nombre": "Familia De León López", "valor": 4 },
        { "nombre": "Familia De León Sum", "valor": 4 },
        { "nombre": "Familia Estrada De León", "valor": 3 },
        { "nombre": "Joel De León", "valor": 1 },
        { "nombre": "Familia De León Sánchez", "valor": 2 },
        { "nombre": "Familia Jerez De León", "valor": 3 },
        { "nombre": "Familia Caro De León", "valor": 4 },
        { "nombre": "Familia De León Sureth", "valor": 5 },
        { "nombre": "Familia González", "valor": 4 },
        { "nombre": "Familia Ortega", "valor": 3 },
        { "nombre": "Edu González", "valor": 1 },
        { "nombre": "Edgar Alvarado", "valor": 1 },
        { "nombre": "Edwin Ixcoy", "valor": 2 },
        { "nombre": "Cristian Florian", "valor": 1 },
        { "nombre": "Familia Taracena", "valor": 2 },
        { "nombre": "José Urías", "valor": 1 },
        { "nombre": "Familia Morales", "valor": 2 },
        { "nombre": "Soly Ruiz", "valor": 2 },
        { "nombre": "Xiomara Villalta", "valor": 1 },
        { "nombre": "Vanezka Corado", "valor": 2 },
        { "nombre": "Lupita Valdéz", "valor": 2 },
        { "nombre": "Bryan García", "valor": 1 },
        { "nombre": "Heiry Cruz", "valor": 1 },
        { "nombre": "Abi De León", "valor": 3 },
        { "nombre": "María José Morales", "valor": 1 },
        { "nombre": "Sara Ostorga", "valor": 2 },
        { "nombre": "Vale Matías", "valor": 1 },
        { "nombre": "Khristian Román", "valor": 1 },
        { "nombre": "Christiaan Mendoza", "valor": 1 },
        { "nombre": "Luz María Pérez", "valor": 1 },
        { "nombre": "Antonia de León", "valor": 2 },
        { "nombre": "Fam. Salvatierra", "valor": 3 },
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

        const navbarCollapse = document.getElementById("navbarCollapse");
        const navLinks = navbarCollapse.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {
            link.addEventListener("click", function () {
                // Cierra el navbar colapsable
                if (navbarCollapse.classList.contains("show")) {
                    new bootstrap.Collapse(navbarCollapse).toggle();
                }
            });
        });

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
            aceptaInv.href = 'https://wa.me/50236337642?text=Confirmo%20mi%20asistencia%20para%20tu%20boda.';
        } else if (iValue === 'NO') {
            aceptaInv.href = 'https://wa.me/50254119312?text=Confirmo%20mi%20asistencia%20para%20tu%20boda.';
        } else {
            aceptaInv.href = '#'; // Puedes definir un valor por defecto si el parámetro 'i' no está en la URL
        }

        // Cambiar href del enlace basado en el valor de 'i'
        if (iValue === 'NA') {
            NoaceptaInv.href = 'https://wa.me/50236337642?text=Lo%20lamento%20mucho%20pero%20no%20podré%20asistir';
        } else if (iValue === 'NO') {
            NoaceptaInv.href = 'https://wa.me/50254119312?text=Lo%20lamento%20mucho%20pero%20no%20podré%20asistir';
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

