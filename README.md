# Learning functional programming with ES6+

Functional Programming is a programming paradigm that treats computation as the evaluation of *pure functions* and avoids changing state or mutable data. 
It focuses on *what to do rather than how* to do it.

## Intro

### What is

f(x) = x + 1

### Core concepts

- Immutability: 
  - most of vars are const
  - do not assign: define
  - do not modify directly vars   

- Separating functions and data:
  - do not embed data in funcs
  
- 1st class functions:
  - use func as func args
  - return func
  - pure functions: no state


### Eslint

- use popular
- Air B&B
- JS

```sh
pnpm i -D eslint
npx eslint --init
pnpm i -D eslint-plugin-immutable
npx eslint
```

## First-class functions

A first-class function is a function that is *treated like any other value* in a programming language. 

This means it can be:

- Assigned to a variable
- Passed as an argument to another function
- Returned from another function

### Closures

A *closure* in JavaScript is a function that remembers the variables from its lexical scope even when the function is executed outside that scope. 
This allows functions to maintain access to their parent scope variables even after the parent function has finished execution.

### Higher order functions

A higher-order function in JavaScript is a function that either:

- Takes one or more functions as arguments
- Returns a function as its result

Higher-order functions allow for more flexible, reusable, and modular code.

## Arrays

### Spread operator

### map

### filter

### every & some

### slice

Creates a copy of original array, in order to avoid mutations.

### sort

### reduce