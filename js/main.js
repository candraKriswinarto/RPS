const choice = document.querySelectorAll('.box-select');

choice.forEach((choice) => {
    choice.addEventListener('click', () => {
        console.log(choice.id);
    });
});