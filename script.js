



// Modalni ochish funksiyasi (sizga kerak bo'lsa)
var modal = document.getElementById("myModal");
var closeIcon = document.getElementById("closeIcon");
var closeModalButton = document.getElementsByClassName("close")[0];

// Modalni yopish funksiyasi (ikonka bosilganda)
closeIcon.onclick = function() {
    modal.style.display = "none";
}

// Yopish tugmachasi (&times;) bosilganda modalni yopish
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("myModal");
var triggerImage = document.getElementById("openModal");
var closeIcon = document.getElementById("closeIcon");
var closeModalButton = document.getElementsByClassName("close")[0];

// Modalni ochish funksiyasi
triggerImage.onclick = function() {
    modal.style.display = "flex";
    modal.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiyani qo'shish
}

// Modalni yopish funksiyasi
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Modalni ochish funksiyasi (Свежая Нарезка uchun)
var modalNarezka = document.getElementById("myModalNarezka"); // Modalni topish
var triggerImageNarezka = document.getElementById("openModalNarezka"); // Kartochkani topish
var closeIconNarezka = document.getElementById("closeIconNarezka"); // Ikonka
var closeModalButtonNarezka = document.getElementsByClassName("closeNarezka")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageNarezka.onclick = function() {
    modalNarezka.style.display = "flex"; // Modalni ko'rsatish
    modalNarezka.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonNarezka.onclick = function() {
    modalNarezka.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconNarezka.onclick = function() {
    modalNarezka.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalNarezka) {
        modalNarezka.style.display = "none";
    }
}


// Modalni ochish funksiyasi (Цезарь uchun)
var modalSezar = document.getElementById("myModalSezar"); // Modalni topish
var triggerImageSezar = document.getElementById("openModalSezar"); // Kartochkani topish
var closeIconSezar = document.getElementById("closeIconSezar"); // Ikonka
var closeModalButtonSezar = document.getElementsByClassName("closeSezar")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageSezar.onclick = function() {
    modalSezar.style.display = "flex"; // Modalni ko'rsatish
    modalSezar.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonSezar.onclick = function() {
    modalSezar.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconSezar.onclick = function() {
    modalSezar.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalSezar) {
        modalSezar.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Лаззат uchun)
var modalLazzat = document.getElementById("myModalLazzat"); // Modalni topish
var triggerImageLazzat = document.getElementById("openModalLazzat"); // Kartochkani topish
var closeIconLazzat = document.getElementById("closeIconLazzat"); // Ikonka
var closeModalButtonLazzat = document.getElementsByClassName("closeLazzat")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageLazzat.onclick = function() {
    modalLazzat.style.display = "flex"; // Modalni ko'rsatish
    modalLazzat.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonLazzat.onclick = function() {
    modalLazzat.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconLazzat.onclick = function() {
    modalLazzat.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalLazzat) {
        modalLazzat.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Руккола с языком uchun)
var modalRukkola = document.getElementById("myModalRukkola"); // Modalni topish
var triggerImageRukkola = document.getElementById("openModalRukkola"); // Kartochkani topish
var closeIconRukkola = document.getElementById("closeIconRukkola"); // Ikonka
var closeModalButtonRukkola = document.getElementsByClassName("closeRukkola")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageRukkola.onclick = function() {
    modalRukkola.style.display = "flex"; // Modalni ko'rsatish
    modalRukkola.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonRukkola.onclick = function() {
    modalRukkola.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconRukkola.onclick = function() {
    modalRukkola.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalRukkola) {
        modalRukkola.style.display = "none";
    }
}


// Modalni ochish funksiyasi (Фунчоза uchun)
var modalFunchoza = document.getElementById("myModalFunchoza"); // Modalni topish
var triggerImageFunchoza = document.getElementById("openModalFunchoza"); // Kartochkani topish
var closeIconFunchoza = document.getElementById("closeIconFunchoza"); // Ikonka
var closeModalButtonFunchoza = document.getElementsByClassName("closeFunchoza")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageFunchoza.onclick = function() {
    modalFunchoza.style.display = "flex"; // Modalni ko'rsatish
    modalFunchoza.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonFunchoza.onclick = function() {
    modalFunchoza.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconFunchoza.onclick = function() {
    modalFunchoza.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalFunchoza) {
        modalFunchoza.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Мафтуна uchun)
var modalMaftuna = document.getElementById("myModalMaftuna"); // Modalni topish
var triggerImageMaftuna = document.getElementById("openModalMaftuna"); // Kartochkani topish
var closeIconMaftuna = document.getElementById("closeIconMaftuna"); // Ikonka
var closeModalButtonMaftuna = document.getElementsByClassName("closeMaftuna")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageMaftuna.onclick = function() {
    modalMaftuna.style.display = "flex"; // Modalni ko'rsatish
    modalMaftuna.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonMaftuna.onclick = function() {
    modalMaftuna.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconMaftuna.onclick = function() {
    modalMaftuna.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalMaftuna) {
        modalMaftuna.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Мужской каприз uchun)
var modalKapriz = document.getElementById("myModalKapriz"); // Modalni topish
var triggerImageKapriz = document.getElementById("openModalKapriz"); // Kartochkani topish
var closeIconKapriz = document.getElementById("closeIconKapriz"); // Ikonka
var closeModalButtonKapriz = document.getElementsByClassName("closeKapriz")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageKapriz.onclick = function() {
    modalKapriz.style.display = "flex"; // Modalni ko'rsatish
    modalKapriz.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonKapriz.onclick = function() {
    modalKapriz.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconKapriz.onclick = function() {
    modalKapriz.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalKapriz) {
        modalKapriz.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Японский салат uchun)
var modalYapon = document.getElementById("myModalYapon"); // Modalni topish
var triggerImageYapon = document.getElementById("openModalYapon"); // Kartochkani topish
var closeIconYapon = document.getElementById("closeIconYapon"); // Ikonka
var closeModalButtonYapon = document.getElementsByClassName("closeYapon")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageYapon.onclick = function() {
    modalYapon.style.display = "flex"; // Modalni ko'rsatish
    modalYapon.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonYapon.onclick = function() {
    modalYapon.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconYapon.onclick = function() {
    modalYapon.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalYapon) {
        modalYapon.style.display = "none";
    }
}

// Modalni ochish funksiyasi (салат Ташкент uchun)
var modalTashkent = document.getElementById("myModalTashkent"); // Modalni topish
var triggerImageTashkent = document.getElementById("openModalTashkent"); // Kartochkani topish
var closeIconTashkent = document.getElementById("closeIconTashkent"); // Ikonka
var closeModalButtonTashkent = document.getElementsByClassName("closeTashkent")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageTashkent.onclick = function() {
    modalTashkent.style.display = "flex"; // Modalni ko'rsatish
    modalTashkent.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonTashkent.onclick = function() {
    modalTashkent.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconTashkent.onclick = function() {
    modalTashkent.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalTashkent) {
        modalTashkent.style.display = "none";
    }
}


// Modalni ochish funksiyasi (салат Греческий uchun)
var modalGrecheskiy = document.getElementById("myModalGrecheskiy"); // Modalni topish
var triggerImageGrecheskiy = document.getElementById("openModalGrecheskiy"); // Kartochkani topish
var closeIconGrecheskiy = document.getElementById("closeIconGrecheskiy"); // Ikonka
var closeModalButtonGrecheskiy = document.getElementsByClassName("closeGrecheskiy")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageGrecheskiy.onclick = function() {
    modalGrecheskiy.style.display = "flex"; // Modalni ko'rsatish
    modalGrecheskiy.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonGrecheskiy.onclick = function() {
    modalGrecheskiy.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconGrecheskiy.onclick = function() {
    modalGrecheskiy.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalGrecheskiy) {
        modalGrecheskiy.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Смак uchun)
var modalSmak = document.getElementById("myModalSmak"); // Modalni topish
var triggerImageSmak = document.getElementById("openModalSmak"); // Kartochkani topish
var closeIconSmak = document.getElementById("closeIconSmak"); // Ikonka
var closeModalButtonSmak = document.getElementsByClassName("closeSmak")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal ochiladi
triggerImageSmak.onclick = function() {
    modalSmak.style.display = "flex"; // Modalni ko'rsatish
    modalSmak.style.animation = "fadeZoomIn 0.5s ease forwards"; // Modalga animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi bosilganda)
closeModalButtonSmak.onclick = function() {
    modalSmak.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconSmak.onclick = function() {
    modalSmak.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalSmak) {
        modalSmak.style.display = "none";
    }
}
