package main

import "fmt"

//double linked list

type Node[T any] struct {
	next  *Node[T]
	prev  *Node[T]
	value T
}

type LinkedList[T any] struct {
	head   *Node[T]
	length uint
}

func (ll *LinkedList[T]) index(idx uint) (T, bool) { //we return T and bool in this function
	var value T //
	if idx >= ll.length {
		return value, false
	}
	curIdx := 0
	current := ll.head
	for current != ll.head || curIdx == 0 { //current != head so it won't keep wrapping curidx == 0 so that it run at least once as head
		if idx == uint(curIdx) {
			value = current.value
			break
		}
		curIdx++
		current = current.next
	}
	return value, true
}

func (ll *LinkedList[T]) append(value T) {
	ll.length++
	if ll.length == 1 {
		ll.head = &Node[T]{}
		ll.head.prev = ll.head
		ll.head.next = ll.head
		ll.head.value = value
		return
	}

	node := &Node[T]{}
	node.value = value

	tail := ll.head.prev //every time we run append we will set tail to the head.prev
	tail.next = node     //then we make the next node of the tail = to node
	node.prev = tail     //then we connect the new node to the tail
	ll.head.prev = node  //then connect ll.head.prev which is tequaclly the new tail node
	node.next = ll.head  //and connect the last nodes next to the front so we can search forward and backwards
}

func (ll *LinkedList[T]) pop() T {
	ll.length--
	if ll.length == 0 {
		var null T
		value := ll.head.value
		ll.head.value = null
		return value
	}
	tail := ll.head.prev
	tailPrev := tail.prev
	ll.head.prev = tailPrev
	tailPrev.next = ll.head

	return tail.value
}

func (ll *LinkedList[T]) printList() {
	values := []T{}

	current := ll.head
	for ll.length != 0 {
		values = append(values, current.value)
		current = current.next
		if current == ll.head {
			break
		}
	}
	fmt.Println(values)
}

func main() {
	ll := LinkedList[int]{}
	ll.append(10)
	ll.append(15)
	ll.append(4)
	ll.append(9)
	ll.append(4)
	ll.append(9)
	fmt.Printf("Head: %v, Tail: %v\n", ll.head.value, ll.head.prev.value)
	ll.printList()
	fmt.Println(ll.index(7))

}
