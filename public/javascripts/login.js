window.addEventListener('load', () => {

    let nameBox = document.querySelector('input');
    let form = document.querySelector('form');


    
        form.addEventListener('submit', (e) => {
            if (nameBox.value != '') {
            sessionStorage.setItem('nombreUsuario', nameBox.value)
        } else {
            e.preventDefault();
        }
        })
    








    console.log(nameBox.value);

})