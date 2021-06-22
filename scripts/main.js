const myLibrary = [];

for (let i = 0; i < localStorage.length; i += 1) {
  const key = localStorage.key(i);
  myLibrary.push(JSON.parse(localStorage.getItem(key)));
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const description = document.getElementById('description');
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

submit.onclick = function addBookToLibrary() {
  const newBook = new Book(title.value, author.value, pages.value, description.value, read.checked);
  localStorage.setItem(title.value, JSON.stringify(newBook));
  window.location.reload();
};

function renderBook(book) {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3', 'me-3');
  card.style.width = '18rem';
  bookContainer.appendChild(card);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const template = `
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
        <p class="card-text">${book.description}</p>
        <p class="card-text">${book.pages}<span>Pages</span></p>`;
  cardBody.innerHTML += template;
  const checkContainer = document.createElement('div');
  checkContainer.classList.add('form-check', 'form-switch', 'p-3', 'mt-3');
  cardBody.appendChild(checkContainer);

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = book.read;
  checkBox.classList.add('form-check-input', 'm-0');
  checkBox.onclick = function updateToggle() {
    if (book.read === true) {
      book.read = false;
    } else {
      book.read = true;
    }
    localStorage.setItem(book.title, JSON.stringify(book));
  };
  checkContainer.appendChild(checkBox);

  const checklabel = document.createElement('label');
  checklabel.classList.add('form-check-label', 'm-0', 'mx-1');
  checklabel.textContent = 'I have read this book!';
  checkContainer.appendChild(checklabel);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger', 'text-white', 'card-link');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function deleteBook() {
    localStorage.removeItem(book.title);
    window.location.reload();
  };
  cardBody.appendChild(deleteBtn);
}
myLibrary.forEach((book) => renderBook(book));