---
id: roll
title: Roll x.
---

Level x becomes level 1. Everything below level x moves up the stack. This is an alias for [move x 1](move).

![Diagram](assets/roll.png)

For example, roll 2 and 3:

![Roll 2 (swap)](assets/swap.png)

![Roll 3 (rotate)](assets/rotate.png)

Roll 1 is a no-op, since it would move level 1 to level 1. Roll 0 will pop an item off the stack.

Roll is reversed by [rolldown](rolldown).