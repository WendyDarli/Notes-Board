const mynotes = document.getElementsByClassName("mynote");
let rotation = 0;

for (let i = 0; i < mynotes.length; i++) {
    mynotes[i].addEventListener("mousedown", function(event) {
        
        if (event.button === 2) { 
            rotation += 0.2;
            this.style.boxShadow = "10px 10px 10.3px -1px rgba(0, 0, 0, 0.25)";
            if (rotation > 0.2) {
                rotation = -0.2;
                this.style.boxShadow = "-10px 10px 10.3px -1px rgba(0, 0, 0, 0.25)";
            }
            this.style.transform = `rotate(${rotation}rad)`;
        }
    });
};

//prevent context menu from appearing when doublecklick
window.addEventListener(`contextmenu`, (e) => e.preventDefault());
