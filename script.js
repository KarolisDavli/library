let addABook = document.querySelector('.add');
let popUp = document.querySelector('.pop-up');
let cancel = document.querySelector('.cancel');
let submit = document.querySelector('.submit');

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  let newBook = createBook();
  console.log();
  myLibrary.push(newBook);
  putBook(newBook);
  popUp.classList.remove('pop-up-active');
}

// Generate new book object
function createBook() {
  let title = document.querySelector('.title').value;
  let author = document.querySelector('.author').value;
  let pages = document.querySelector('.pages').value;
  let read = document.querySelector('.read').value;

  const newBook = new Book(title, author, pages, read);
  return newBook;
}

// Put new book in html
function putBook(book) {
    let newBook = createBook();
    let lib = document.querySelector('.library');

    let newBookUl = document.createElement('ul');
    newBookUl.classList.add('book-card');
    newBookUl.setAttribute('data-key', myLibrary.indexOf(book))

    let newTitleLi = document.createElement('li');
    newTitleLi.innerHTML = '<b><i>Title:</i></b> ';
  
    let newAuthorLi = document.createElement('li');
    newAuthorLi.innerHTML = '<b><i>Author:</i></b> ';
  
    let newPagesLi = document.createElement('li');
    newPagesLi.innerHTML = '<b><i>Page count:</i></b> ';

    createButtons(newBookUl, lib);

    let newTitle = document.createTextNode(newBook.title);
    let newAuthor = document.createTextNode(newBook.author);
    let newPages = document.createTextNode(newBook.pages);
  
    newTitleLi.appendChild(newTitle);
    newAuthorLi.appendChild(newAuthor);
    newPagesLi.appendChild(newPages);

    newBookUl.append(newTitleLi, newAuthorLi, newPagesLi);
  
    lib.appendChild(newBookUl);
}


// Create buttons in a div
function createButtons(book, lib) {

  let buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  let readButton = document.createElement('button');
  readButton.classList.add('read-button');
  readButton.innerText = 'completed';

  // Check if book is read
  let readResult = checked();
  if (readResult == true) {
    readButton.classList.add('read-button-completed')
  }

  readButton.addEventListener('click', () => {
    readButton.classList.toggle('read-button-completed')
  })

  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'delete';
  deleteButton.addEventListener('click', () => {
    lib.removeChild(book);
    myLibrary.splice(myLibrary.indexOf(book), 1);
    console.table(myLibrary);
  })

  buttonsDiv.append(readButton, deleteButton);
  book.appendChild(buttonsDiv);
}



// Add
addABook.addEventListener('click', function() {
  popUp.classList.add('pop-up-active');
})

// Cancel
cancel.addEventListener('click', function() {
  popUp.classList.remove('pop-up-active');
})

// Submit
submit.addEventListener('click', addBookToLibrary)


// Read switch
let checkbox = document.getElementById('checkread');
checkbox.addEventListener('change', checked);

function checked() {
 return checkbox.checked;
}