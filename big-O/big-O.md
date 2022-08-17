# Big O Notation Understanding and Rules

**Big O helps us to analyze the performance of an algorithm in terms of time and space complexity as the input of the algorithm increases.**

Often algorithms are very long and will be very difficult to count the number of operations it's going to perform. So Big O will only be focusing on the bigger view and neglects(because when performing a million operations, additional 10 or 1000 operations doen't matter to computer) the minor operations. And there can be many ways of representing the performance of algorithm but most common ones are the ones used in the below graph representation.  

**The time or space complexity measured by big O depends only on the algorithm but not on the hardware used to run that algorithm.** 

![ Big O Graph ](/big-O.png)

## Thumb rules for Time complexity

* Constants and small terms are negligible.
* Arithmetic operations are constants.
* Variable assignment is constant.
* Accessing elements in an array(by index) or in object(by key) is contant.

**Examples:**
* O(2n) ----> O(n)
* O(500) ----> O(1)
* O(13n^2) ----> O(n^2)
* O(n+10) ----> O(n)
* O(n^2+5n+8) ----> O(n^2)

## Thumb rules for Space(Auxiliary) complexity
Auxiliary space complexity, means, it's the space required by algorithm only but not included by the space taken by the inputs.

* Most primitives (booleans, numbers, undefined, null) are constant space.
* Strings take O(n) space(where n is string length).
* Reference types are generally O(n), where n is the length(for arrays) or the number of keys(for objects). 
