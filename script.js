// Navbar click demo (optional)
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         alert("Section belum dibuat 😄");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Skill Hover Effect
    // =========================
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
        });
    });

    // =========================
    // AOS Init
    // =========================
    AOS.init({
        duration: 700,
        once: true,
        easing: 'ease-in-out',
    });

    // =========================
    // CERTIFICATE MODAL (FIX)
    // =========================
    const modalElement = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');

    if (modalElement && modalImg) {
        const modal = new bootstrap.Modal(modalElement);

        document.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', function () {
                const imgSrc = this.getAttribute('data-img');

                if (imgSrc) {
                    modalImg.src = imgSrc;
                    modal.show();
                }
            });
        });
    }

});