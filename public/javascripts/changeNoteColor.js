
const mynoteheader = document.getElementById("mynoteheader");
const notes = document.getElementsByClassName("note");

function Color(noteColor, headerColor){
    this.noteColor = noteColor;
    this.headerColor = headerColor;
}

const pink = new Color("pink", "#fba5b4");
const yellow = new Color("#fffdc0", "#cbcd88");
const blue = new Color("#c4d5f9", "#97b1e6");
const purple = new Color("#d2c4f9", "#b29fe8");
const green = new Color("#c4f9ce", "#98e596");
const red = new Color("#f9c4c4", "#e59696");
const orange = new Color("#f2c6ac", "#cd9a7c");

const colors = [pink, yellow, blue, purple, green, red, orange];
let currentColorIndex = 0;


mynote.addEventListener("dblclick", (event) => {
    
    currentColorIndex = (currentColorIndex + 1) % colors.length; 

    //apply color
    mynote.style.backgroundColor = colors[currentColorIndex].noteColor; 
    mynoteheader.style.backgroundImage = `linear-gradient(${colors[currentColorIndex].headerColor}, ${colors[currentColorIndex].noteColor})`;
    
    for (let note of notes) {
        note.style.backgroundColor = colors[currentColorIndex].noteColor;
    }
      
});

