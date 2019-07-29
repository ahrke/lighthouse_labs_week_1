# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahrke/lotide`

**Require it:**

`const _ = require('@ahrke/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(Array)`: returns the first item in given array
* `tail(Array)`: returns all values in array minus the first element
* `middle(Array)`: returns the middle elements of given array
* `flatten(Array)`: returns the a flattened version of given array (works with super nested ones too!)
* `countOnly(Array, Object)`: Takes in an array, and an object identifying what value to count from the array
* `letterPositions(String)`: returns an object with each letter from given string, as well as their positions inside the string
* `findKeyByValue(Object, valueToSearch)`: searches through object for a key with the given valueToSearch. Returns the key
* `eqArrays(arr1, arr2)`: Takes in two arrays and returns true when both are strictly equal, and false otherwise
* `eqObjects(obj1, obj2)`: Takes in two objects and returns true when both are strictly equal, and false otherwise