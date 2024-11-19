// Create a simple program in that models a Library system.
//************

// Define a Book class:
// Each Book should have a title, author, and isCheckedOut property.
// Create a method called toggleCheckOut that changes the isCheckedOut status.
class Book{
    title;
    author;
    isCheckedout;
    constructor(title, author, isCheckedout){
        this.title = title;
        this.author = author;
        this.isCheckedout = isCheckedout;
    }
    toggleCheckout(isCheckedout){
        this.isCheckedout = !isCheckedout
    }
}

// Define a Library Class
// The Library should have a books array to store all Book objects.
// Add a method called addBook that takes a Book object and adds it to the books array.
// Create a method called listAvailableBooks that logs all the books that are currently not checked out.
class Library{
    books;
    constructor(){
        this.books = []
    }
    addBook(books){
        this.books.push(books)
    }
    listAvailableBooks(){
        this.books.forEach(book => {
            if(!book.isCheckedout){
                console.log(`${book.title} by ${book.author} is available.`)
            }
        })
    }
}

// Use your classes:

// Create an instance of Library.
const ourLibrary = new Library();


// Create 3 book objects
const b1 = new Book("Harry Potter", "J.K.Rowling");
const b2 = new Book("Emma", "Jane Austin");
const b3 = new Book("Pride and Prejudice", "Jane Austin")


// Toggle the checkout status of one book.
b1.toggleCheckout();

// Add the books to instance of library
ourLibrary.addBook(b1);
ourLibrary.addBook(b2);
ourLibrary.addBook(b3);

// Console log all available books in the library.
ourLibrary.listAvailableBooks();














