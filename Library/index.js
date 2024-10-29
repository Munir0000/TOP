const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const submitModalBtn = document.getElementById("submitModalBtn");

openModalBtn.onclick = () => modal.showModal();
submitModalBtn.onclick = () => modal.close();

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const toggelbutton = document.querySelector(".toggle-read-btn");
const childmain = document.querySelector(".childmain");
function addBookItems() {
  myLibrary.forEach((book) => {
    const bookcard = document.createElement("div");
    bookcard.classList.add("book-card");
    bookcard.innerHTML = `
        <div class="book-title">Title: ${book.title}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="book-pages">Pages: ${book.pages}</div>
      
        <button class="toggle-read-btn">${
          book.read === "Read" ? "Unread" : "Read"
        }</button>
        <button class="delete-btn">Delete</button>      
    `;

    childmain.appendChild(bookcard);
  });
}
submitModalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Access form fields by their IDs
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked ? "Read" : "Not Read";

  console.log(title, author, pages, read);
  addBookToLibrary(title, author, pages, read);

  addBookItems();
  myLibrary.length = 0;
  // Log form data
});

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

childmain.addEventListener("click", (event) => {
  if (event.target.classList.contains("toggle-read-btn")) {
    event.target.innerHTML =
      event.target.innerHTML === "Read" ? "Unread" : "Read";
  }
});

childmain.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const bookcard = event.target.parentNode;
    bookcard.remove();
  }
});
