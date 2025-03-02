// Task 1: Creating a Book Class

class Book {  //class to represent books in the library
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies; 
    }
    getDetails() {  //returns a formatted string of book details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies Available: ${this.copies}`;
    }
    updateCopies(quantity) {  //modifies the available copies when a book is borrowed or returned
        this.copies += quantity;
        if (this.copies < 0) {
          this.copies = 0;
          console.log("Not enough copies available. Setting to 0.");
        }
    }
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());  //Log Test Data
book1.updateCopies(-1);
console.log(book1.getDetails());  //Log Test Data

// Task 2: Creating a Borrower Class

class Borrower {  //class to track borrowed books
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {  //adds a book title to Borrowed Books
        this.borrowedBooks.push(book);
    }
    returnBook(book) {  //removes the book from Borrowed Books
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
};

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

// Task 3: Creating a Library Class

class Library {
    constructor() {  //Library class to track multiple books
        this.books = [];
    }
    addBook(book) {  //Adds a new book to the library
        this.books.push(book);
    }
    listBooks() {  //Logs all books' details
        this.books.forEach((book) => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Copies: ${book.copies}`);
        });
    }
}

const library = new Library();  //Test Data
library.addBook(book1);         //Test Data
library.listBooks();            //Test Data