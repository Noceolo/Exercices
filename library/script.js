const myLibrary = [];

const bookContainer = document.querySelector('.bookContainer');
const bookTitleForm = document.querySelector('.bookTitleForm');
const bookAuthorForm = document.querySelector('.bookAuthorForm');
const bookReadForm = document.querySelector('.bookReadForm');

function openForm() {
    document.getElementById("myForm").style.display = "flex";
  };
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  };


function Book(title, author, read){
    if(!new.target){
        throw Error("you need to use the new operator")
    }else{
        this.title = title;
        this.author = author;
        this.read = read;
        this.bookID = crypto.randomUUID();
    };
};

function addBook(title, author, read){
    const book = new Book(title, author, read)
    myLibrary.push(book);
};

function removeBook(bookID){
    const index = myLibrary.findIndex(book => book.bookID === bookID);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        libraryDisplay();
    }
}

function createBookCard(item){
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookRead = document.createElement('input');
        const label = document.createElement('label')
        const removeBtn = document.createElement('button');

        bookRead.type = 'checkbox';
        label.name = 'readLabel';
        label.htmlFor = 'readLabel';
        label.textContent = 'Read';
        removeBtn.textContent ='Remove';

        bookCard.setAttribute('class', 'bookCard');
        bookTitle.setAttribute('class', 'bookTitle');
        bookAuthor.setAttribute('class', 'bookAuthor');
    
        removeBtn.onclick = function() {
            removeBook(item.bookID);
        }
        
        bookCard.append(bookTitle, bookAuthor, bookRead, label, removeBtn);
        bookContainer.appendChild(bookCard);

        bookTitle.textContent = item.title;
        bookAuthor.textContent = item.author;
        bookRead.textContent = item.read;
};

function libraryDisplay() {
    
    const oldBookCards = document.querySelectorAll(".bookCard");
    oldBookCards.forEach(book => book.remove());
    
    
    myLibrary.forEach((item) => {
        createBookCard(item);
        
    });
};

function handleFormSubmit() {
    const newBookTitle = bookTitleForm.value;
    bookTitleForm.value = '';

    const newBookAuthor = bookAuthorForm.value;
    bookAuthorForm.value = '';

    const newBookRead = bookReadForm.value;
    bookReadForm.value = '';

    addBook(newBookTitle, newBookAuthor, newBookRead);
    libraryDisplay();
    closeForm();
};

addBook('dune','herbert','read');
libraryDisplay();