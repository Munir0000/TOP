class Library {
  constructor() {
    this.books = [];
    this.init();
  }

  init() {
    // Modal setup
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("myModal");
    const submitModalBtn = document.getElementById("submitModalBtn");

    openModalBtn.onclick = () => modal.showModal();
    submitModalBtn.onclick = (event) => this.handleSubmit(event, modal);

    // Event listeners for child main
    const childMain = document.querySelector(".childmain");
    childMain.addEventListener("click", (event) =>
      this.handleChildMainClick(event)
    );
  }

  handleSubmit(event, modal) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked ? "Read" : "Not Read";

    // Add book to library
    this.addBook(title, author, pages, read);

    // Refresh the display and reset the form
    this.renderBooks();
    modal.close();
  }

  addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    this.books.push(book);
  }

  renderBooks() {
    const childMain = document.querySelector(".childmain");
    childMain.innerHTML = ""; // Clear previous books

    this.books.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.innerHTML = `
        <div class="book-title">Title: ${book.title}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="book-pages">Pages: ${book.pages}</div>
        <button class="toggle-read-btn" data-index="${index}">
          ${book.read === "Read" ? "Unread" : "Read"}
        </button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      childMain.appendChild(bookCard);
    });
  }

  handleChildMainClick(event) {
    const target = event.target;
    if (target.classList.contains("toggle-read-btn")) {
      const index = target.dataset.index;
      this.toggleReadStatus(index);
      this.renderBooks();
    }

    if (target.classList.contains("delete-btn")) {
      const index = target.dataset.index;
      this.deleteBook(index);
      this.renderBooks();
    }
  }

  toggleReadStatus(index) {
    const book = this.books[index];
    book.read = book.read === "Read" ? "Not Read" : "Read";
  }

  deleteBook(index) {
    this.books.splice(index, 1);
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Initialize the library
const library = new Library();
