window.addEventListener('load', () => {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {

        fetch('https://api.giphy.com/v1/gifs/random?api_key=3HTm0YidErjSjctLWGinlZFWrHFMOS58&tag=&rating=g')
            .then((data) => {
                return data.json();
            })
            .then((info) => {
                if (info.data.title == '') {
                    document.querySelector('h1').innerHTML = 'sin titulo';
                } else {
                    document.querySelector('h1').innerHTML = info.data.title;
                }
                document.querySelector('img').src = info.data.image_url;
            })
            .catch((err) => {
                console.log(err);
            })
    })
    let all = document.querySelector('.all');

    let cant = prompt('cuantos gif deseas ver');

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=3HTm0YidErjSjctLWGinlZFWrHFMOS58&limit=' + cant + '&rating=g')
        .then((data) => {
            return data.json();
        })
        .then((gifs) => {
            let gif;
            console.log(gifs);
            let gifsIds = [];
            let favButton = document.querySelector('.favoritos');
            for (let i = 0; i < gifs.data.length; i++) {

                gif = "<span><p style='display: contents;'>" + gifs.data[i].title + "</p></span>";
                gif += '<span><i id="' + i + '" style="font-size: 50px;" class="far fa-star"></i></span>';
                gif += '<img src="' + gifs.data[i].images.original.url + '" alt="">'
                all.innerHTML += "<li>" + gif + "</li>";
                gifsIds.push(gifs.data[i].id)
            }
            console.log(gifsIds);
            let stars = document.querySelectorAll('i');
            let favs = [];

            stars.forEach((star) => {
                star.addEventListener('click', () => {
                    favButton.style.display = 'block';
                    star.style.backgroundColor = 'yellow';
                    for (let i = 0; i < gifsIds.length; i++) {
                        console.log(gifsIds.indexOf(gifsIds[i]));
                        console.log(star.id);
                        if (gifsIds.indexOf(gifsIds[i]) == star.id) {
                            favs.push(gifsIds[i]);
                        }
                    }
                    console.log(favs);
                    localStorage.setItem("favoritos", JSON.stringify(favs));
                    console.log(localStorage);
                })
            });

        })
        .catch((err) => {
            console.log(err);
        })


    let busqueda = document.querySelector('.search');
    let cantInput = document.querySelector('.cantidad');
    let form = document.querySelector('form');
    let ul2 = document.querySelector('.ul2');
    let buscados = document.querySelector('.buscados');


    form.addEventListener('submit', (e) => {
        let search = busqueda.value
        let cantidad = cantInput.value
        fetch('https://api.giphy.com/v1/gifs/search?api_key=3HTm0YidErjSjctLWGinlZFWrHFMOS58&q=' + search + '&limit=' + cantidad + '&offset=0&rating=g&lang=en')
            .then((data) => {
                return data.json();
            })
            .then((gifs) => {
                buscados.innerHTML = "Los resultados de busqueda para " + search + " son: "
                for (let i = 0; i < gifs.data.length; i++) {

                    let gif = "<p>" + gifs.data[i].title + "</p>";
                    gif += '<img src="' + gifs.data[i].images.original.url + '" alt="">'
                    ul2.innerHTML += "<li>" + gif + "</li>";
                }
            })
            .catch((err) => {
                console.log(err);
            })
        e.preventDefault();
    })




})