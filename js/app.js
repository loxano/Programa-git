document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos por ID
    const modal = document.getElementById('modalLogin');
    const abrirBtn = document.getElementById('abrirModalBtn');
    const cerrarBtn = document.getElementById('cerrarModalBtn');

    if (modal && abrirBtn && cerrarBtn) {
        // 2. ABRIR: Añade la clase 'modal-mostrar' al hacer clic
        abrirBtn.addEventListener('click', function() {
            modal.classList.add('modal-mostrar');
        });

        // 3. CERRAR: Elimina la clase 'modal-mostrar' al hacer clic en la X
        cerrarBtn.addEventListener('click', function() {
            modal.classList.remove('modal-mostrar');
        });

        // 4. CERRAR si hacen clic en el fondo oscuro
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('modal-mostrar');
            }
        });
    }
});