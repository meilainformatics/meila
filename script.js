document.getElementById('input-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const mbti = document.getElementById('mbti').value;
    const age = document.getElementById('age').value;
    const mood = document.getElementById('mood').value;
    const genre = document.getElementById('genre').value;

    const recommendations = getRecommendations(mbti, age, mood, genre);

    displayRecommendations(recommendations);
});

function getRecommendations(mbti, age, mood, genre) {
    // Contoh data film berdasarkan mood dan genre
    const movies = {
        action: [
            { title: 'Mad Max: Fury Road', image: 'images/mad_max.jpg' },
            { title: 'John Wick', image: 'images/john_wick.jpg' },
        ],
        romance: [
            { title: 'The Notebook', image: 'images/notebook.jpg' },
            { title: 'La La Land', image: 'images/lalaland.jpg' },
        ],
        comedy: [
            { title: 'The Hangover', image: 'images/hangover.jpg' },
            { title: 'Superbad', image: 'images/superbad.jpg' },
        ],
        // Tambahkan kategori lainnya sesuai kebutuhan
    };

    return movies[genre] || [];
}

function displayRecommendations(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    if (movies.length === 0) {
        movieList.innerHTML = '<p>No recommendations available for this combination.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        
        const movieImg = document.createElement('img');
        movieImg.src = movie.image;
        movieElement.appendChild(movieImg);

        const movieTitle = document.createElement('p');
        movieTitle.textContent = movie.title;
        movieElement.appendChild(movieTitle);

        movieList.appendChild(movieElement);
    });

    document.getElementById('recommendations').style.display = 'block';
}
