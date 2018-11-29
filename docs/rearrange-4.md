---
id: rearrange-4
title: Re-arranging 4 items
---

23. reverse4 (ABCD)

![](/stack/assets/reverse4.png)

## Two levels at once

7. swap2 (CDAB)

![](/stack/assets/swap2.png)

17. rotate2 (BADC)

![](/stack/assets/rotate2.png)

21. circle2 (ACBD)

![](/stack/assets/circle2.png)

## Skip first level

8. swap+2 (CDBA)

![](/stack/assets/swap+2.png)

10. rotate+1 (CBDA)

![](/stack/assets/rotate+1.png)

13. unrotate+1 (BDCA)

![](/stack/assets/unrotate+1.png)

15. circle+1 (BCDA)

![](/stack/assets/circle+1.png)

## Four-level rolls

9. 4 [roll][] (CBAD)

![](/stack/assets/4-roll.png)

20. 4 rolldown (ADCB)

![](/stack/assets/4-rolldown.png)

## Changing insides and outsides

12. unswapout (CADB)

![](/stack/assets/unswapout.png)

14. swapout (BDAC)

![](/stack/assets/swapout.png)

## Rollswapping

18. rollswap (BACD)

![](/stack/assets/rollswap.png)

24. rolldownswap (ABDC)

![](/stack/assets/rolldownswap.png)

## Unnamed

11. (CABD)

![](/stack/assets/cabd.png)

16. (BCAD)

![](/stack/assets/bcad.png)

19. (ADBC)

![](/stack/assets/adbc.png)

22. (ACDB)

![](/stack/assets/acdb.png)

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


[swap]: instructions/swap
[rotate]: instructions/rotate
[unrotate]: instructions/unrotate
[circle]: instructions/circle
[roll]: instructions/roll