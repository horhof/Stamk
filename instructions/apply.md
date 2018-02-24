# apply: f, o, d

  *Pointer, Word, Word → a...*

  Pop:

  1. *f*, a pointer to a substack
  2. *o*, the starting point in the expression stack where the operands begin
  3. *d*, the destination level where return values should go.

  The expression stack is re-arranged so that *o* is at the tip. The *f* substack is dereferenced and consumes those operands. The output is placed at *d*.
