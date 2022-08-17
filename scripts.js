// Object array
let myBooks = []

class Books{
    constructor(
        title = "blank",
        author = "blank",
        pages = 0,
        read = false
    ){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library{
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book);
    }
}

const library = new Library();
// Object constructor

function Book(title, author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return this.title + " by " + this.author + " " + this.pages + " pages " + this.read;
    }
}

const book1 = Object.create(Book);
book1.title = "The Hobbit";
book1.author = "J.R.R. Tolkien";
book1.pages = 310;
book1.read = true;
myBooks.push(book1);

function addBook(){

}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addBook);