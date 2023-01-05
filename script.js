const addBookBtn = document.getElementById('addbook-btn');


let books = [];// array to store all book data

//Book construtor
function Book (title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  addBook(this.title, this.author, this.pages, this.readStatus,)
}

//add book to array
function addBook (title, author, pages, readStatus) {
  let newBook = {title, author, pages, readStatus}
  books.push(newBook);
  // console.log(books);
  displayBooks();
}

function displayBooks () {
  const container = document.getElementById('container');
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  const bookInfo = document.createElement('ul');
  bookInfo.classList.add('book-info');
  bookCard.appendChild(bookInfo);
  const bookName = document.createElement('li');
  const authorName = document.createElement('li');
  const pages = document.createElement('li');
  const readStatus = document.createElement('li');
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  const removeBookBtn = document.createElement('button');
  removeBookBtn.classList.add('removebook-btn');
  removeBookBtn.innerText = 'Remove Book';
  const changeReadStatus = document.createElement('button');
  changeReadStatus.classList.add('change-readstatus');
  changeReadStatus.innerText = 'Change Read Status';
  btnContainer.appendChild(changeReadStatus);
  btnContainer.appendChild(removeBookBtn);
  bookCard.appendChild(btnContainer);
  container.appendChild(bookCard);

  for( let i = 0; i < books.length; i++){
    bookCard.setAttribute('data-value', i)
    removeBookBtn.setAttribute('data-value', i)
    // console.log(bookInfo.getAttribute('value'));
    bookName.innerText = 'Title: ' + books[i].title;
    bookInfo.appendChild(bookName);
    authorName.innerText = 'Author: ' + books[i].author;
    bookInfo.appendChild(authorName);
    pages.innerText = 'No. of Pages: ' + books[i].pages;
    bookInfo.appendChild(pages);
    readStatus.innerText = 'Read Status: ' + books[i].readStatus;
    bookInfo.appendChild(readStatus);    
  }  
}

//add new book to array and display the book
addBookBtn.addEventListener('click', () => {
  const bookForm = document.getElementById('book-form');
  bookForm.style.display = 'block';
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let bName = document.getElementById('bname').value;
    let aName = document.getElementById('aname').value;
    let pages = document.getElementById('pages').value;
    let readOptn = document.getElementById('read-optn').value;
    const newBook = new Book(bName, aName, pages, readOptn);
    bookForm.style.display = 'none';
    bName = null;
    aName = '';
    pages = '';
    readOptn = '';
  })
})

const book1 = new Book('hello', 'world', 34, 'read');
const book2 = new Book('jdsfkjdsk', 'wrtrt', 345, 'read');

//remove books from array and display
const removeBookBtn = document.querySelectorAll('.removebook-btn');
removeBookBtn.forEach((bookItem) => {
  bookItem.addEventListener('click', (e) => {
    let btnValue = bookItem.getAttribute('data-value');
    // console.log(btnValue)
    const container = document.getElementById('container');
    const bookCard = document.querySelectorAll('.book-card');
    bookCard.forEach((item) => {
      let cardValue = item.getAttribute('data-value')
      // console.log(cardValue)
      if(btnValue === Number(cardValue)) {
        container.removeChild(bookCard[btnValue]);
        books.splice(btnValue, 1); 
      }
    });
  });
});
