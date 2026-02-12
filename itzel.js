const mensajes = [
    "A veces alguien piensa en ti más de lo que imaginas ✨",
    "Qué curioso que alguien siempre sonría cuando escucha tu nombre 👀",
    "Hay personas que llegan y sin darse cuenta lo cambian todo 💫",
    "No sé si es coincidencia… pero siempre destacas 🌸",
    "Algunas personas simplemente tienen algo diferente 💙",
    "No es indirecta… pero tampoco es directa 😌"
];

const colores = [
    "linear-gradient(45deg, #667eea, #764ba2)",
    "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "linear-gradient(45deg, #a18cd1, #fbc2eb)",
    "linear-gradient(45deg, #84fab0, #8fd3f4)"
];

const mensajeBtn = document.getElementById("mensajeBtn");
const colorBtn = document.getElementById("colorBtn");

mensajeBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje").innerText = mensajes[random];
});

colorBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * colores.length);
    document.body.style.background = colores[random];
});
