
// Modalni ochish va yopish uchun kod
var modal = document.getElementById("myModal");
var openModal = document.getElementById("openModal");
var closeModal = document.getElementsByClassName("close")[0];

// Kartochka ustiga bosilganda modalni ko'rsatish
openModal.onclick = function() {
    modal.style.display = "flex"; // Flex ko'rinishi bilan modal ochiladi
}

// Yopish tugmasi bosilganda modalni yopish
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Modal tashqarisiga bosilganda uni yopish
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


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
