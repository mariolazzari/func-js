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

