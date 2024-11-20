// Ini Javascript

function validateForm() {
    const usernameInput = document.getElementById('username-input').value;
    console.log(usernameInput);
    if (usernameInput == '') {
        alert('Formnya mohon di isi');
    } else {
        alert('Sukses mengirim form');
    }
}

let indexSlide = 1;
const listImages = document.getElementsByClassName('banner-autoslide');

showSlide();

function nextSlide() {
    showSlide(indexSlide += 1);
}

function showSlide(index) {
    // Resetter
    if (index > listImages.length) indexSlide = 1;
    console.log(indexSlide);
    hideAllSlide();
    listImages[indexSlide - 1].style.display = 'block';
}

// Logic untuk menyembunyikan semua slide
function hideAllSlide() {
    for (let i = 0; i < listImages.length; i++) {
        listImages[i].style.display = 'none';
    }
}

// Otomatisasinya
setInterval(() => nextSlide(), 2000);