// Portfólio — Jefferson Jonathan da Silva
// Arquivo JavaScript reservado para futuras interações e melhorias dinâmicas.

document.addEventListener('DOMContentLoaded', function () {

    // Efeito hover nos links de contato (já tratado via CSS, mas pode ser expandido aqui)
    const contactLinks = document.querySelectorAll('.contact-links a');
    contactLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            this.style.transition = 'color 0.15s';
        });
    });

    // Ano dinâmico no footer
    const footerYear = document.querySelector('footer');
    if (footerYear) {
        const anoAtual = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2026', anoAtual);
    }

});
