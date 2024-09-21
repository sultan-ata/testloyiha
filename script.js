
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
