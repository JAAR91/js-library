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
const submit = document.getElementById('inpsubmit');

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

