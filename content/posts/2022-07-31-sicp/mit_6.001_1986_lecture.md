---
title: "SICP — (Book + MIT 6.001 + Berkeley CS61A) Notes"
slug: "/sicpmit"
date: 2021-06-07
canonicalUrl: "https://elvischidera.com/sicpmit/"
tags:
  - Book notes
---

# MIT 6.001 Structure and Interpretation, 1986

## Lecture 1A: Overview and Introduction to Lisp
1. Fixed point of a function.
2. We're not only building boxes that input and output numbers. We're building boxes that can compute methods. We can have procedures whose values is another procedure.
3.  Big Topic 1: Black-Box Abstraction
   **Capturing Common Patterns**
   i. High-order procedures
   ii. Data as procedures
4.  Big Topic 2: Conventional Interfaces
   i. Generic operations
   ii. Large-scale structure and modularity
   iii. Object-orientated programming
   iv. Operation on aggregates
12. Big Topic 3: Metalinguistic Abstraction - making new languages
    i. Interpretation: Apply-Eval
    ii. Example: Logic programming
    iii. Register machine
13. Learning a new language, know:
   i. Primitive elements.
   ii. Means of combination (create bigger things out of primitive elements) and
   iii. Means of abstraction (How to draw black-boxes around the combination -- give a combination a name so it can be used with its details suppressed -- as if they were primitive elements).

## Lecture 1B: Procedures and Processes; Substitution Model
1. Substitution model
2. An iteration has all of its state in explicit variables. Recursion has implicit state.
3. Peano arithmetic recursively and iteratively. Linear iteration takes constant space and linear time. Linear recursion takes both linear time and space.
4. Recursive definition != Recursive process.
5. Recursion has work to be done later.
6. Forward euler method.
7. perturbation analysis
8. Towers of Hanoi problem


## Lecture 2A: Higher-order Procedures
1. How to think recursively:
a. Write down the answer to an easy case that is known.
b. Reduce the problem to a simpler problem -- make a subproblem of the simpler problem and do something to the result.

```scheme
; Implementation of SIGMA (i) from INDEX to UPPER_BOUND
(DEFINE (SUM_INT index upper_bound)
   (IF (> index upper_bound)
      0 ; Easy case
      (+
         index
         (SUM_INT (1+ index) upper_bound) ; Reduced simpler problem -- subproblem to solve for
      )
   )
)
```

```scheme
; Implementation of SIGMA (i²) from INDEX to UPPER_BOUND
(DEFINE (SUM_SQUARE index upper_bound)
   (IF (> index upper_bound)
      0
      (+
         (SQUARE index)
         (SUM_SQUARE (1+ index) upper_bound)
      )
   )
)
```

2. Generalizing summation using higher order procedures

```scheme
; Recursively
(DEFINE (SUMMATION term index index_stepper upper_bound)
   (IF (> index upper_bound)
      0
      (+
         (term index) ; term provides term at index
         (SUMMATION
            term
            (index_stepper index)
            index_stepper
            upper_bound
         )
      )
   )
)

; Iteratively
(DEFINE (SUMMATION term lower_bound index_stepper upper_bound)
   (DEFINE (ITER index accumulator)
      (IF (> index upper_bound)
         accumulator
         (ITER
            (index_stepper index)
            (+
               accumulator
               (term index)
            )
         )
      )
   )

   (ITER lower_bound 0)
)
```

```scheme
(DEFINE (SUM_INT index upper_bound)
   (SUMMATION
      (LAMBDA (x) x)
      index
      +1
      upper_bound
   )
)
```

3. Procedures are also data -- they are not special. They can be named.
4. A procedure for improving a guess of square roots.

```scheme
(define (sqrt x)
   (define tolerance 0.00001)

   (define (good-enough? candidate)
      (<
         (abs (- (* candidate candidate) x))
         tolerance
      )
   )

   (define (improve candidate)
      (average
         (/ x candidate)
         candidate
      )
   )

   (define (find-sqrt candidate)
      (if (good-enough? candidate)
         candidate
         (find-sqrt (improve candidate))
      )
   )

   (find-sqrt 1)
)

(define (average m n)
   (/
      (+ m n)
      2
   )
)
```

5. A fixed-point is a place which has the property, that the input of the function is its output.

> **improve**(candiate) -> (candidate + (x / candidate)) / 2
> 
> **improve**(**sqrt**(x)) = **sqrt**(x)
> Example:
> **improve**(**sqrt**(9)) = (3 + (9 / 3)) / 2 = (3 + 3) / 2 = 3
> 
> Therefore, the fixed-point of the function **improve**(candidate) is what is desired.

6. Some functions have the property that their fixed-point can be found by iterating the function itself -- essentially what is happening in the square-root procedure by Heron's method.

```scheme
(define (fixed-point function start)
   
   (define tolerance 0.00001)

   ; Checks if two input are close enough as defined by the tolerance
   (define (close-enough m n)
      (<
         (abs (- m n))
         tolerance
      )
   )

   ; Repeat until old and new are close enough
   (define (iter old new)
      (if (close-enough old new)
         new
         (iter new (function new))
      )
   )

   (iter start (function start))
)

(define (sqrt x)
   (fixed-point
      (lambda (b)
         (/
            (+ b (/ x b))
            2
         )
      )
      1
   )
)
```

7. There are other functions whose fixed-point is the square root of x, eg:

> improve(candidate) = (x / candidate)

However the example above oscilates when iterated.

> when x = 2
> improve(1) = 2 / 1 = 2
> improve(2) = 2 / 2 = 1
> improve(1) = 2 / 1 = 2

8. The function in (7) can be damped using averaging to find the fixed-point.

```scheme
(define (sqrt x)
   (fixed-point
      (average-damp
         (lambda (candidate)
            (/ x candidate)
         )
      )
      1
   )
)

; Higher-order procedure: Procedure that takes procedure as argument and returns a procedure as value.
(define average-damp
   (lambda (function)
      (lambda (x)
         (average (function x) x)
      )
   )
)
```
9. Procedure compute function
10. Leibnitz formula for finding pi / 8.
11. Newton's method

## Lecture 2B: Compound Data
1. Recap -- Framework for talking about languages:
a. Primitives: Things built into the system.
b. Means of combination: Where complicated things are built from primitive things.
c. Means of abstraction: Where those complicated things can be named and used as simple building blocks.
2. The task of building things can be divorced from the task of implementing the parts using abstraction boundaries that allows a system to be built in layers. Eg: The `sqrt` function uses `good-enough` function. The implementation details of `good-enough` is irrelevant to `sqrt` -- it could be using `abs` or any other function for its implementation.
3. 

> "I said that computer science is a lot like magic, and it's sort of good that it's like magic. There's a bad part of computer science that's a lot like religion. And in general, I think people who really believe that you design everything before you implement it basically are people who haven't designed very many things.
> 
> The real power is that you can pretend that you've made the decision and then later on figure out which one is right, which decision you ought to have made. And when you can do that, you have the best of both worlds." 
> 
> ~Harold Abelson, 1986