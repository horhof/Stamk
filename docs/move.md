---
id: move
title: Move: s, d.
---

The item at source level *s* will be moved to destination level *d*. The items between them (including *d*) will move toward the gap at *s*.

For example, moving *M* up toward the tip of the stack. The *R*'s remain and the *S*'s are shifted toward *s*:

![Diagram](assets/move-up.png)

And moving down:

![Diagram](assets/move-down.png)

Move is reversed by running it again with *s* and *d* reversed.