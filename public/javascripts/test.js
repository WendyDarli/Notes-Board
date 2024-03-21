const mynotee = document.getElementsByClassName("mynote");
const mynoteheaderr = document.getElementsByClassName('mynoteheader');

//getting style customization values
for (let i = 0; i < mynotee.length; i++) {
    mynotee[i].addEventListener("click", function(event){

        const top = mynotee[i].style.top;
        const left = mynotee[i].style.left;
        const rotation = mynotee[i].style.transform;
        
        const backgroundColor = mynotee[i].style.backgroundColor;
        const boxShadow = mynotee[i].style.boxShadow;

        console.log("Current position - top: " + top + "; left: " + left);
        console.log("Rotation: " + rotation);
        
        console.log("Background color: " + backgroundColor);
        console.log("Box shadow: " + boxShadow);
        console.log("note index: " + i );
    })
}

//Logic:

//those values will be sent to the server and saved in a file that will define the 
//inline style in order to save the customization made by the user

//once the style is sent the events of drag, rotate and change color will be disabled for the note