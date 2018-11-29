---
id: rearrange-4
title: Re-arranging 4 items
---

23. reverse4 (ABCD)

![Stack diagram](assets/reverse4.png)

## Two levels at once

7. swap2 (CDAB)

![Stack diagram](assets/swap2.png)

17. rotate2 (BADC)

![Stack diagram](assets/rotate2.png)

21. circle2 (ACBD)

![Stack diagram](assets/circle2.png)

## Skip first level

8. swap+2 (CDBA)

![Stack diagram](assets/swap-2.png)

10. rotate+1 (CBDA)

![Stack diagram](assets/rotate-1.png)

13. unrotate+1 (BDCA)

![Stack diagram](assets/unrotate-1.png)

15. circle+1 (BCDA)

![Stack diagram](assets/circle-1.png)

## Four-level rolls

9. 4 [roll][] (CBAD)

![Stack diagram](assets/4-roll.png)

20. 4 rolldown (ADCB)

![Stack diagram](assets/4-rolldown.png)

## Changing insides and outsides

12. unswapout (CADB)

![Stack diagram](assets/unswapout.png)

14. swapout (BDAC)

![Stack diagram](assets/swapout.png)

## Rollswapping

18. rollswap (BACD)

![Stack diagram](assets/rollswap.png)

24. rolldownswap (ABDC)

![Stack diagram](assets/rolldownswap.png)

## Unnamed

11. (CABD)

![Stack diagram](assets/cabd.png)

16. (BCAD)

![Stack diagram](assets/bcad.png)

19. (ADBC)

![Stack diagram](assets/adbc.png)

22. (ACDB)

![Stack diagram](assets/acdb.png)

## Listing

7. DCBA → CDAB
8. DCBA → CDBA
9. DCBA → CBAD
10. DCBA → CBDA
11. DCBA → CABD
12. DCBA → CADB
13. DCBA → BDCA
14. DCBA → BDAC
15. DCBA → BCDA
16. DCBA → BCAD
17. DCBA → BADC
18. DCBA → BACD
19. DCBA → ADBC
20. DCBA → ADCB
21. DCBA → ACBD
22. DCBA → ACDB
23. DCBA → ABCD
24. DCBA → ABDC


[swap]: swap.md
[rotate]: rotate.md
[unrotate]: unrotate.md
[circle]: circle.md
[roll]: roll.md