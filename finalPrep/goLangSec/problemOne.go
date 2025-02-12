package main

import (
	"fmt"
)

// better syntax
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

func main() {
	sampleArr := []int{2, 15, 5, 7, 3, 6, 7, 32, 99, 1, 32}
	fmt.Println(twoLargest(sampleArr))

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
