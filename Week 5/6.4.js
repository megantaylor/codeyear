// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.length = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (length, author) {
    this.length = length;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book (320, "J.R.R. Tolkien");
