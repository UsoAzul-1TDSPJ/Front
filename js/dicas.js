const dicas = document.querySelectorAll('.dica');

dicas.forEach(dica => {
    dica.addEventListener('click', () => {
        
        const currentColor = dica.style.backgroundColor;

        if (currentColor === 'rgb(52, 152, 219)') { 
            dica.style.backgroundColor = 'white';
            dica.style.color = 'black';
        } else {
            
            dica.style.backgroundColor = '#3498db';
            dica.style.color = 'white'; 
        }
    });
});
