class Libray {
    constructor () {
        this.books = [];
    }

    addBook(title, author){
        this.books.push({
            title: title,
            author: author,
            borrower: null
        });
    }
}

const myLibray = new Libray();

myLibray.addBook("Book Of Ezequiel", "Ezequiel");
myLibray.addBook("Genesis", "Moses");
console.log(myLibray);