//TO FIX movimento se torna lento ao mover a nota, arrumar lógica ()
//anexar a rotação à uma nota especifica, caso o usuário tenha mais de uma nota, não irá girar todas juntas

let isRotating = false;

function getCenter(element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    return { x: left + width / 2, y: top + height / 2 };
}

const mynote = document.getElementById("mynote");
const mynoteCenter = getCenter(mynote);

document.addEventListener("mousedown", (event) => {
    if (event.button === 2) {
        isRotating = true;
    }
});

document.addEventListener("mouseup", (event) => {
    if (event.button === 2) {
        isRotating = false;
    }
});

addEventListener("mousemove", ({ clientX, clientY }) => {
    if (isRotating) {
        const angle = Math.atan2(clientY - mynoteCenter.y, clientX - mynoteCenter.x);
        mynote.style.transform = `rotate(${angle}rad)`;
    }
});

