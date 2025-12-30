const apiKey = '8dd59dcb18a518acb0838d3ad4ce17a9'
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('movieInput');
const searchSection = document.getElementById('searchSection');
const searchResultsList = document.getElementById('searchResultsList');


document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedMovies(); 
    loadLatestReviews();  
});

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) fetchMovies(query);
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}

async function fetchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=tr-TR`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResults(data.results);
    } catch (err) { console.error(err); }
}
function displaySearchResults(movies) {
    searchResultsList.innerHTML = '';
    searchSection.classList.remove('hidden');
    
    // Show top 4 results only
    movies.slice(0, 4).forEach(movie => {
        if(movie.poster_path) createMovieCard(movie, searchResultsList);
    });
}

async function loadFeaturedMovies() {
    const container = document.getElementById('featured-container');
   
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=tr-TR`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        container.innerHTML = ''; 

        
        const top4 = data.results.slice(0, 4);

        top4.forEach(movie => {
            createMovieCard(movie, container);
        });

    } catch (error) {
        console.error("Featured Error:", error);
    }
}


function createMovieCard(movie, container) {
    const card = document.createElement('article');
    card.className = 'movie-card';
    
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '?';

    card.innerHTML = `
        <div class="image-placeholder" style="background:none;">
            <img src="${imgUrl}" alt="${movie.title}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">
        </div>
        <h3>${movie.title}</h3>
        <p class="rating">⭐ ${rating}/10</p>
        <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="btn-secondary">İncele</a>
    `;
    container.appendChild(card);
}
async function loadLatestReviews() {
    const container = document.getElementById('reviews-container');
    
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=tr-TR&page=1`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        container.innerHTML = '';

        const reviews = data.results.slice(0, 2);

        reviews.forEach(movie => {
            const reviewItem = document.createElement('article');
            reviewItem.className = 'review-item';
            const shortOverview = movie.overview.length > 150 
                ? movie.overview.substring(0, 150) + "..." 
                : movie.overview;
            reviewItem.innerHTML = `
                <h3>${movie.title} - Editörün Seçimi</h3>
                <p>"${shortOverview}"</p>
                <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="read-more">Devamını Oku...</a>
            `;
            container.appendChild(reviewItem);
        });

    } catch (error) {
        console.error("Review Error:", error);
    }
}