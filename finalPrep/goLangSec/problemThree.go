package main

type Book struct {
	Title  string
	Author string
	Sales  int
}

func topAuthors(books []Book) map[string]int {
	authorSales := make(map[string]int)
	for _, book := range books {
		authorSales[book.Author] += book.Sales
	}

	result := make(map[string]int)
	for author, sales := range authorSales {
		if sales >= 10000 {
			result[author] = sales
		}
	}
	return result
}
