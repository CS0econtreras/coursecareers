package main

import (
	"math"
)

func highestOddSum(nums []int) []int {
	var maxSum, pairSum int
	var result []int
	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			pairSum = nums[i] + nums[j]
			if math.Abs(float64(pairSum%2)) == 1 && (pairSum > maxSum || len(result) == 0) {
				maxSum = pairSum
				result = []int{nums[i], nums[j]}
			}
		}
	}
	return result
}

/*func highestOddSum(nums []int) []int {
	highestOdd := math.MinInt64
	highestEven := math.MinInt64

	for i := 0; i < len(nums); i++ {
		if nums[i]%2 == 0 && nums[i] > highestEven {
			highestEven = nums[i]
		} else if nums[i]%2 != 0 && nums[i] > highestOdd {
			highestOdd = nums[i]
		}
	}
	/*	if highestOdd != math.MinInt64 && highestEven != math.MinInt62
		then return the line bellow because we the placeholder was changed
	return []int{highestOdd, highestEven}
}*/
