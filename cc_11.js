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