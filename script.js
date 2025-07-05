document.addEventListener("scroll", function () {
    const words = ["Hoolii", "Naaaaay", "Todo bien?"];
    const container = document.querySelector(".words-container");

    const wordElement = document.createElement("span");
    wordElement.classList.add("word");
    wordElement.textContent = words[Math.floor(Math.random() * words.length)];

    // Posición aleatoria en la pantalla
    wordElement.style.left = `${Math.random() * 90 + 5}%`;
    wordElement.style.top = `${Math.random() * 90 + 5}%`;

    container.appendChild(wordElement);

    // Eliminar palabra después de la animación
    setTimeout(() => {
        wordElement.remove();
    }, 2000);
});
