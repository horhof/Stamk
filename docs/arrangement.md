---
id: arrangement
title: Arrangement
---

Arrangement instructions move items within the stack between levels without adding or removing anything.

## Binary

* [m](move.md)

### Unary

* [Roll]

### Nullary

* [Rotate]
* [Unrotate]
* [Swap]
  * [Swap]
  * [Circle]

## All manipulations

The number of stack manipulations at each level is *nPr(n, n)*. At each level, only new permutations not matching those at a previous level are shown. (The identity permutation is also not shown.)

|  *n*  | *nPr(n, n)* |  New  |
| :---: | :---------: | :---: |
|  [2]  |      2      |   2   |
|  [3]  |      6      |   4   |
|  [4]  |     24      |  20   |


  [2]: rearrange-2.md
  [3]: rearrange-3.md
  [4]: rearrange-4.md
  [Move]: move.md
  [Roll]: roll.md
  [Rotate]: rotate.md
  [Unrotate]: unrotate.md
  [Swap]: swap.md
  [Circle]: circle.md