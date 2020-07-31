window.addEventListener('load', () => {


    let arrayFavs = JSON.parse(localStorage.getItem('favoritos'));

    if (arrayFavs != null) {
        document.querySelector('div').style.display = 'none'
        console.log(arrayFavs);

        let all = document.querySelector('.all');
    
        arrayFavs.forEach((fav) => {
            fetch('https://api.giphy.com/v1/gifs/' + fav + '?api_key=3HTm0YidErjSjctLWGinlZFWrHFMOS58')
                .then((data) => {
                    return data.json();
                })
                .then((gifs) => {
                    let gif;
                    console.log(gifs);
    
                    gif = "<span><p style='display: contents;'>" + gifs.data.title + "</p></span>";
                    gif += '<img src="' + gifs.data.images.original.url + '" alt="">'
                    all.innerHTML += "<li>" + gif + "</li>";
    
                })
                .catch((err) => {
                    console.log(err);
                })
        });
    }





})