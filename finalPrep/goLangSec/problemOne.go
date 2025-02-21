package main

import (
	"fmt"
)

// Problem best syntax
func twoLargest(nums []int) []int {
	largest := nums[0]
	secondLargest := nums[1]

	if secondLargest > largest {
		largest, secondLargest = secondLargest, largest //swap without temp variable
	}

	for i := 2; i < len(nums); i++ {
		if nums[i] > largest {
			secondLargest = largest
			largest = nums[i]
		} else if nums[i] <= largest && nums[i] > secondLargest {
			secondLargest = nums[i]
		}
	}
	return []int{largest, secondLargest}
}

// my solution to problem Four
type Store struct {
	Name      string
	Inventory map[string]int
}

type Transaction struct {
	ItemName string
	Quantity int
}

func updateInvetory(s *Store, t Transaction) bool {
	item := t.ItemName
	itemQuantity := t.Quantity
	//check if the items exist in the invetory. We set the quantity to s.Invetory[itemName] the value of the Invetory map
	//exists is bool that is set to true or false if the key s.Invetory[itemName] exist in the Invetory map
	storeQuantity, exists := s.Inventory[item]

	if itemQuantity < 0 && !exists {
		return false
	}

	quantityUpdate := storeQuantity + itemQuantity
	if quantityUpdate < 0 {
		return false
	}

	s.Inventory[item] = quantityUpdate
	fmt.Println(s.Inventory[item])
	return true
}

// Question Five
type Contact struct {
	Name  string
	Email string
	Age   int
	Group []string
}

func groupSize(allContacts []Contact) []Contact {
	//sort the Groups by the size of the group
	sortedIdx := 0
	//sortedContacts := []Contact{}
	for sortedIdx < len(allContacts) {
		largestGroup := sortedIdx
		for i := sortedIdx + 1; i < len(allContacts); i++ {
			if len(allContacts[i].Group) > len(allContacts[largestGroup].Group) {
				largestGroup = i
			}
		}
		temp := allContacts[largestGroup]
		allContacts[largestGroup] = allContacts[sortedIdx]
		allContacts[sortedIdx] = temp
		sortedIdx++
	}
	return allContacts
}

func sortByAge(allContacts []Contact) []Contact {
	for i := 0; i < len(allContacts)-1; i++ {
		j := i + 1
		for j > 0 && allContacts[j].Age > allContacts[j-1].Age && len(allContacts[j].Group) == len(allContacts[j-1].Group) {
			allContacts[j-1], allContacts[j] = allContacts[j], allContacts[j-1]
			j--
		}
	}
	return allContacts
}

func sortLexicographic(allContacts []Contact) []Contact {
	isSorted := false
	counter := 0
	for !isSorted {
		isSorted = true
		for i := 0; i < len(allContacts)-1-counter; i++ {
			if len(allContacts[i].Group) == len(allContacts[i+1].Group) && allContacts[i].Age == allContacts[i+1].Age &&
				allContacts[i].Name > allContacts[i+1].Name {
				allContacts[i], allContacts[i+1] = allContacts[i+1], allContacts[i]
				isSorted = false
			}
		}
		counter++
	}
	return allContacts
}

func sortContacts(allContacts []Contact) []Contact {
	groupSize(allContacts)
	sortByAge(allContacts)
	sortLexicographic(allContacts)
	return allContacts
}

// Problem Six
type TreeNode struct {
	Value int
	Left  *TreeNode
	Right *TreeNode
}

func flatenBST(head *TreeNode) []int {
	return []int{}
}

func main() {
	// fith problem input
	contact := []Contact{
		{Name: "John Doe", Email: "johndoe@example.com", Age: 30, Group: []string{"Friends", "Work"}},
		{Name: "Jane Doe", Email: "janedoe@example.com", Age: 25, Group: []string{"Friends"}},
		{Name: "Alice Johnson", Email: "alicejohnson@example.com", Age: 30, Group: []string{"Friends", "work"}},
	}
	fmt.Println(sortContacts(contact))
	/*s := &Store{
		Name: "Store 1",
		Inventory: map[string]int{
			"Item 1": 10,
			"Item 2": 20,
		},
	}
	t := Transaction{
		ItemName: "Item 1",
		Quantity: -5,
	}

	books := []Book{
		{Title: "Book 1", Author: "Author 1", Sales: 5000},
		{Title: "Book 2", Author: "Author 2", Sales: 10000},
		{Title: "Book 3", Author: "Author 1", Sales: 6000},
		{Title: "Book 4", Author: "Author 3", Sales: 3000},
		{Title: "Book 5", Author: "Author 1", Sales: 2000},
	}

	sampleArr := []int{2, 15, 5, 7, 3, 6, 7, 32, 99, 1, 32}
	fmt.Println(twoLargest(sampleArr))
	fmt.Println(highestOddSum([]int{2, 15, 5, 7, 3, 6, 7, 32, 99, 1, 32}))
	fmt.Println(topAuthors(books))
	fmt.Println(updateInvetory(s, t))*/

}

//my version
/*func twoLargest(numArr []int) []int {
	largestNum := math.MinInt64
	secondLargest := math.MinInt64

	for i := 0; i < len(numArr); i++ {
		if numArr[i] > largestNum {
			secondLargest = largestNum
			largestNum = numArr[i]
		} else if numArr[i] <= largestNum && numArr[i] > secondLargest {
			secondLargest = numArr[i]
		}
	}
	return []int{largestNum, secondLargest}
}
*/
