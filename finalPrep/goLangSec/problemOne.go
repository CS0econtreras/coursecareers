package main

import (
	"fmt"
	"math"
)

func twoLargest(numArr []int) []int {
	largestNum := math.MinInt64
	secondLargest := math.MinInt64

	for i := 0; i < len(numArr); i++ {
		if numArr[i] > largestNum {
			largestNum = numArr[i]
		} else if numArr[i] < largestNum && numArr[i] > secondLargest {
			secondLargest = numArr[i]
		}
	}
	return []int{largestNum, secondLargest}
}

func main() {
	sampleArr := []int{8, 1, 7, 14, 2, 10}
	fmt.Println(twoLargest(sampleArr))
	fmt.Println("yes")
}
