function mergeAndFormat (books, format) {
    const aggregatedBooks = books.reduce((acc, {title, author, year}) => {
        const key = `${title} by ${author}`;
        if (!acc[key]) {
            acc[key] = {title, author, years: [year]};
        }
        else {
            acc[key].years.push(year);
        }
        return acc;
    } ,{});

     if (format === "string") {return Object.values(aggregatedBooks).map((book) => {
            return `${book.title} by ${book.author} (${book.years.join(", ")})`
        });}

    return Object.values(aggregatedBooks).map(({title, author, years}) => ({
        title,
        author,
        years
    }))
}

const booksOne = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925}, 
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 2020},
    {title: "1984", author: "George Orwell", year: 1949},
    {title: "1984", author: "George Orwell", year: 1983}]
    
const result = mergeAndFormat(booksOne, "string")
console.log(result)


/*function mergeAndFormat (books, format) {
    let arrIndex = 0;
    let arrBookArray = []
    for (let i = 0; i < books.length; i++) {
        if (arrBookArray.length === 0) {
            arrBookArray[arrIndex] = books[i].title + " by " + books[i].author + " " + "(" + books[i].year + ")";
        }
        else if(books[i].title !== books[i - 1].title) {
            arrIndex++;
            arrBookArray[arrIndex] = books[i].title + " by " + books[i].author + " " + "(" + books[i].year + ")";
        }
        else if (books[i].title === books[i - 1].title) {
            arrBookArray[arrIndex] = books[i].title + " by " + books[i].author + " " + "(" + books[i - 1].year + "," + " " + books[i].year + ")";
        }
    }
    return arrBookArray
}
*/