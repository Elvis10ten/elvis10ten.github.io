---
title: "The Algorithm Design Manual"
slug: "/2022-03-31-the-algorithm-design-manual"
date: 2022-03-31
canonicalUrl: "https://elvischidera.com/2022-03-31-the-algorithm-design-manual"
banner: ./assets/banner.jpg
tags:
  - notes
---

## Chapte 1 — Introduction to Algorithm Design
1. An `algorithmic problem` is specified by describing the complete set of **instances** it must work on and of its output after running on one of these instances.
2. An `algorithm` is a procedure that takes any of the possible input instances and transforms it to the desired output.
3. There is a distinction between a general problem and an instance of a problem. E.g:
   > **Problem**: Sorting
   > **Input**: A sequence of `n` keys a<sub>1</sub>,...,a<sub>n</sub>.
   > **Output**: The permutation (reordering) of the input sequence such that: a′<sub>1</sub> ≤ a′<sub>2</sub> ≤ ··· ≤ a′<sub>n−1</sub> ≤ a′<sub>n</sub>.
   > **Instance of sorting problem**: { Mike, Bob, Sally}; { 154, 245 }
4. Insertion sort is an algorithm to the sorting problem:
   **English description**: 
   > Start with a single element (thus forming a trivially sorted list) and then incrementally inserts the remaining elements so that the list stays sorted.
   
   **Pseudocode**:
   ```pseudocode
   array = input sequence
   n = array size
   i = 0

   while i < n
      j = i
      while j > 0 AND array[j] < array[j - 1]
          swap element at `j` with element at `j - 1` in array
          decrement j by 1
      increment i by 1
   ```

   **Code**:
   ```c
   insertion_sort(item s[], int n)
    {
      int i,j; /* counters */
      for (i=0; i<n; i++) {
        j=i;
        
        while ((j>0) && (s[j] < s[j-1])) {
          swap(&s[j],&s[j-1]);
          j = j-1;
        }
      }
    }
   ```
    
  An animation of the logical flow of this algorithm on a particular instance (the letters in the word `“INSERTIONSORT”`) 
    ![](assets/fig1.1.png)

5. There is a fundamental difference between algorithms,
which always produce a correct result, and heuristics, which may usually do a
good job but without providing any guarantee.
6. Three desirable properties for a good algorithm:
   - correct
   - efficient
   - easy to implement
7. Correct algorithms usually come with a proof of correctness, which is an explanation of why we know that the algorithm must take every instance of the problem to the desired result.

### Robot Tour Optimization
> **Problem**: Robot Tour Optimization (aka: Traveling Salesman Problem [TSP])
> **Input**: A set `S` of `n` points in the plane.
> **Output**: What is the shortest cycle tour that visits each point in the set `S`?

#### Nearest-neighbor heuristic
![A good instance for the nearest-neighbor heuristic](assets/fig1.2.png)

1. English Description:
   > Starting from some point `p0`, we walk first to its nearest neighbor `p1`
   > From `p1`, we walk to its nearest unvisited neighbor.
   > Repeat this process until we run out of unvisited points
   > After which we return to `p0` to close off the tour.
2. Pseudocode:
   ```pseudocode
   NearestNeighbor(P)
      Pick and visit an initial point p₀ from P
      p = p₀
      i = 0
      
      While there are still unvisited points
          i = i + 1
          Select pᵢ to be the closest unvisited point to pᵢ₋₁
          Visit pᵢ
      Return to p₀ from pₙ₋₁
   ```
3. Pros:
   - Easy to understand & implement
   - Reasonably efficient
4. Cons: It's wrong — It always finds a tour, but it doesn’t necessarily find the shortest possible tour.
   E.g: A bad instance for the nearest-neighbor heuristic (top) & the optimal solution (bottom):
   ![](assets/fig1.3.png)

#### Closest-pair heuristic
1. English description:
   > Repeatedly connect the closest pair of endpoints whose connection will not create a problem, such as premature termination of the cycle.
   > Each vertex begins as its own single vertex chain.
   > After merging everything together, we will end up with a single chain containing all the points in it. Connecting the final two endpoints gives us a cycle.
   > At any step during the execution of this closest-pair heuristic, we will have a set of single vertices and vertex-disjoint chains available to merge.
2. Pseudocode:

### Reasoning about Correctness
1. We need tools to distinguish correct algorithms from incorrect ones, the primary one of which is called a `proof`.
2. A proper mathematical proof consists of several parts:
    * A clear, precise statement of what you are trying to prove.
    * A set of assumptions of things that are taken to be true, and hence can be used as part of the proof.
    * A chain of reasoning that takes you from these assumptions to the statement you are trying to prove.
    * A little square (■) or `QED` at the bottom to denote that you have finished, representing the Latin phrase for "thus it is demonstrated."
3. A proof is indeed a demonstration. Proofs are useful only when they are honest, crisp arguments that explain why an algorithm satisfies a non-trivial correctness property.

#### Problems and Properties
1. It is impossible to prove the correctness of an algorithm for a fuzzily-stated problem.
2. Problem specifications have two parts:
    * The set of allowed input instances.
    * The required properties of the algorithm's
output.
3. An important technique in algorithm design is to narrow the set of allowable instances until there is a correct and efficient algorithm. For example, we can restrict a graph problem from general graphs down to trees, or a geometric problem from two dimensions down to one.
4. There are two common traps when specifying the output requirements of a
problem:
    * Asking an ill-defined question. E.g: Asking for the best route between two places on a map is a silly question, unless you define what best means.
    * Creating compound goals. E.g: A goal like find the shortest route from **a** to **b** that doesn't use more than twice as many turns as necessary is perfectly well defined, but complicated to reason about and solve.

#### Expressing Algorithms
1. The heart of any algorithm is an idea. If your idea is not clearly revealed when you express an algorithm, then you are using too low-level a notation to describe it.
2. The three most common forms of algorithmic notation are
    * English
    * Pseudocode (a programming language that never complains about syntax errors)
    * A real programming language.
3. All three methods are useful because there is a natural tradeoff between
greater ease of expression and precision.

#### Demonstrating Incorrectness
1. The best way to prove that an algorithm is incorrect is to produce a counter example, i.e: an instance on which it yields an incorrect answer.
2. Good counterexamples have two important properties:
    * **Verifiability**: To demonstrate that a particular instance is a counterexample to a particular algorithm, you must be able to:
        * calculate what answer your algorithm will give in this instance, and
        * display a better answer so as to prove that the algorithm didn't find it.
    * **Simplicity** - Good counter-examples have all unnecessary details stripped away. They make clear exactly why the proposed algorithm fails. Simplicity is important because you must be able to hold the given instance in your head in order to reason about it.

### Induction and Recursion
1. Recursion is mathematical induction in action. In both, we have general and boundary conditions, with the general condition breaking the problem into smaller and smaller pieces. The initial or boundary condition terminates the recursion.
2. The simplest and most common form of mathematical induction infers that a statement involving a natural number `n` (that is, an integer `n ≥ 0`) holds for all values of `n`. The proof consists of two steps:
    * The **initial** or **base case**: prove that the statement holds for a fixed natural number (usually 0 or 1).
    * The **induction/inductive step**: assume that the statement holds for some arbitrary natural number `n = k`, and prove that the statement holds for `n = k + 1`.
3. The hypothesis in the inductive step, that the statement holds for `n = k`, is called the **induction/inductive hypothesis**. You're doing a thought experiment of what would happen if it was true for `n = k`. It might be clearer to use the phrase "suppose true when `n = k`" rather than "assume true when `n = k`" to emphasise this.
4. To prove the inductive step, one assumes the induction hypothesis for `n = k` and then uses this assumption to prove that the statement holds for `n = k + 1`. We try to manipulate the statement for  `n = k + 1` so that it involves the case for `n = k` (which we assumed to be true).

#### Inductive proof for Insertion sort
1. The basis case consists of a single element, and by definition a one-element array is completely sorted.
2. We assume that the first `n - 1` elements of array `A` are completely sorted after `n - 1` iterations of insertion sort.
3. To insert one last element `x` to `A`, we find where it goes, namely the unique
spot between the biggest element less than or equal to `x` and the smallest element greater than `x`. This is done by moving all the greater elements
back by one position, creating room for `x` in the desired location. ■
### Modeling the Problem
1. Modeling is the art of formulating your application in terms of precisely described, well-understood problems.
2. Proper modeling is the key to applying algorithmic design techniques to real-world problems — it can eliminate the need to design an algorithm, by relating your application to what has been done before.
3. Real-world applications involve real-world objects — like a system to route traffic in a network or find the best way to schedule classrooms in a university.
4. Most algorithms, however, are designed to work on rigorously defined abstract structures such as permutations, graphs, and sets.
5. To exploit the algorithms literature, you must learn to describe your problem abstractly, in terms of procedures on such fundamental structures.
6. The act of modeling reduces your application to one of a small number of existing problems and structures. Such a process is inherently constraining, and certain details might not fit easily into the given target problem.
7. Certain problems can be modeled in several different ways, some much better than others.
8. Modeling is only the first step in designing an algorithm for a problem. Be
alert for how the details of your applications differ from a candidate model, but don't be too quick to say that your problem is unique and special.

#### Combinatorial Objects
1. **Permutations** are arrangements, or orderings, of items. E.g: `{1,4,3,2}` and `{4,3,2,1}` are two distinct permutations of the same set of four integers.
2. **Subsets** represent selections from a set of items. E.g: `{1,3,4}` and `{2}` are two distinct subsets of the first four integers. Order does not matter in subsets the way it does with permutations.
3. **Trees** represent hierarchical relationships between items.
4. **Graphs** represent relationships between arbitrary pairs of objects.
5. **Points** define locations in some geometric space.
6. **Polygons** define regions in some geometric spaces.
7. **Strings** represent sequences of characters, or patterns.
#### Recursive Objects
> Learning to think recursively is learning to look for big things that are made from smaller things of exactly the same type as the big thing.  
> If you think of houses as sets of rooms, then adding or deleting a room still leaves a house behind.  
1. **Permutations**: Delete the first element of a permutation of `n` things `{1, ..., n}` and you get a permutation of the remaining `n-1` things. Basis case: {}
2. **Subsets**: Every subset of `{1, ..., n}` contains a subset of `(1, ..., n - 1)` obtained by deleting element `n`. Basis case: {}
3. **Trees**: Delete the root of a tree and you get a collection of smaller trees. Delete any leaf of a tree and you get a slightly smaller tree. Basis case: 1 vertex.
4. **Graphs**: Delete any vertex from a graph, and you get a smaller graph. Now divide the vertices of a graph into two groups, left and right. Cut through all edges that span from left to right, and you get two smaller graphs, and a bunch of broken edges. Basis case: 1 vertex.
5. **Point sets**: Take a cloud of points, and separate them into two groups by drawing a line. Now you have two smaller clouds of points. Basis case: 1 point.
6. **Polygons**: Inserting any internal chord between two non-adjacent vertices of a simple polygon cuts it into two smaller polygons. Basis case: triangle.
7. **Strings**: Delete the first character from a string, and you get a shorter string. Basis case: empty string.

> Recursive descriptions of objects require both decomposition rules and basis cases, namely the specification of the smallest and simplest objects where the decomposition stops.  

### Proof by Contradiction
1. The basic scheme of a contradiction argument is as follows:
    * Assume that the hypothesis (the statement you want to prove) is false.
    * Develop some logical consequences of this assumption.
    * Show that one consequence is demonstrably false, thereby showing that the assumption is incorrect and the hypothesis is true.
2. The classic contradiction argument is Euclid's proof that there are an infinite number of prime numbers:
     * The negation of the claim would be that there are only a finite number of primes, say `m`, which can be listed as `p₁,..., pₘ`. So let's assume this is the case and work with it.
     * Prime numbers have particular properties with respect to division. Suppose we construct the integer formed as the product of "all" of the listed primes:
     * This integer `N` has the property that it is divisible by each and every one of the known primes, because of how it was built.
     * But consider the integer `N + 1`. It can't be divisible by `p₁ = 2`, because `N` is.
     * The same is true for `p₂ = 3` and every other listed prime. Since a +1 can’t be evenly split by any of the prime numbers because they are bigger.
     * Since `N + 1` doesn't have any non-trivial factor, this means it must be prime.
     * But you asserted that there are exactly `m` prime numbers, none of which are `N + 1`, because `N + 1 > m`.
     * This assertion is false, so there cannot be a bounded number of primes.
3. For a contradiction argument to be convincing, the final consequence must be clearly, ridiculously false.

### Exercises
#### Finding counter examples
1. Show that `a + b` can be less than `min(a, b)`.
  >When:
  >&nbsp;&nbsp; `a and b < 0` (i.e: negative)
  >&nbsp;&nbsp; `a <= b`
  >Then:
  >&nbsp;&nbsp; `min(a, b) = a`
  >&nbsp;&nbsp; `a + b < a`
  >Example:
  >&nbsp;&nbsp; `min(-6, -5) = -6`
  >&nbsp;&nbsp; `-6 + -5 = -6 -5 = -11`
  >&nbsp;&nbsp; `-11 < -6`

2. Show that `a × b` can be less than `min(a, b)`.
  > When:
  >&nbsp;&nbsp; `a < 0` (i.e: negative)
  >&nbsp;&nbsp; `b > 0` (i.e: positive)
  >Then:
  >&nbsp;&nbsp; `min(a, b) = a`
  >&nbsp;&nbsp; `a * b < a`
  >Example:
  >&nbsp;&nbsp; `min(-3, 4) = -3`
  >&nbsp;&nbsp; `-3 * 4 = -12`
  >&nbsp;&nbsp; `-12 < -3`

3. Design/draw a road network with two points a and b such that the fastest route between a and b is not the shortest route.
  ```ascii
  a──────c──────b
  │             │
  │             │
  └────d────────┘

  Route `acb` have a toll gate, is in development and have a speed limit.
  Route `adb` is longer, but has none of these impediment.

  Route `adb` will be faster than the shorter `acb` route.
  ```

4. Design/draw a road network with two points a and b such that the shortest route between a and b is not the route with the fewest turns.
   ```ascii
  a────┐   ┌────b
  │    └─c─┘    │
  │             │
  └──────d──────┘

  Route `acb` is the shortest but has 4 turns.
  Route `adb` is the longest and has only 2 turns.
   ```