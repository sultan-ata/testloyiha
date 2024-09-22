



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
