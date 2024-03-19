const mynote = document.getElementsByClassName("mynote")[0];
let rotation = 0;
  
  mynote.addEventListener("mousedown", (event) => {
    if (event.button === 2) {
        rotation += 0.2;
        mynote.style.boxShadow = "10px 10px 10.3px -1px rgba(0, 0, 0, 0.25)";
        if (rotation > 0.2) {
            rotation = -0.2; 
            mynote.style.boxShadow = "-10px 10px 10.3px -1px rgba(0, 0, 0, 0.25)";
        }
        mynote.style.transform = `rotate(${rotation}rad)`;
    }
});

//prevent context menu from appearing
window.addEventListener(`contextmenu`, (e) => e.preventDefault());