# roll: n

  *Word → ()*

  Level *n* becomes level 1. Everything below level *n* moves up the stack. This is an alias for *n* 1 [move](move).

  ![Diagram](/prog/stack/diagrams/roll.png)

  E.g. 2 roll:

  ![Example](/prog/stack/diagrams/swap.png)

  E.g. 3 roll:

  ![Example](/prog/stack/diagrams/rotate.png)

  1 roll is a no-op, since it would move level 1 to level 1. 0 roll will pop an item off the stack.

  Roll is reversed by rolldown. *n* rolldown moves level 1 to level *n*. That level and everything below it move down. Level 2 will become the tip.
