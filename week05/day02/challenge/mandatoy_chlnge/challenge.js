// Constants
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const API_URL = 'https://api.giphy.com/v1/gifs/random';

// DOM Elements
const form = document.getElementById('gif-form');
const searchInput = document.getElementById('search-term');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all');

// Fetch random GIF
async function fetchRandomGif(tag = '') {
    const url = `${API_URL}?api_key=${API_KEY}&tag=${tag}`;
    const response = await fetch(url);
    return await response.json();
}

// Display GIF
function displayGif(gifData) {
    const gifDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src = gifData.images.original.url;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => gifDiv.remove();
    
    gifDiv.append(img, deleteBtn);
    gifContainer.append(gifDiv);
}

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const gifData = await fetchRandomGif(searchInput.value);
        displayGif(gifData.data);
        searchInput.value = '';
    } catch (error) {
        console.error('Error:', error);
    }
});

// Delete all GIFs
deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});