document.addEventListener('DOMContentLoaded', function () {
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



function acomodarNombre() {
    const profileName = document.getElementById('profile-name');
    const profileInfo = document.querySelector('.profile-info');

    if (window.innerWidth >= 768) {

        profileInfo.prepend(profileName);
    } else {
        const profileHeader = document.querySelector('.profile-header');
        profileHeader.prepend(profileName);
    }
}


acomodarNombre();


window.addEventListener('resize', acomodarNombre);




const btn = document.getElementById('send-button');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.textContent = 'Enviando...'; // Cambia el texto del botón a "Enviando..."

    const serviceID = 'default_service'; // Asegúrate de que este sea el correcto
    const templateID = 'template_huquv7f'; // Asegúrate de que este sea el correcto

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.textContent = 'Enviar'; // Restablece el texto del botón
            showModal();
            document.getElementById('contact-form').reset(); // Opcional: limpia el formulario
        }, (err) => {
            btn.textContent = 'Enviar'; // Restablece el texto del botón en caso de error
            alert('Error al enviar el correo: ' + JSON.stringify(err));
        });
});

function showModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'block';

    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    }

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}