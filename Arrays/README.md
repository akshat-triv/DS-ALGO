# Questions on arrays

All the questions/answers on arrays are here.

## Q.1 Write a program to reverse an array or string

Given an array (or string), the task is to reverse the array/string.

```bash
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
```

## Q.2 Write a function to return minimum and maximum in an array.

Your program should make the minimum number of comparisons.

```bash
Input  : arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9}
Output : obj{} = {min: 1, max: 9}

Input :  arr[] = {34, 25, 111, 421, 619, 502, 166, 15, 420}
Output : obj[] = {min: 15, max: 619}
```

## Q.3 Resort the array in O(n) complexity.

You are given a sorted array containing both negative and positive values. Resort the array taking absolute value of negative numbers. Your complexity should be O(n).

```bash
Input  : arr[] = {-8, -5, -3, -1, 3, 6, 9}
Output : arr[] = {-1, -3, 3, -5, 6, -8, 9}
```

## Q.4 K’th Smallest/Largest Element in Unsorted Array

Given an array and a number k where k is smaller than the size of the array, we need to find the k’th smallest element in the given array. It is given that all array elements are distinct.

```bash
Input: arr[] = {7, 10, 4, 3, 20, 15}
k = 3
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}
k = 4
Output: 10
```

## Q.5 Sort an array of 0s, 1s and 2s

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

```bash
Input: arr[] = {0, 2, 1, 2, 0}
Output: arr[] = {0, 0, 1, 2, 2}

Input: arr[] = {0, 1, 0}
Output: arr[] = {0, 0, 1}
```

## Q.6 Negative Postive

An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers, do this with constant space

```bash
Input: arr[] = {-12, 11, -13, -5, 6, -7, 5, -3, -6}
Output: arr[] = { -12, -6, -13, -5, -3, -7, 5, 6, 11 }

Input: arr[] = {-1, 2, -3, 4, 5, 6, -7, 8, 9}
Output: arr[] = { -1, -7, -3, 5, 6, 4, 8, 9, 2 }
```

## Q.7 Union and Intersection

Given two sorted arrays, find their union and intersection.

```bash
Input : arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output : Union : {1, 2, 3, 4, 5, 6, 7} 
         Intersection : {3, 5}

Input : arr1[] = {2, 5, 6}
        arr2[] = {4, 6, 8, 10} 
Output : Union : {2, 4, 5, 6, 8, 10} 
         Intersection : {6}
```

## Q.8 Cyclically rotate an array by one

Given an array, rotate the array by one position in clock-wise direction.

```bash
Input: N = 5 A[] = {1, 2, 3, 4, 5}
Output: {5, 1, 2, 3, 4}
```