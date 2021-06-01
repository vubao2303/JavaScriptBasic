# INTERVIEW QUESTIONS

## Instructions

### Pseudocoding

Complete the Pseudocode for the following Algorithmic Prompts. Pseudocode entails *describing the necessary steps to solve the problem using programming principles* as opposed to *hard-coding* it out. 

**No Coding**

Each step of your algorithm you should make the following items clear: 

```
What are you going to do?
How are you going to do it? 
Why are you going to do it?
```

<hr>

## Prompt #1 `sum`

Create a function `calculateSum` that takes in an array of integers. 

Your function returns the sum of all integers within the input array.

Note: Complete only the Pseudocode.

### Example

Test Case 1: [1, 2, 5]  
*Expected Output: **8***

Test Case 2: [1, 2, 3, 4]  
*Expected Output: **10***

Test Case 3: [100, 50, 75, 80]  
*Expected Output: **305***

## List You Pseudocode Below: `sum`

Step One:

Q: What are you going to do? 

A: Create a variable called 'sum' that is equal to 0

Q: How are you going to do it? 

A: Use 'var' to create 'sum' variable

Q: Why are you going to do it? 

A: Because I need a variable to track to sum, essential a count tracker. Following the rule that last thing returned is the first thing instantiated.

Step Two: 

Q: What are you going to do? 

A: Iterate through the array of numbers.

Q: How are you going to do it? 

A: Using a for loop begining with the 0 index

Q: Why are you going to do it? 

A: Because I need to add each number in the array to the sum of the numbers that came before it. 

Step Three: 

Q: What are you going to do? 

A: After interating through the entire array it will return of a value of the sum of all numbers

Q: How are you going to do it? 

A: Using the return statement

Q: Why are you going to do it? 

A: To see the sum of the numbers in the array



<hr>


## Prompt #2 `mean`

Create a function `mean` that takes in an array of integers as an argument. 

Your function returns the `mean` / `average` for all integers within the input array.

The mean is the average of a set of numbers, so use your `calculateSum` function defined in Prompt #1 and sum all numbers and then divide by the total number of integers in the input array. 


Note: Complete only the Pseudocode.

### Example
Test Case 1: [1, 2, 5]  
*Expected Output: **2.666...***

Test Case 2: [1, 2, 3, 4]   
*Expected Output: **2.5***

Test Case 3: [100, 50, 75, 80]  
*Expected Output: **76.25***

## List You Pseudocode Below: `mean`


Step One:

Q: What are you going to do? 

A: Create a variable called mean that is equal to the the sum of all numbers as defined by the calculateSum function and divided by the number of total integers in the array

Q: How are you going to do it? 

A: Use 'var' to create a new variable and equal it to an assignment operator

Q: Why are you going to do it? 

A: To calculate the mean

Step Two: 

Q: What are you going to do? 

A: The mean variable should be equal to the calculateSum output (return value) divided by the length of the array.       

Q: How are you going to do it? 

A: Using the array.length method to calculate the number of integers in the array.

Q: Why are you going to do it? 

A: To calculate the mean value which would be equal to the sum of the array divided by the array.length output value

Step Three: 

Q: What are you going to do? 

A: Return the solution  

Q: How are you going to do it? 

A: Using a return statement

Q: Why are you going to do it? 

A: To return the mean value of the array


<hr>

## Prompt #3 `median`

Create a function `median` that takes in an array of integers as an argument. 

Your function returns the median of your input array.

The median is the middle value, so first you will have to sort the numbers then find the middle value


Note: Complete only the Pseudocode

## List You Pseudocode Below: `median`


Step One:

Q: What are you going to do? 

A: Create a funtion called sortArr() 

Q: How are you going to do it? 

A: Within the sortArr() function use the sort method to organize the numbers within the original array in ascending order. Use the compare function with the sort method 

Q: Why are you going to do it? 

A: To get the median number of the array the numbers within the array first need to be organized in ascending order. I'm using the compare function within the sort method to avoid issues when sorting integers as opposed to strings.

Step Two: 

Q: What are you going to do? 

A: Create another function that will calculate the median calculateMedian() and takes in the original array

Q: How are you going to do it? 

A: Create a variable called median which isn't equal to anything and another called sortedArray that is equal to the value returned in the sortArr function

Q: Why are you going to do it? 

A: I need to know the middle number or numbers in the array to determine the median

Step Three: 

Q: What are you going to do? 

A: Return the median value if the sortedArr is divisible by 2 (an even number)

Q: How are you going to do it? 

A: Check if the remainder of the sortedArr is equal to 0 once it has been divided by 2. If it is divided by 2, create a variable called midIndex that is equal to the sortedArr's length divided by 2. Then use the calculatemean() function to calculate the mean with midIndex-1 and midIndex.

Q: Why are you going to do it? 

A: to calculate the median when the array is divisible by 2.

Step Four: 

Q: What are you going to do? 

A: Return the median value of the sortedArr if not divisible by 2

Q: How are you going to do it? 

A: If the sortedArr is not diviisble by 2, set midIndex equal to sortedArr.length divided by 2 and floored to assure a whole integer. Return median as sortedArr[midIndex].

Q: Why are you going to do it? 

A: Because Javascript begins arrays at 0, the midIndex needs to be rounded down to arrive at the middle Index. 

### Example


Test Case 1: [12, 3 ,5]    
*Expected Output: **5***

Test Case 2: [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]  
*Expected Output: **23***

Test Case 3: [3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56]  
*Expected Output: **22***

*Note:* In the case where the total number of data points is even, take the average of the two middle numbers.

Test Case 4: [3, 4, 7, 9]  
*Expected Output: **5.5***



<hr>


<hr>

## Prompt #4 `mode`

Create a function `mode` that takes in an array of integers as an argument. 

Your function returns the mode of your input array.


The mode is the number that is repeated more often than any other.


Note: Complete only the Pseudocode.

## List You Pseudocode Below: `mode`


Step One:

Q: What are you going to do? 

A: Create a calculateMode function that first checks for an empty array

Q: How are you going to do it? 

A: With an if statement

Q: Why are you going to do it? 

A: To check for all possibilies (edge cases)

Step Two: 

Q: What are you going to do? 

A: Create a variable called sortedArr that is equal to the original array after being sorted

Q: How are you going to do it? 

A: using var

Q: Why are you going to do it? 

A: To point to the sorted array

Step Three: 

Q: What are you going to do? 

A: Sort the array

Q: How are you going to do it? 

A: using the function sortArr that was previously created

Q: Why are you going to do it? 

A: To make it easier to find te mod of the array.

KEEP TRACK OF HOW MANY TIMES EACH NUMBER HAS OCURRED

Step Four:

Q: What are you going to do?

A: Create a variable called "maxCount" and "maxNum" and assign them the first index of the input array and 1.

Q: How are you going to do it?

A: Using var and assignment operator

Q: Why are you going to do it?

A: 


Step Five:

Q: What are you going to do?

A: Track currentCount and currentNum and assign it to the first index of the input array and 1

Q: How are you going to do it?

A: using var and assignment operator

Q: Why are you going to do it?

A: To compare it to the maxNum and maxCount

Step Six:

Q: What are you going to do?

A: Iterate over the array starting at the second element of index 1

Q: How are you going to do it?

A: using a four loop

Q: Why are you going to do it?

A: to compare each element against the maxCount and maxNum

Step Seven:

Q: What are you going to do?

A: Compare the element at index to the the value of current Num and if it is the same element, increase currentCount

Q: How are you going to do it?

A: Using a comparison operator (if else statement)

Q: Why are you going to do it?

A: To keep track of the number of times a number appears

Step Eight:

Q: What are you going to do?

A: Compare currentCount to maxCount. If "currentCount" is greater than "maxCount" assign maxNum to currentNum and currentCount to maxCount

Q: How are you going to do it?

A: With an if statemenet

Q: Why are you going to do it?

A: To track the number (element) that has occured the max number of times

Step Nine:

Q: What are you going to do?

A: Update the value of "currentNum" to be the element at index i and currentCount to 1

Q: How are you going to do it?

A: with an assignment operator

Q: Why are you going to do it?

A: To repeat the process of updating the currentCount to reflect the new current element

Step Ten:

Q: What are you going to do?

A: return maxNum

Q: How are you going to do it?

A: with a return statement 

Q: Why are you going to do it?

A: to have the maxNum be the number that appears the most in the array.



### Example
Test Case 1: [13, 18, 13, 14, 13, 16, 14, 21, 13]  
*Expected Output: **13***

Test Case 2: [1, 3, 1, 1, 8]  
*Expected Output: **1***

Test Case 3: [2, 14, 9, 10, 18, 14]  
*Expected Output: **14***

Test Case 4: [2, 3, 4, 5, 6]   
*Expected Output: **2*** 

*Note:* In the case where all the integers appear with the same frequency, take the first one.

<hr>
