let addABook = document.querySelector('.add');
let popUp = document.querySelector('.pop-up');
let cancel = document.querySelector('.cancel');
let submit = document.querySelector('.submit');


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}



function addBookToLibrary() {
  let newBook = createBook();
  myLibrary.push(newBook);
  console.log(newBook);
  console.log(myLibrary);
  putBook();
  // myLibrary.push(book1);
  // console.log(book1);
  myLibrary.forEach(book => {

  })
  popUp.classList.remove('pop-up-active');
}



// Generate new book object
function createBook() {
  let title = document.querySelector('.title').value;
  let author = document.querySelector('.author').value;
  let pages = document.querySelector('.pages').value;
  let read = document.querySelector('.read').value;
  const newBook = new Book(title, author, pages, read);
  console.log(newBook.title);
  return newBook;
}


// Put new book in html
function putBook() {
    let newBook = createBook();
    let lib = document.querySelector('.library');

    let newBookLi = document.createElement('ul');
    newBookLi.classList.add('book-card');
    
    let newTitleLi = document.createElement('li');
    newTitleLi.innerHTML = '<strong>Title:</strong> ';
  
    let newAuthorLi = document.createElement('li');
    newAuthorLi.innerHTML = '<strong>Author:</strong> ';
  
    let newPagesLi = document.createElement('li');
    newPagesLi.innerHTML = '<strong>Page count:</strong> ';
  
    let newReadLi = document.createElement('li');
    newReadLi.innerHTML = '<strong>Read:</strong> ';

  // Negauna data is ko sukurt textNode
    let newTitle = document.createTextNode(newBook.title);
    let newAuthor = document.createTextNode(newBook.author);
    let newPages = document.createTextNode(newBook.pages);
    let newRead = document.createTextNode(newBook.read);
    console.log(newTitle);
  
    newTitleLi.appendChild(newTitle);
    newAuthorLi.appendChild(newAuthor);
    newPagesLi.appendChild(newPages);
    newReadLi.appendChild(newRead);

    newBookLi.append(newTitleLi, newAuthorLi, newPagesLi, newReadLi);
  
    lib.appendChild(newBookLi);
    console.table(myLibrary);
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




// Check if array already includes an item
// arr.include();

// submit.addEventListener('click', function() {
//   let title = document.querySelector('.title').value;
//   let author = document.querySelector('.author').value;
//   let pages = document.querySelector('.pages').value;
//   let read = document.querySelector('.read').value;

//   const newBook = new Book(title, author, pages, read);
  
//   addBookToLibrary(newBook);
//   myLibrary.push(newBook);
//   console.log(newBook);
//   console.log(myLibrary);
// })