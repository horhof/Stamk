# move: s, d

  *Word, Word → ()*

  The item at source level *s* will be moved to destination level *d*. The items between them (including *d*) will move toward the gap at *s*.

  For example, moving *M* up toward the tip of the stack. The *R*'s remain and the *S*'s are shifted toward *s*:

  ![Diagram](/prog/stack/diagrams/move-up.png)

  And moving down:

  ![Diagram](/prog/stack/diagrams/move-down.png)

  move is reversed by running it again with reversed operands.
