



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

// Modalni ochish funksiyasi (Домашный чучпара uchun)
var modalChuchpara = document.getElementById("myModalChuchpara"); // Modal oynani topish
var triggerImageChuchpara = document.getElementById("openModalChuchpara"); // Kartochkani topish
var closeIconChuchpara = document.getElementById("closeIconChuchpara"); // Ikonka
var closeModalButtonChuchpara = document.getElementsByClassName("closeChuchpara")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageChuchpara.onclick = function() {
    modalChuchpara.style.display = "flex"; // Modalni ko'rsatish
    modalChuchpara.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonChuchpara.onclick = function() {
    modalChuchpara.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconChuchpara.onclick = function() {
    modalChuchpara.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalChuchpara) {
        modalChuchpara.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Мастава uchun)
var modalMastava = document.getElementById("myModalMastava"); // Modal oynani topish
var triggerImageMastava = document.getElementById("openModalMastava"); // Kartochkani topish
var closeIconMastava = document.getElementById("closeIconMastava"); // Ikonka
var closeModalButtonMastava = document.getElementsByClassName("closeMastava")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageMastava.onclick = function() {
    modalMastava.style.display = "flex"; // Modalni ko'rsatish
    modalMastava.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonMastava.onclick = function() {
    modalMastava.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconMastava.onclick = function() {
    modalMastava.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalMastava) {
        modalMastava.style.display = "none";
    }
}
// Modalni ochish funksiyasi (Кой/Мал шорпо uchun)
var modalShurva = document.getElementById("myModalShurva"); // Modal oynani topish
var triggerImageShurva = document.getElementById("openModalShurva"); // Kartochkani topish
var closeIconShurva = document.getElementById("closeIconShurva"); // Ikonka
var closeModalButtonShurva = document.getElementsByClassName("closeShurva")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageShurva.onclick = function() {
    modalShurva.style.display = "flex"; // Modalni ko'rsatish
    modalShurva.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonShurva.onclick = function() {
    modalShurva.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconShurva.onclick = function() {
    modalShurva.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalShurva) {
        modalShurva.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Тоок шорпо uchun)
var modalTookSh = document.getElementById("myModalTookSh"); // Modal oynani topish
var triggerImageTookSh = document.getElementById("openModalTookSh"); // Kartochkani topish
var closeIconTookSh = document.getElementById("closeIconTookSh"); // Ikonka
var closeModalButtonTookSh = document.getElementsByClassName("closeTookSh")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageTookSh.onclick = function() {
    modalTookSh.style.display = "flex"; // Modalni ko'rsatish
    modalTookSh.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonTookSh.onclick = function() {
    modalTookSh.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconTookSh.onclick = function() {
    modalTookSh.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalTookSh) {
        modalTookSh.style.display = "none";
    }
}


// Modalni ochish funksiyasi (Пелмень uchun)
var modalPelmen = document.getElementById("myModalPelmen"); // Modal oynani topish
var triggerImagePelmen = document.getElementById("openModalPelmen"); // Kartochkani topish
var closeIconPelmen = document.getElementById("closeIconPelmen"); // Ikonka
var closeModalButtonPelmen = document.getElementsByClassName("closePelmen")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImagePelmen.onclick = function() {
    modalPelmen.style.display = "flex"; // Modalni ko'rsatish
    modalPelmen.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonPelmen.onclick = function() {
    modalPelmen.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconPelmen.onclick = function() {
    modalPelmen.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalPelmen) {
        modalPelmen.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Тефтель шорпо uchun)
var modalTeftel = document.getElementById("myModalTeftel"); // Modal oynani topish
var triggerImageTeftel = document.getElementById("openModalTeftel"); // Kartochkani topish
var closeIconTeftel = document.getElementById("closeIconTeftel"); // Ikonka
var closeModalButtonTeftel = document.getElementsByClassName("closeTeftel")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageTeftel.onclick = function() {
    modalTeftel.style.display = "flex"; // Modalni ko'rsatish
    modalTeftel.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonTeftel.onclick = function() {
    modalTeftel.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconTeftel.onclick = function() {
    modalTeftel.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalTeftel) {
        modalTeftel.style.display = "none";
    }
}

// Modalni ochish funksiyasi (окрошка uchun)
var modalOkroshka = document.getElementById("myModalOkroshka"); // Modal oynani topish
var triggerImageOkroshka = document.getElementById("openModalOkroshka"); // Kartochkani topish
var closeIconOkroshka = document.getElementById("closeIconOkroshka"); // Ikonka
var closeModalButtonOkroshka = document.getElementsByClassName("closeOkroshka")[0]; // Yopish tugmasi (&times;)

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageOkroshka.onclick = function() {
    modalOkroshka.style.display = "flex"; // Modalni ko'rsatish
    modalOkroshka.style.animation = "fadeZoomIn 0.5s ease forwards"; // Animatsiya qo'shish
}

// Modalni yopish funksiyasi (&times; tugmasi)
closeModalButtonOkroshka.onclick = function() {
    modalOkroshka.style.display = "none"; // Modalni yopish
}

// Yopish ikonasi bosilganda modalni yopish
closeIconOkroshka.onclick = function() {
    modalOkroshka.style.display = "none"; // Modalni yopish
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalOkroshka) {
        modalOkroshka.style.display = "none";
    }
}

// Modalni ochish funksiyasi (Фирменный ассорти uchun)
var modalFirmenniy = document.getElementById("myModalFirmenniy");
var triggerImageFirmenniy = document.getElementById("openModalFirmenniy");
var closeIconFirmenniy = document.getElementById("closeIconFirmenniy");
var closeModalButtonFirmenniy = document.getElementsByClassName("closeFirmenniy")[0];

// Kartochkani bosganda modal oynani ochish funksiyasi
triggerImageFirmenniy.onclick = function() {
    modalFirmenniy.style.display = "flex";
}

// Modalni yopish funksiyasi
closeModalButtonFirmenniy.onclick = function() {
    modalFirmenniy.style.display = "none";
}

// Yopish ikonasi bosilganda modalni yopish
closeIconFirmenniy.onclick = function() {
    modalFirmenniy.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalFirmenniy) {
        modalFirmenniy.style.display = "none";
    }
}

// Kuurdak-Jiz modalni ochish va yopish funksiyalari
var modalKuurdakJiz = document.getElementById("myModalKuurdakJiz");
var closeIconKuurdakJiz = document.getElementById("closeIconKuurdakJiz");
var closeModalButtonKuurdakJiz = document.getElementsByClassName("closeKuurdakJiz")[0];

// Kuurdak-Jiz modalni ochish
document.getElementById("openModalKuurdakJiz").onclick = function() {
    modalKuurdakJiz.style.display = "flex";
}

// Kuurdak-Jiz modalni yopish
closeModalButtonKuurdakJiz.onclick = function() {
    modalKuurdakJiz.style.display = "none";
}
closeIconKuurdakJiz.onclick = function() {
    modalKuurdakJiz.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalKuurdakJiz) {
        modalKuurdakJiz.style.display = "none";
    }
}

// Kazan Kebab modalni ochish va yopish funksiyalari
var modalKazankebab = document.getElementById("myModalKazankebab");
var closeIconKazankebab = document.getElementById("closeIconKazankebab");
var closeModalButtonKazankebab = document.getElementsByClassName("closeKazankebab")[0];

// Kazan Kebab modalni ochish
document.getElementById("openModalKazankebab").onclick = function() {
    modalKazankebab.style.display = "flex";
}

// Kazan Kebab modalni yopish
closeModalButtonKazankebab.onclick = function() {
    modalKazankebab.style.display = "none";
}
closeIconKazankebab.onclick = function() {
    modalKazankebab.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalKazankebab) {
        modalKazankebab.style.display = "none";
    }
}

// Kazan Kebab2 modalni ochish va yopish funksiyalari
var modalKazankebab2 = document.getElementById("myModalKazankebab2");
var closeIconKazankebab2 = document.getElementById("closeIconKazankebab2");
var closeModalButtonKazankebab2 = document.getElementsByClassName("closeKazankebab2")[0];

// Kazan Kebab2 modalni ochish
document.getElementById("openModalKazankebab2").onclick = function() {
    modalKazankebab2.style.display = "flex";
}

// Kazan Kebab2 modalni yopish
closeModalButtonKazankebab2.onclick = function() {
    modalKazankebab2.style.display = "none";
}
closeIconKazankebab2.onclick = function() {
    modalKazankebab2.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalKazankebab2) {
        modalKazankebab2.style.display = "none";
    }
}


// Нокот шорек modalni ochish va yopish funksiyalari
var modalNokot = document.getElementById("myModalNokot");
var closeIconNokot = document.getElementById("closeIconNokot");
var closeModalButtonNokot = document.getElementsByClassName("closeNokot")[0];

// Нокот шорек modalni ochish
document.getElementById("openModalNokot").onclick = function() {
    modalNokot.style.display = "flex";
}

// Нокот шорек modalni yopish
closeModalButtonNokot.onclick = function() {
    modalNokot.style.display = "none";
}
closeIconNokot.onclick = function() {
    modalNokot.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalNokot) {
        modalNokot.style.display = "none";
    }
}

// Тущёнка modalni ochish va yopish funksiyalari
var modalTushonka = document.getElementById("myModalTushonka");
var closeIconTushonka = document.getElementById("closeIconTushonka");
var closeModalButtonTushonka = document.getElementsByClassName("closeTushonka")[0];

// Тущёнка modalni ochish
document.getElementById("openModalTushonka").onclick = function() {
    modalTushonka.style.display = "flex";
}

// Тущёнка modalni yopish
closeModalButtonTushonka.onclick = function() {
    modalTushonka.style.display = "none";
}
closeIconTushonka.onclick = function() {
    modalTushonka.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalTushonka) {
        modalTushonka.style.display = "none";
    }
}

// Бифстроганов modalni ochish va yopish funksiyalari
var modalBifstroganov = document.getElementById("myModalBifstroganov");
var closeIconBifstroganov = document.getElementById("closeIconBifstroganov");
var closeModalButtonBifstroganov = document.getElementsByClassName("closeBifstroganov")[0];

// Бифстроганов modalni ochish
document.getElementById("openModalBifstroganov").onclick = function() {
    modalBifstroganov.style.display = "flex";
}

// Бифстроганов modalni yopish
closeModalButtonBifstroganov.onclick = function() {
    modalBifstroganov.style.display = "none";
}
closeIconBifstroganov.onclick = function() {
    modalBifstroganov.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalBifstroganov) {
        modalBifstroganov.style.display = "none";
    }
}

// Думгаза говядина modalni ochish va yopish funksiyalari
var modalDumgaza = document.getElementById("myModalDumgaza");
var closeIconDumgaza = document.getElementById("closeIconDumgaza");
var closeModalButtonDumgaza = document.getElementsByClassName("closeDumgaza")[0];

// Думгаза говядина modalni ochish
document.getElementById("openModalDumgaza").onclick = function() {
    modalDumgaza.style.display = "flex";
}

// Думгаза говядина modalni yopish
closeModalButtonDumgaza.onclick = function() {
    modalDumgaza.style.display = "none";
}
closeIconDumgaza.onclick = function() {
    modalDumgaza.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalDumgaza) {
        modalDumgaza.style.display = "none";
    }
}

// Нарын modalni ochish va yopish funksiyalari
var modalNarin = document.getElementById("myModalNarin");
var closeIconNarin = document.getElementById("closeIconNarin");
var closeModalButtonNarin = document.getElementsByClassName("closeNarin")[0];

// Нарын modalni ochish
document.getElementById("openModalNarin").onclick = function() {
    modalNarin.style.display = "flex";
}

// Нарын modalni yopish
closeModalButtonNarin.onclick = function() {
    modalNarin.style.display = "none";
}
closeIconNarin.onclick = function() {
    modalNarin.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalNarin) {
        modalNarin.style.display = "none";
    }
}

// Беш бармак modalni ochish va yopish funksiyalari
var modalBeshBarmak = document.getElementById("myModalBeshBarmak");
var closeIconBeshBarmak = document.getElementById("closeIconBeshBarmak");
var closeModalButtonBeshBarmak = document.getElementsByClassName("closeBeshBarmak")[0];

// Беш бармак modalni ochish
document.getElementById("openModalBeshBarmak").onclick = function() {
    modalBeshBarmak.style.display = "flex";
}

// Беш бармак modalni yopish
closeModalButtonBeshBarmak.onclick = function() {
    modalBeshBarmak.style.display = "none";
}
closeIconBeshBarmak.onclick = function() {
    modalBeshBarmak.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalBeshBarmak) {
        modalBeshBarmak.style.display = "none";
    }
}

// Манты modalni ochish va yopish funksiyalari
var modalManti = document.getElementById("myModalManti");
var closeIconManti = document.getElementById("closeIconManti");
var closeModalButtonManti = document.getElementsByClassName("closeManti")[0];

// Манты modalni ochish
document.getElementById("openModalManti").onclick = function() {
    modalManti.style.display = "flex";
}

// Манты modalni yopish
closeModalButtonManti.onclick = function() {
    modalManti.style.display = "none";
}
closeIconManti.onclick = function() {
    modalManti.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalManti) {
        modalManti.style.display = "none";
    }
}

// Турк Кебаб modalni ochish va yopish funksiyalari
var modalKebab = document.getElementById("myModalKebab");
var closeIconKebab = document.getElementById("closeIconKebab");
var closeModalButtonKebab = document.getElementsByClassName("closeKebab")[0];

// Турк Кебаб modalni ochish
document.getElementById("openModalKebab").onclick = function() {
    modalKebab.style.display = "flex";
}

// Турк Кебаб modalni yopish
closeModalButtonKebab.onclick = function() {
    modalKebab.style.display = "none";
}
closeIconKebab.onclick = function() {
    modalKebab.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalKebab) {
        modalKebab.style.display = "none";
    }
}

// Ташкент Плов modalni ochish va yopish funksiyalari
var modalPlov = document.getElementById("myModalPlov");
var closeIconPlov = document.getElementById("closeIconPlov");
var closeModalButtonPlov = document.getElementsByClassName("closePlov")[0];

// Ташкент Плов modalni ochish
document.getElementById("openModalPlov").onclick = function() {
    modalPlov.style.display = "flex";
}

// Ташкент Плов modalni yopish
closeModalButtonPlov.onclick = function() {
    modalPlov.style.display = "none";
}
closeIconPlov.onclick = function() {
    modalPlov.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalPlov) {
        modalPlov.style.display = "none";
    }
}

// Суйру Лагман modalni ochish va yopish funksiyalari
var modalLagman = document.getElementById("myModalLagman");
var closeIconLagman = document.getElementById("closeIconLagman");
var closeModalButtonLagman = document.getElementsByClassName("closeLagman")[0];

// Суйру Лагман modalni ochish
document.getElementById("openModalLagman").onclick = function() {
    modalLagman.style.display = "flex";
}

// Суйру Лагман modalni yopish
closeModalButtonLagman.onclick = function() {
    modalLagman.style.display = "none";
}
closeIconLagman.onclick = function() {
    modalLagman.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalLagman) {
        modalLagman.style.display = "none";
    }
}

// Уйгур Лагман modalni ochish va yopish funksiyalari
var modalLagmanUygur = document.getElementById("myModalLagmanUygur");
var closeIconLagmanUygur = document.getElementById("closeIconLagmanUygur");
var closeModalButtonLagmanUygur = document.getElementsByClassName("closeLagmanUygur")[0];

// Уйгур Лагман modalni ochish
document.getElementById("openModalLagmanUygur").onclick = function() {
    modalLagmanUygur.style.display = "flex";
}

// Уйгур Лагман modalni yopish
closeModalButtonLagmanUygur.onclick = function() {
    modalLagmanUygur.style.display = "none";
}
closeIconLagmanUygur.onclick = function() {
    modalLagmanUygur.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalLagmanUygur) {
        modalLagmanUygur.style.display = "none";
    }
}

// Айримсай modalni ochish va yopish funksiyalari
var modalAyrimsay = document.getElementById("myModalAyrimsay");
var closeIconAyrimsay = document.getElementById("closeIconAyrimsay");
var closeModalButtonAyrimsay = document.getElementsByClassName("closeAyrimsay")[0];

// Айримсай modalni ochish
document.getElementById("openModalAyrimsay").onclick = function() {
    modalAyrimsay.style.display = "flex";
}

// Айримсай modalni yopish
closeModalButtonAyrimsay.onclick = function() {
    modalAyrimsay.style.display = "none";
}
closeIconAyrimsay.onclick = function() {
    modalAyrimsay.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalAyrimsay) {
        modalAyrimsay.style.display = "none";
    }
}

// Этсай modalni ochish va yopish funksiyalari
var modalEtsay = document.getElementById("myModalEtsay");
var closeIconEtsay = document.getElementById("closeIconEtsay");
var closeModalButtonEtsay = document.getElementsByClassName("closeEtsay")[0];

// Этсай modalni ochish
document.getElementById("openModalEtsay").onclick = function() {
    modalEtsay.style.display = "flex";
}

// Этсай modalni yopish
closeModalButtonEtsay.onclick = function() {
    modalEtsay.style.display = "none";
}
closeIconEtsay.onclick = function() {
    modalEtsay.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalEtsay) {
        modalEtsay.style.display = "none";
    }
}

// Сокоро modalni ochish va yopish funksiyalari
var modalSokoro = document.getElementById("myModalSokoro");
var closeIconSokoro = document.getElementById("closeIconSokoro");
var closeModalButtonSokoro = document.getElementsByClassName("closeSokoro")[0];

// Сокоро modalni ochish
document.getElementById("openModalSokoro").onclick = function() {
    modalSokoro.style.display = "flex";
}

// Сокоро modalni yopish
closeModalButtonSokoro.onclick = function() {
    modalSokoro.style.display = "none";
}
closeIconSokoro.onclick = function() {
    modalSokoro.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalSokoro) {
        modalSokoro.style.display = "none";
    }
}

// Жаз-Жиз modalni ochish va yopish funksiyalari
var modalJazJiz = document.getElementById("myModalJazJiz");
var closeIconJazJiz = document.getElementById("closeIconJazJiz");
var closeModalButtonJazJiz = document.getElementsByClassName("closeJazJiz")[0];

// Жаз-Жиз modalni ochish
document.getElementById("openModalJazJiz").onclick = function() {
    modalJazJiz.style.display = "flex";
}

// Жаз-Жиз modalni yopish
closeModalButtonJazJiz.onclick = function() {
    modalJazJiz.style.display = "none";
}
closeIconJazJiz.onclick = function() {
    modalJazJiz.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalJazJiz) {
        modalJazJiz.style.display = "none";
    }
}

// Сумборо modalni ochish va yopish funksiyalari
var modalSumboro = document.getElementById("myModalSumboro");
var closeIconSumboro = document.getElementById("closeIconSumboro");
var closeModalButtonSumboro = document.getElementsByClassName("closeSumboro")[0];

// Сумборо modalni ochish
document.getElementById("openModalSumboro").onclick = function() {
    modalSumboro.style.display = "flex";
}

// Сумборо modalni yopish
closeModalButtonSumboro.onclick = function() {
    modalSumboro.style.display = "none";
}
closeIconSumboro.onclick = function() {
    modalSumboro.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalSumboro) {
        modalSumboro.style.display = "none";
    }
}

// Куурума Лагман modalni ochish va yopish funksiyalari
var modalKuurmaLagman = document.getElementById("myModalKuurmaLagman");
var closeIconKuurmaLagman = document.getElementById("closeIconKuurmaLagman");
var closeModalButtonKuurmaLagman = document.getElementsByClassName("closeKuurmaLagman")[0];

// Куурума Лагман modalni ochish
document.getElementById("openModalKuurmaLagman").onclick = function() {
    modalKuurmaLagman.style.display = "flex";
}

// Куурума Лагман modalni yopish
closeModalButtonKuurmaLagman.onclick = function() {
    modalKuurmaLagman.style.display = "none";
}
closeIconKuurmaLagman.onclick = function() {
    modalKuurmaLagman.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalKuurmaLagman) {
        modalKuurmaLagman.style.display = "none";
    }
}

// ТookSay modalni ochish va yopish funksiyalari
var modalTookSay = document.getElementById("myModalTookSay");
var closeIconTookSay = document.getElementById("closeIconTookSay");
var closeModalButtonTookSay = document.getElementsByClassName("closeTookSay")[0];

// ТookSay modalni ochish
document.getElementById("openModalTookSay").onclick = function() {
    modalTookSay.style.display = "flex";
}

// ТookSay modalni yopish
closeModalButtonTookSay.onclick = function() {
    modalTookSay.style.display = "none";
}
closeIconTookSay.onclick = function() {
    modalTookSay.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalTookSay) {
        modalTookSay.style.display = "none";
    }
}


// Мампар modalni ochish va yopish funksiyalari
var modalMampar = document.getElementById("myModalMampar");
var closeIconMampar = document.getElementById("closeIconMampar");
var closeModalButtonMampar = document.getElementsByClassName("closeMampar")[0];

// Мампар modalni ochish
document.getElementById("openModalMampar").onclick = function() {
    modalMampar.style.display = "flex";
}

// Мампар modalni yopish
closeModalButtonMampar.onclick = function() {
    modalMampar.style.display = "none";
}
closeIconMampar.onclick = function() {
    modalMampar.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalMampar) {
        modalMampar.style.display = "none";
    }
}

// Ганфан modalni ochish va yopish funksiyalari
var modalGanfan = document.getElementById("myModalGanfan");
var closeIconGanfan = document.getElementById("closeIconGanfan");
var closeModalButtonGanfan = document.getElementsByClassName("closeGanfan")[0];

// Ганфан modalni ochish
document.getElementById("openModalGanfan").onclick = function() {
    modalGanfan.style.display = "flex";
}

// Ганфан modalni yopish
closeModalButtonGanfan.onclick = function() {
    modalGanfan.style.display = "none";
}
closeIconGanfan.onclick = function() {
    modalGanfan.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalGanfan) {
        modalGanfan.style.display = "none";
    }
}

// Канада modalni ochish va yopish funksiyalari
var modalKanada = document.getElementById("myModalKanada");
var closeIconKanada = document.getElementById("closeIconKanada");
var closeModalButtonKanada = document.getElementsByClassName("closeKanada")[0];

// Канада modalni ochish
document.getElementById("openModalKanada").onclick = function() {
    modalKanada.style.display = "flex";
}

// Канада modalni yopish
closeModalButtonKanada.onclick = function() {
    modalKanada.style.display = "none";
}
closeIconKanada.onclick = function() {
    modalKanada.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalKanada) {
        modalKanada.style.display = "none";
    }
}


// Аляска modalni ochish va yopish funksiyalari
var modalAlyaska = document.getElementById("myModalAlyaska");
var closeIconAlyaska = document.getElementById("closeIconAlyaska");
var closeModalButtonAlyaska = document.getElementsByClassName("closeAlyaska")[0];

// Аляска modalni ochish
document.getElementById("openModalAlyaska").onclick = function() {
    modalAlyaska.style.display = "flex";
}

// Аляска modalni yopish
closeModalButtonAlyaska.onclick = function() {
    modalAlyaska.style.display = "none";
}
closeIconAlyaska.onclick = function() {
    modalAlyaska.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalAlyaska) {
        modalAlyaska.style.display = "none";
    }
}

// Хасса Гурсом modalni ochish va yopish funksiyalari
var modalHassoGursom = document.getElementById("myModalHassoGursom");
var closeIconHassoGursom = document.getElementById("closeIconHassoGursom");
var closeModalButtonHassoGursom = document.getElementsByClassName("closeHassoGursom")[0];

// Хасса Гурсом modalni ochish
document.getElementById("openModalHassoGursom").onclick = function() {
    modalHassoGursom.style.display = "flex";
}

// Хасса Гурсом modalni yopish
closeModalButtonHassoGursom.onclick = function() {
    modalHassoGursom.style.display = "none";
}
closeIconHassoGursom.onclick = function() {
    modalHassoGursom.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalHassoGursom) {
        modalHassoGursom.style.display = "none";
    }
}

// Лондон modalni ochish va yopish funksiyalari
var modalLondon = document.getElementById("myModalLondon");
var closeIconLondon = document.getElementById("closeIconLondon");
var closeModalButtonLondon = document.getElementsByClassName("closeLondon")[0];

// Лондон modalni ochish
document.getElementById("openModalLondon").onclick = function() {
    modalLondon.style.display = "flex";
}

// Лондон modalni yopish
closeModalButtonLondon.onclick = function() {
    modalLondon.style.display = "none";
}
closeIconLondon.onclick = function() {
    modalLondon.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalLondon) {
        modalLondon.style.display = "none";
    }
}


// Барселона modalni ochish va yopish funksiyalari
var modalBarselona = document.getElementById("myModalBarselona");
var closeIconBarselona = document.getElementById("closeIconBarselona");
var closeModalButtonBarselona = document.getElementsByClassName("closeBarselona")[0];

// Modalni ochish
document.getElementById("openModalBarselona").onclick = function() {
    modalBarselona.style.display = "flex";
}

// Modalni yopish
closeModalButtonBarselona.onclick = function() {
    modalBarselona.style.display = "none";
}

closeIconBarselona.onclick = function() {
    modalBarselona.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalBarselona) {
        modalBarselona.style.display = "none";
    }
}

// Бонито modalni ochish va yopish funksiyalari
var modalBonito = document.getElementById("myModalBonito");
var closeIconBonito = document.getElementById("closeIconBonito");
var closeModalButtonBonito = document.getElementsByClassName("closeBonito")[0];

// Бонито modalni ochish
document.getElementById("openModalBonito").onclick = function() {
    modalBonito.style.display = "flex";
}

// Бонито modalni yopish   
closeModalButtonBonito.onclick = function() {
    modalBonito.style.display = "none";
}
closeIconBonito.onclick = function() {
    modalBonito.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalBonito) {
        modalBonito.style.display = "none";
    }
}


// Филадельфия с Угрём modalni ochish va yopish funksiyalari
var modalPhiladelphiaUgrom = document.getElementById("myModalPhiladelphiaUgrom");
var closeIconPhiladelphiaUgrom = document.getElementById("closeIconPhiladelphiaUgrom");
var closeModalButtonPhiladelphiaUgrom = document.getElementsByClassName("closePhiladelphiaUgrom")[0];

// Филадельфия с Угрём modalni ochish
document.getElementById("openModalPhiladelphiaUgrom").onclick = function() {
    modalPhiladelphiaUgrom.style.display = "flex";
}

// Филадельфия с Угрём modalni yopish   
closeModalButtonPhiladelphiaUgrom.onclick = function() {
    modalPhiladelphiaUgrom.style.display = "none";
}
closeIconPhiladelphiaUgrom.onclick = function() {
    modalPhiladelphiaUgrom.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalPhiladelphiaUgrom) {
        modalPhiladelphiaUgrom.style.display = "none";
    }
}


// Калифорния с Лососем modalni ochish va yopish funksiyalari
var modalCaliforniaLosos = document.getElementById("myModalCaliforniaLosos");
var closeIconCaliforniaLosos = document.getElementById("closeIconCaliforniaLosos");
var closeModalButtonCaliforniaLosos = document.getElementsByClassName("closeCaliforniaLosos")[0];

// Калифорния с Лососем modalni ochish
document.getElementById("openModalCaliforniaLosos").onclick = function() {
    modalCaliforniaLosos.style.display = "flex";
}

// Калифорния с Лососем modalni yopish   
closeModalButtonCaliforniaLosos.onclick = function() {
    modalCaliforniaLosos.style.display = "none";
}
closeIconCaliforniaLosos.onclick = function() {
    modalCaliforniaLosos.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalCaliforniaLosos) {
        modalCaliforniaLosos.style.display = "none";
    }
}

// Филадельфия modalni ochish va yopish funksiyalari
var modalPhiladelphia = document.getElementById("myModalPhiladelphia");
var closeIconPhiladelphia = document.getElementById("closeIconPhiladelphia");
var closeModalButtonPhiladelphia = document.getElementsByClassName("closePhiladelphia")[0];

// Филадельфия modalni ochish
document.getElementById("openModalPhiladelphia").onclick = function() {
    modalPhiladelphia.style.display = "flex";
}

// Филадельфия modalni yopish   
closeModalButtonPhiladelphia.onclick = function() {
    modalPhiladelphia.style.display = "none";
}
closeIconPhiladelphia.onclick = function() {
    modalPhiladelphia.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalPhiladelphia) {
        modalPhiladelphia.style.display = "none";
    }
}

// Запкчённый с Угрём modalni ochish va yopish funksiyalari
var modalZapchyonny = document.getElementById("myModalZapchyonny");
var closeIconZapchyonny = document.getElementById("closeIconZapchyonny");
var closeModalButtonZapchyonny = document.getElementsByClassName("closeZapchyonny")[0];

// Запкчённый с Угрём modalni ochish
document.getElementById("openModalZapchyonny").onclick = function() {
    modalZapchyonny.style.display = "flex";
}

// Запкчённый с Угрём modalni yopish   
closeModalButtonZapchyonny.onclick = function() {
    modalZapchyonny.style.display = "none";
}
closeIconZapchyonny.onclick = function() {
    modalZapchyonny.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalZapchyonny) {
        modalZapchyonny.style.display = "none";
    }
}

// Курочка Гриль modalni ochish va yopish funksiyalari
var modalKurochkaGrill = document.getElementById("myModalKurochkaGrill");
var closeIconKurochkaGrill = document.getElementById("closeIconKurochkaGrill");
var closeModalButtonKurochkaGrill = document.getElementsByClassName("closeKurochkaGrill")[0];

// Курочка Гриль modalni ochish
document.getElementById("openModalKurochkaGrill").onclick = function() {
    modalKurochkaGrill.style.display = "flex";
}

// Курочка Гриль modalni yopish
closeModalButtonKurochkaGrill.onclick = function() {
    modalKurochkaGrill.style.display = "none";
}
closeIconKurochkaGrill.onclick = function() {
    modalKurochkaGrill.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalKurochkaGrill) {
        modalKurochkaGrill.style.display = "none";
    }
}

// Запечённый Ласось modalni ochish va yopish funksiyalari
var modalZapchyonnyLasos = document.getElementById("myModalZapchyonnyLasos");
var closeIconZapchyonnyLasos = document.getElementById("closeIconZapchyonnyLasos");
var closeModalButtonZapchyonnyLasos = document.getElementsByClassName("closeZapchyonnyLasos")[0];

// Запечённый Ласось modalni ochish
document.getElementById("openModalZapchyonnyLasos").onclick = function() {
    modalZapchyonnyLasos.style.display = "flex";
}

// Запечённый Ласось modalni yopish
closeModalButtonZapchyonnyLasos.onclick = function() {
    modalZapchyonnyLasos.style.display = "none";
}
closeIconZapchyonnyLasos.onclick = function() {
    modalZapchyonnyLasos.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalZapchyonnyLasos) {
        modalZapchyonnyLasos.style.display = "none";
    }
}


// Темпура с Курицей modalni ochish va yopish funksiyalari
var modalTempuraChicken = document.getElementById("myModalTempuraChicken");
var closeIconTempuraChicken = document.getElementById("closeIconTempuraChicken");
var closeModalButtonTempuraChicken = document.getElementsByClassName("closeTempuraChicken")[0];

// Темпура с Курицей modalni ochish
document.getElementById("openModalTempuraChicken").onclick = function() {
    modalTempuraChicken.style.display = "flex";
}

// Темпура с Курицей modalni yopish
closeModalButtonTempuraChicken.onclick = function() {
    modalTempuraChicken.style.display = "none";
}
closeIconTempuraChicken.onclick = function() {
    modalTempuraChicken.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalTempuraChicken) {
        modalTempuraChicken.style.display = "none";
    }
}


// Темпура с Лососем modalni ochish va yopish funksiyalari
var modalTempuraSalmon = document.getElementById("myModalTempuraSalmon");
var closeIconTempuraSalmon = document.getElementById("closeIconTempuraSalmon");
var closeModalButtonTempuraSalmon = document.getElementsByClassName("closeTempuraSalmon")[0];

// Темпура с Лососем modalni ochish
document.getElementById("openModalTempuraSalmon").onclick = function() {
    modalTempuraSalmon.style.display = "flex";
}

// Темпура с Лососем modalni yopish
closeModalButtonTempuraSalmon.onclick = function() {
    modalTempuraSalmon.style.display = "none";
}
closeIconTempuraSalmon.onclick = function() {
    modalTempuraSalmon.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalTempuraSalmon) {
        modalTempuraSalmon.style.display = "none";
    }
}

// Темпура с Угрём modalni ochish va yopish funksiyalari
var modalTempuraUgrom = document.getElementById("myModalTempuraUgrom");
var closeIconTempuraUgrom = document.getElementById("closeIconTempuraUgrom");
var closeModalButtonTempuraUgrom = document.getElementsByClassName("closeTempuraUgrom")[0];

// Темпура с Угрём modalni ochish
document.getElementById("openModalTempuraUgrom").onclick = function() {
    modalTempuraUgrom.style.display = "flex";
}

// Темпура с Угрём modalni yopish
closeModalButtonTempuraUgrom.onclick = function() {
    modalTempuraUgrom.style.display = "none";
}
closeIconTempuraUgrom.onclick = function() {
    modalTempuraUgrom.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalTempuraUgrom) {
        modalTempuraUgrom.style.display = "none";
    }
}

// Сет Микс modalni ochish va yopish funksiyalari
var modalSetMix = document.getElementById("myModalSetMix");
var closeIconSetMix = document.getElementById("closeIconSetMix");
var closeModalButtonSetMix = document.getElementsByClassName("closeSetMix")[0];

// Сет Микс modalni ochish
document.getElementById("openModalSetMix").onclick = function() {
    modalSetMix.style.display = "flex";
}

// Сет Микс modalni yopish
closeModalButtonSetMix.onclick = function() {
    modalSetMix.style.display = "none";
}
closeIconSetMix.onclick = function() {
    modalSetMix.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalSetMix) {
        modalSetMix.style.display = "none";
    }
}

// Шашлык Кой Эти modalni ochish va yopish funksiyalari
var modalShashlikKoyEti = document.getElementById("myModalShashlikKoyEti");
var closeIconShashlikKoyEti = document.getElementById("closeIconShashlikKoyEti");
var closeModalButtonShashlikKoyEti = document.getElementsByClassName("closeShashlikKoyEti")[0];

// Шашлык Кой Эти modalni ochish
document.getElementById("openModalShashlikKoyEti").onclick = function() {
    modalShashlikKoyEti.style.display = "flex";
}

// Шашлык Кой Эти modalni yopish
closeModalButtonShashlikKoyEti.onclick = function() {
    modalShashlikKoyEti.style.display = "none";
}
closeIconShashlikKoyEti.onclick = function() {
    modalShashlikKoyEti.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalShashlikKoyEti) {
        modalShashlikKoyEti.style.display = "none";
    }
}

// Шашлык Мал Эти modalni ochish va yopish funksiyalari
var modalShashlikMalEti = document.getElementById("myModalShashlikMalEti");
var closeIconShashlikMalEti = document.getElementById("closeIconShashlikMalEti");
var closeModalButtonShashlikMalEti = document.getElementsByClassName("closeShashlikMalEti")[0];

// Шашлык Мал Эти modalni ochish
document.getElementById("openModalShashlikMalEti").onclick = function() {
    modalShashlikMalEti.style.display = "flex";
}

// Шашлык Мал Эти modalni yopish
closeModalButtonShashlikMalEti.onclick = function() {
    modalShashlikMalEti.style.display = "none";
}
closeIconShashlikMalEti.onclick = function() {
    modalShashlikMalEti.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalShashlikMalEti) {
        modalShashlikMalEti.style.display = "none";
    }
}

// Шашлык Кебаб modalni ochish va yopish funksiyalari
var modalShashlikKebab = document.getElementById("myModalShashlikKebab");
var closeIconShashlikKebab = document.getElementById("closeIconShashlikKebab");
var closeModalButtonShashlikKebab = document.getElementsByClassName("closeShashlikKebab")[0];

// Шашлык Кебаб modalni ochish
document.getElementById("openModalShashlikKebab").onclick = function() {
    modalShashlikKebab.style.display = "flex";
}

// Шашлык Кебаб modalni yopish
closeModalButtonShashlikKebab.onclick = function() {
    modalShashlikKebab.style.display = "none";
}
closeIconShashlikKebab.onclick = function() {
    modalShashlikKebab.style.display = "none";
}

// Modal tashqarisiga bosilganda modalni yopish
window.onclick = function(event) {
    if (event.target == modalShashlikKebab) {
        modalShashlikKebab.style.display = "none";
    }
}


// Самса Кой Эти modalni ochish va yopish funksiyalari
var modalSamsaKoyEti = document.getElementById("myModalSamsaKoyEti");
var closeIconSamsaKoyEti = document.getElementById("closeIconSamsaKoyEti");
var closeModalButtonSamsaKoyEti = document.getElementsByClassName("closeSamsaKoyEti")[0];

// Самса Кой Эти modalni ochish
document.getElementById("openModalSamsaKoyEti").onclick = function() {
    modalSamsaKoyEti.style.display = "flex";
}

// Самса Кой Эти modalni yopish
closeModalButtonSamsaKoyEti.onclick = function() {
    modalSamsaKoyEti.style.display = "none";
}
closeIconSamsaKoyEti.onclick = function() {
    modalSamsaKoyEti.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalSamsaKoyEti) {
        modalSamsaKoyEti.style.display = "none";
    }
}

// Самса Мал Эти modalni ochish va yopish funksiyalari
var modalSamsaMalEti = document.getElementById("myModalSamsaMalEti");
var closeIconSamsaMalEti = document.getElementById("closeIconSamsaMalEti");
var closeModalButtonSamsaMalEti = document.getElementsByClassName("closeSamsaMalEti")[0];

// Самса Мал Эти modalni ochish
document.getElementById("openModalSamsaMalEti").onclick = function() {
    modalSamsaMalEti.style.display = "flex";
}

// Самса Мал Эти modalni yopish
closeModalButtonSamsaMalEti.onclick = function() {
    modalSamsaMalEti.style.display = "none";
}
closeIconSamsaMalEti.onclick = function() {
    modalSamsaMalEti.style.display = "none";
}

// Modal tashqarisiga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modalSamsaMalEti) {
        modalSamsaMalEti.style.display = "none";
    }
}


window.onload = function() {
    const desserts = document.querySelectorAll('.dessert-item');
    desserts.forEach((dessert, index) => {
        dessert.style.animationDelay = `${index * 0.2}s`;
        dessert.classList.add('fade-in');
    });
};

function smoothScroll(target, duration, offset) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top - offset;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const offset = 220; // Bu yerda rasmni qancha offset (masofa) bilan ko'rsatishni sozlaysiz
        smoothScroll(this.getAttribute('href'), 3000, offset); // 2000 ms davomida silliq o'tish + offset bilan
    });
});

// Kartalarni olish
const cards = document.querySelectorAll('.card');

// Intersection Observer API bilan kuzatish
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // 'show' klassini qo'shish
    }
  });
});

// Har bir kartani kuzatish
cards.forEach(card => {
  observer.observe(card);
});
