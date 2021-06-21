

const myLibrary = [
    new Book('Americana', 'Chimanda', 300, 'A young girl in a foriegn land', false),
    new Book('Born Rich', 'Rick Aderson', 234, 'make money while young', true),
  ];
for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    myLibrary.push(JSON.parse(localStorage.getItem(key)));
}

const inp_title = document.getElementById('inp_title');
const inp_author = document.getElementById('inp_author');
const inp_pages = document.getElementById('inp_pages');
const inp_description = document.getElementById('inp_description');
const inp_read = document.getElementById('inp_toggle');
const submit = document.getElementById('inpsubmit');
const bookContainer = document.getElementById('bookContainer');

function Book(title, author, pages, description, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.read = read;
}

function addBookToLibrary() {

    //myLibrary.push(new Book(inp_title.value, inp_author.value, inp_pages.value, inp_description.value, inp_read.checked));

    localStorage.setItem(inp_title.value, JSON.stringify(new Book(inp_title.value, inp_author.value, inp_pages.value, inp_description.value, inp_read.checked)));
    location.reload();
}

function renderBook(book, ind) {
    const template = `<div class="card mb-3 me-3" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
          <p class="card-text">${book.description}</p>
          <p class="card-text">${book.pages}<span>Pages</span></p>
          <button type="button" class="btn btn-info text-white card-link" 
            id="inp_toggle-${ind}">${book.read ? 'Read' : 'Mark as read'}</button>
          <button type="button" class="btn btn-danger text-white card-link" id="delete-${ind}">Delete</button>
      </div>
    </div>`;
    bookContainer.innerHTML += template;
    console.log(book.author);
  }

  function getBooks() {
    bookContainer.innerHTML = '';
    myLibrary.forEach((book, ind) => renderBook(book, ind));
  }

  getBooks();
