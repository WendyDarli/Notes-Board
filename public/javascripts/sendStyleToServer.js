document.querySelectorAll('.saveBtn').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        let mynotee = button.closest('.mynote');
        let mynoteeheader = mynotee.querySelector('.mynoteheader');

        const index = button.getAttribute('data-index');

        // Get styles from the elements
        const top = mynotee.style.top;
        const left = mynotee.style.left;
        const backgroundColor = mynotee.style.backgroundColor;
        const backgroundImage = mynoteeheader.style.backgroundImage;
        const boxShadow = mynotee.style.boxShadow;
        const rotation = mynotee.style.transform;

        // Send styles to the server
        fetch('http://localhost:3000/savestyle', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                index: index,
                "top": top,
                "left": left,
                "backgroundColor": backgroundColor,
                "backgroundImage": backgroundImage,
                "boxShadow": boxShadow,
                "transform": rotation
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send CSS');
            }
            console.log('CSS sent successfully');
        })
        .catch(error => {
            console.error('Error sending CSS:', error);
        });
    });
});
