# Learning functional programming with ES6+

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