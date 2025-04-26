//         function book (title, author, pagenbr, read){
//     if(!new.target){
//         throw Error("You need to use the new operator to create a new object")
//     }else{
//         this.title = title;
//         this.author = author;
//         this.pagenbr = pagenbr;
//         this.read = read;
//         this.info = function(){
//             return (this.title + " by " + this.author + ", " + this.pagenbr + " pages," + this.read + ".")
//         }
//     };
// };
// var lotr = new book("The Lords of the rings", "JRR Tolkien", "295", "Not read yet")
// lotr.info();


const myLibrary = [];

const bookContainer = document.querySelector('.bookContainer');
const bookTitleForm = document.querySelector('.bookTitleForm');
const bookAuthorForm = document.querySelector('.bookAuthorForm');
const bookReadForm = document.querySelector('.bookReadForm');

function book(title, author, read){
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
    const Book = new book(title, author, read)

    myLibrary.push(Book);
    return Book;
};


function openForm() {
    document.getElementById("myForm").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function addBook() {
    const newBookTitle = bookTitleForm.value;
    bookTitleForm.value = '';

    const newBookAuthor = bookAuthorForm.value;
    bookAuthorForm.value = '';

    const newBookread = bookReadForm.value;
    bookReadForm.value = '';

    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookRead = document;createElement('div');

    bookCard.appendChild(bookTitle, bookAuthor, bookRead);
    bookContainer.appendChild(bookCard);

    bookTitle.textContent = newBookTitle;
    bookAuthor.textContent = newBookAuthor;
    bookRead.textContent = newBookread;


}
