// Book Class: Represents a Book
class Book {
    constructor(title, author, rating, price, isbn) {
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td class="rating-mobile">${book.rating}</td>
      <td>${book.price}</td>
      <td class="isbn-mobile">${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete delete-styling">X</a></td>
    `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form); // Insert the div before the form

        // Message will vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#rating').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Local Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const rating = document.querySelector('#rating').value;
    const price = document.querySelector('#price').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate input has a text
    if (title === '' || author === '' || rating === '' || price === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {

        // Instatiate book
        const book = new Book(title, author, rating, price, isbn);

        // Add Book to UI
        UI.addBookToList(book);

        // Add book to local storage
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Book (Event Propagation)
document.querySelector('#book-list').addEventListener('click', (e) => {

    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Book Removed', 'success');
});

// Dark mode toggle
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};