const myLibrary = [];

for (let i = 0; i < localStorage.length; i += 1) {
  const key = localStorage.key(i);
  myLibrary.push(JSON.parse(localStorage.getItem(key)));
}

const title = document.getElementById('inp_title');
const author = document.getElementById('inp_author');
const pages = document.getElementById('inp_pages');
const description = document.getElementById('inp_description');
const read = document.getElementById('inp_toggle');
const submit = document.getElementById('inpsubmit');
const bookContainer = document.getElementById('bookContainer');

function Book(title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(title.value, author.value, pages.value, description.value, read.checked);
  localStorage.setItem(title.value, JSON.stringify(newBook));
  window.location.reload();
}

submit.onclick = function () {
  addBookToLibrary();
};

function deleteBook(title) {
  localStorage.removeItem(title);
  window.location.reload();
}

function updateToggle(title) {
  const oBook = JSON.parse(localStorage.getItem(title));
  oBook.read = read.checked;
  localStorage.setItem(title, JSON.stringify(oBook));
  window.location.reload();
}

function renderBook(book) {
  let checked = '';
  if (book.read === true) {
    checked = 'checked';
  }
  const template = `<div class="card mb-3 me-3" style="width: 18rem;">
    <div class="card-body" id="bookbody">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
        <p class="card-text">${book.description}</p>
        <p class="card-text">${book.pages}<span>Pages</span></p>
        <div class="form-check form-switch p-3 mt-3" role="group" aria-label="Basic radio toggle button group">
          <input type="checkbox" class="form-check-input m-0" name="read" id="inp_toggle" autocomplete="off" value="false" ${checked} onclick="updateToggle('${book.title}')">
          <label class="form-check-label m-0 mx-1" for="inp_toggle">Have you read this book? </label>
        </div>
        <button type="button" class="btn btn-danger text-white card-link" onclick="deleteBook('${book.title}')">Delete</button>
    </div>
  </div>`;
  bookContainer.innerHTML += template;
}
myLibrary.forEach((book) => renderBook(book));