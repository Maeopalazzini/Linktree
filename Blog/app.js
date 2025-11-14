/* app.js - Lógica principal del sitio (CORREGIDO) */

// Esta función se ejecutará cuando todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Buscamos el formulario por el ID que tú definiste
    const subForm = document.getElementById('subscriptionform');

    // 2. Si el formulario existe en esta página...
    if (subForm) {
        
        // 3. ...le añadimos el evento 'submit'
        subForm.addEventListener('submit', function(e) {
            
            // Prevenimos que la página se recargue
            e.preventDefault(); 
            
            // --- Creación del Modal ---
            
            // A. Crear el fondo oscuro
            const overlay = document.createElement('div');
            overlay.classList.add('modal-overlay');

            // B. Crear el cuerpo del modal (tu .modalsub)
            const modalBody = document.createElement('div');
            modalBody.classList.add('modalsub');
            
            const emailInput = subForm.querySelector('input[type="email"]');
            
            // C. Rellenamos tu modal con HTML (¡AHORA CORREGIDO!)
            modalBody.innerHTML = `
                <h2>¡Gracias por Suscribirte!</h2>
                <p>Tu suscripción con el email <strong>${emailInput.value}</strong> ha sido exitosa.</p>
                <button class="close-modal-btn">Cerrar</button>
            `;

            // D. Lo añadimos todo a la página
            overlay.appendChild(modalBody);
            document.body.appendChild(overlay);

            // Limpiamos el campo de email
            emailInput.value = '';
            
            // 4. Lógica para CERRAR el modal
            // Ahora SÍ encontrará el botón .close-modal-btn
            modalBody.querySelector('.close-modal-btn').addEventListener('click', function() {
                // Removemos el overlay completo (que contiene el modal)
                document.body.removeChild(overlay);
            });
        });
    }

});