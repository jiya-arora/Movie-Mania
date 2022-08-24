const API_KEY = 'api_key=b9bf6c6aa8eb2a82293f6a4d950e4563';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const POSTER_NOT_FOUND = "data:image/jpeg;base64,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";

const getMovies = (url) => {
    fetch(url).then((res)=>{
        return res.json();
    })
    .then((data) => {
        // console.log(data.results);
        if(data.results.length!==0){
            showMovies(data.results);
        }
    })
}

const showMovies = (data) => {
    main.innerHTML = '';

    data.forEach(movie => {
        console.log(movie);
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${poster_path? IMG_URL+poster_path: POSTER_NOT_FOUND }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        
        `

        main.appendChild(movieEl);
    })
}

const getColor = (rating) => {
    if(rating>= 8){
        return 'green';
    }else if(rating >= 5){
        return "orange";
    }else{
        return 'red';
    }
}

const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})

getMovies(API_URL); 