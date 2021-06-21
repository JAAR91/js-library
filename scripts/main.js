let myLibrary = [];

for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    myLibrary.push(JSON.parse(localStorage.getItem(key)));
}

const inp_title = document.getElementById('inp_title');
const inp_author = document.getElementById('inp_author');
const inp_pages = document.getElementById('inp_pages');
const inp_description = document.getElementById('inp_description');
const inp_read = document.getElementById('inp_toggle');
const inp_submit = document.getElementById('inpsubmit');
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

function deleteBook(title){
  console.log(title);
  localStorage.removeItem(title);
  //location.reload();
}

function renderBook(book, ind) {
    let checked = '';
    if(book.read === true){
      checked = 'checked';
    }
    const template = `<div class="card mb-3 me-3" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
          <p class="card-text">${book.description}</p>
          <p class="card-text">${book.pages}<span>Pages</span></p>
          <div class="form-check form-switch p-3 mt-3" role="group" aria-label="Basic radio toggle button group">
            <input type="checkbox" class="form-check-input m-0" name="read" id="inp_toggle" autocomplete="off" value="false" ${checked}>
            <label class="form-check-label m-0 mx-1" for="inp_toggle">Have you read this book? </label>
          </div>
          <button type="button" class="btn btn-danger text-white card-link" id="delete${ind}">Delete</button>
      </div>
    </div>`;

    bookContainer.innerHTML += template;
    document.getElementById('delete' + ind).onclick = function(){
      console.log(book.title);
      //deleteBook(book.title);
    }
  }

  myLibrary.forEach((book, ind) => renderBook(book, ind));

