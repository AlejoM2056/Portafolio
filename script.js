document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('[id^="sobre-mi-texto"]');
    
    elementos.forEach(elemento => {
        const texto = elemento.textContent;
        elemento.textContent = '';
        let index = 0;

        function escribirTexto() {
            if (index < texto.length) {
                elemento.textContent += texto.charAt(index);
                index++;
                setTimeout(escribirTexto, 50);
            }
        }

        escribirTexto();
    });
});