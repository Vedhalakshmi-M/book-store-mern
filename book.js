// Search functionality for the book store
document.querySelector('.two input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const books = document.querySelectorAll('.books');

    books.forEach(book => {
        const bookTitle = book.querySelector('img').getAttribute('src').toLowerCase();
        if (bookTitle.includes(searchQuery)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

// Adding click events for "BUY NOW" buttons
const buyButtons = document.querySelectorAll('.books button');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const bookTitle = this.parentElement.querySelector('img').getAttribute('src');
        alert(`Thank you for purchasing: ${bookTitle.replace('.jpg', '').replace(/-/g, ' ')}`);
    });
});
