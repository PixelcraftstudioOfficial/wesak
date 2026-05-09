function openModal(imageSrc, text) {
    const modal = document.getElementById("storyModal");
    const modalImg = document.getElementById("modalImg");
    const modalText = document.getElementById("modalText");
    modalImg.src = imageSrc;
    modalText.innerText = text;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("storyModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("storyModal");
    if (event.target == modal) { modal.style.display = "none"; }
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicToggleBtn");
    if (music.paused) {
        music.play();
        btn.innerText = "⏸️ Pause Music";
    } else {
        music.pause();
        btn.innerText = "🎵 Play Music";
    }
}