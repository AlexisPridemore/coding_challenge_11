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
    constructor() {  //Library class to track multiple books and borrowers
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {  //Adds a new book to the library
        this.books.push(book);
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }


    // Task 4 Addition:

    addBorrower(borrower) {
        this.borrowers.push(borrower);  //adds a borrower to borrower array
    }
    lendBook(borrowerId, isbn) {  //check if book exists and has available copies
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        if (book && borrower) {
        if (book.copies > 0) {
            book.updateCopies(-1);   //reduces book copies by 1
            borrower.borrowBook(book.title);
        } //borrows the book that is selected
        else {
            this.console.log("No Copies of this book are available")
        };

    }
}

    // Task 5 addition:
    returnBook(borrowerId, isbn) {  //when borrowers return books
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        if (book) {
            book.updateCopies(1);  //Increases the book's available copies
            if (borrower){
                borrower.returnBook(book.title); //removes the book from borrowed list
        }
    }
}

    listBooks() {  //Logs all books' details
        this.books.forEach((book) => {
            console.log(book.getDetails());
        });
    }

}

const library = new Library();  //Test Data
library.addBook(book1);         //Test Data
library.listBooks();            //Test Data

// Task 4: Implementing Book Borrowing

library.addBorrower(borrower1)
library.lendBook(201, 123456);  //Test Data Cases
console.log(book1.getDetails());  //Test Data Cases

console.log(borrower1.borrowedBooks);  //Test Data Cases

// Task 5: Implementing Book Returns

library.returnBook(201, 123456);  //Test Data
console.log(book1.getDetails());  //Test Data Log

console.log(borrower1.borrowedBooks);  //Test Data Log

