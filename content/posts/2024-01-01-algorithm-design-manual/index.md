---
title: "[WIP] The Algorithm Design Manual - Notes"
slug: "/2024-01-01-algorithm-design-manual"
date: 2024-01-01
canonicalUrl: "https://elvischidera.com/2024-01-01-algorithm-design-manual"
banner: ./assets/banner.jpeg
tags:
  - notes
---

> Pet Peeve: The author sometimes skips steps without an explaination (like the integer truncation in "stop and think: incremental correctness"). Some examples are hard to follow for an international student (like understanding the lottery system in "war story: pschic modeling").


## Chapter 1 — Introduction to Algorithm Design
1. An `algorithmic problem` is specified by describing the complete set of **instances** it must work on and of its output after running on one of these instances.
2. An `algorithm` is a procedure that takes any of the possible input instances and transforms it to the desired output.
3. There is a distinction between a general problem and an instance of a problem. E.g:
   > **Problem**: Sorting<br/>
   > **Input**: A sequence of `n` keys a<sub>1</sub>,...,a<sub>n</sub>.<br/>
   > **Output**: The permutation (reordering) of the input sequence such that: a′<sub>1</sub> ≤ a′<sub>2</sub> ≤ ··· ≤ a′<sub>n−1</sub> ≤ a′<sub>n</sub>.<br/>
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
> **Problem**: Robot Tour Optimization (aka: Traveling Salesman Problem [TSP]).<br/>
> **Input**: A set `S` of `n` points in the plane.<br/>
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

![](assets/fig1.8.png)
<small> Modeling real-world structures with trees and graphs</small>

#### Recursive Objects
> Learning to think recursively is learning to look for big things that are made from smaller things of exactly the same type as the big thing.<br/>
> If you think of houses as sets of rooms, then adding or deleting a room still leaves a house behind.  

1. **Permutations**: Delete the first element of a permutation of `n` things `{1, ..., n}` and you get a permutation of the remaining `n-1` things. Basis case: {}
2. **Subsets**: Every subset of `{1, ..., n}` contains a subset of `(1, ..., n - 1)` obtained by deleting element `n`. Basis case: {}
3. **Trees**: Delete the root of a tree and you get a collection of smaller trees. Delete any leaf of a tree and you get a slightly smaller tree. Basis case: 1 vertex.
4. **Graphs**: Delete any vertex from a graph, and you get a smaller graph. Now divide the vertices of a graph into two groups, left and right. Cut through all edges that span from left to right, and you get two smaller graphs, and a bunch of broken edges. Basis case: 1 vertex.
5. **Point sets**: Take a cloud of points, and separate them into two groups by drawing a line. Now you have two smaller clouds of points. Basis case: 1 point.
6. **Polygons**: Inserting any internal chord between two non-adjacent vertices of a simple polygon cuts it into two smaller polygons. Basis case: triangle.
7. **Strings**: Delete the first character from a string, and you get a shorter string. Basis case: empty string.

> Recursive descriptions of objects require both decomposition rules and basis cases, namely the specification of the smallest and simplest objects where the decomposition stops.  

![](assets/fig1.9.png)
<small>Recursive decompositions of combinatorial objects. (left column) Permutations, subsets, trees, and graphs. (right column) Point sets, polygons, and strings</small>

### Proof by Contradiction
1. The basic scheme of a contradiction argument is as follows:
    * Assume that the hypothesis (the statement you want to prove) is false.
    * Develop some logical consequences of this assumption.
    * Show that one consequence is demonstrably false, thereby showing that the assumption is incorrect and the hypothesis is true.
2. The classic contradiction argument is Euclid's proof that there are an infinite number of prime numbers:
     * The negation of the claim would be that there are only a finite number of primes, say `m`, which can be listed as `p₁,..., pₘ`. So let's assume this is the case and work with it.
     * Prime numbers have particular properties with respect to division. Suppose we construct the integer formed as the product of "all" of the listed primes:
     \[
      N = \prod_{i = 1}^{m} p_{i}
     \]
     * This integer `N` has the property that it is divisible by each and every one of the known primes, because of how it was built.
     * But consider the integer `N + 1`. It can't be divisible by `p₁ = 2`, because `N` is.
     * The same is true for `p₂ = 3` and every other listed prime. Since a +1 can’t be evenly split by any of the prime numbers because they are bigger.
     * Since `N + 1` doesn't have any non-trivial factor, this means it must be prime.
     * But you asserted that there are exactly `m` prime numbers, none of which are `N + 1`, because `N + 1 > m`.
     * This assertion is false, so there cannot be a bounded number of primes.
3. For a contradiction argument to be convincing, the final consequence must be clearly, ridiculously false.

### Estimation
1. Principled guessing is called estimation.
2. Estimation problems are best solved through some kind of logical reasoning process, typically a mix of principled calculations and analogies.
3. Principled calculations give the answer as a function of quantities that either you already know, can look up on Google, or feel confident enough to guess.
4. Analogies reference your past experiences, recalling those that seem similar to some aspect of the problem at hand.

### Exercises
#### Finding counter examples
1. Show that `a + b` can be less than `min(a, b)`.
  >When:<br/>
  >&nbsp;&nbsp; `a and b < 0` (i.e: negative)<br/>
  >&nbsp;&nbsp; `a <= b`<br/> 
  >Then:<br/>
  >&nbsp;&nbsp; `min(a, b) = a`<br/>
  >&nbsp;&nbsp; `a + b < a`<br/>
  >Example:<br/>
  >&nbsp;&nbsp; `min(-6, -5) = -6`<br/>
  >&nbsp;&nbsp; `-6 + -5 = -6 -5 = -11`<br/>
  >&nbsp;&nbsp; `-11 < -6`

2. Show that `a × b` can be less than `min(a, b)`.
  > When:<br/>
  >&nbsp;&nbsp; `a < 0` (i.e: negative)<br/>
  >&nbsp;&nbsp; `b > 0` (i.e: positive)<br/>
  >Then:<br/>
  >&nbsp;&nbsp; `min(a, b) = a`<br/>
  >&nbsp;&nbsp; `a * b < a`<br/>
  >Example:<br/>
  >&nbsp;&nbsp; `min(-3, 4) = -3`<br/>
  >&nbsp;&nbsp; `-3 * 4 = -12`<br/>
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

#### Induction
1. Prove that $\sum_{i = 1}^{n} i = \frac{n(n + 1)}{2}$ for n ≥ 0, by induction.

## Chapter 2: Algorithm Analysis
We use two tools to compare the efficiency of algorithms:
1. The RAM model of computation
2. The asymptotic analysis of computational complexity.

### The RAM model of computation
Machine-independent algorithm design depends upon a hypothetical computation model called the **Random Access Machine** (RAM) where:
* Each simple operation (`+`, `*`, `-`, `=`, `if`, `call`) takes exactly one time step.
* Loops and subroutines are the composition of many single-step operations.
* Each memory access takes exactly one time step, regardless of whether your data was in cache or disk.
* There is unlimited memory.

The RAM is a simple model of how computers perform. It’s doesn’t capture the full complexity of real computers. However, the RAM is an excellent model for understanding how an algorithm will perform on a real computer.

>  A model is a simplification or approximation of reality and hence will not reflect all of reality. […] "all models are wrong, but some are useful." — [Model Selection and Multimodel Inference](https://link.springer.com/book/10.1007/b97636)

Under the RAM model, we measure run time by counting the number of steps an algorithm takes on a given problem instance.

To understand how good or bad an algorithm is in general, we must know how it works over all possible input instances. For the problem of sorting, the set of possible input instances includes every possible arrangement of `n` keys, for all possible values of `n` (number of items to sort).

Time complexity defines the running time of any given algorithm as a function of input size. There are three types:
* The **worst-case complexity** of an algorithm is the function defined by the maximum number of steps taken in any instance of size `n`.
* The **best-case complexity** of an algorithm is the function defined by the minimum number of steps taken in any instance of size `n`.
* The **average-case complexity** of an algorithm is the function defined by the average number of steps over all instances of size `n`.

Figure2.1

In practice, the worst-case complexity is the most useful because:
* The best-case is usually unlikely.
* The average-case is difficult to establish.

## Chapter 3: Data structures
1. A **data type** (or simply **type**) is a collection or grouping of data values, usually specified by:
   * a set of possible values,
   * a set of allowed operations on these values, and/or
   * a representation of these values as machine types.
2. An **abstract data type** (**ADT**) is a data type that does not specify the concrete representation of the data. They are defined by their behavior (semantics) from the `point of view of a user of the data`, specifically in terms of:
   * possible values,
   * possible operations on data of this type, and
   * the behavior of these operations.
3. ADT contrasts with **data structures**, which are concrete representations of data, and are the `point of view of an implementer`. The generic definition of "data structure" is anything that can hold your data in a structured way.
4. The distinction between ADTs and data-structures lies in the POV / level of abstraction. Some important points:
   * User’s POV: An `int` in a programming language sense is a fixed-width data structure. An integer in a mathematical sense is an ADT. For most purposes the user can work with the abstraction rather than the concrete choice of representation, and can simply use the data as if the type were truly abstract.
   * Name overloading: An array is an ADT when viewed as a collection of items that can be accessed by an index; An array is a data-structure when viewed as a collection of fixed sized items stored as contiguous blocks in memory.
   * ADT implementations: There are multiple implementations of an ADT. E.g: A list can be implemented as an array or a linked-list.
5. Data-structures can be classified into:
   * **Contiguous data-structures**: composed of single slabs of memory. E.g. arrays, matrices, heaps and hash tables, etc.
   * **Linked data-structures**: composed of distinct chunks of memory bound together by pointers. E.g: linked-list, trees, graph adjacency lists, etc.
### Arrays
1. Arrays are data-structures of fixed-size elements stored contiguously such that each element can be efficiently located by its index.
   $$
   MemoryAddress(i) = FirstAddress + (i \cdot ElementWordSize)
   $$
2. Advantages of arrays:
   * **Constant-time access given the index**: because the index of each element maps directly to a particular memory address.
   * **Space efficiency**: because no space is wasted with links, end-of-element information, or other per element metadata.
   * **Memory locality**: because the physical continuity between successive data access helps exploit the high-speed cache memory on modern computer architecture.
3. The primary disadvantage of arrays is that the number of elements (i.e. the array size) is fixed. The capacity needs to be specified at allocation.
4. **Dynamic arrays** overcome the fixed-size limit limitation of static arrays.
   [![Dynamic array](assets/dynamic_array.svg)](https://en.wikipedia.org/wiki/Dynamic_array#/media/File:Dynamic_array.svg)
5. When a dynamic array's capacity is exceeded, it internally resizes:
   * Allocates a new bigger contiguous array.
   * Copy the content of the old array to the new array
6. To avoid incurring the cost of resizing many times, dynamic arrays resize by a large amount, such as doubling in size, and use the reserved space for future expansion.
7. As $n$ elements are added, the capacities form a geometric progression. Expanding the array by any constant proportion $a$ ensures that inserting $n$ elements takes <span style="color:#df4759">$O(n)$</span> time overall, meaning that each insertion takes **amortized** constant time.
8. The key idea of **amortized analysis** is to consider the `worst-case cost of a sequence of operations` on a data structure, rather than the worst-case individual cost of any particular operation.
9.  The **aggregate method** is one of the methods for performing amortized analysis. In this method, the total cost of performing a sequence of $m$ operations on the data structure is divided by the number of operations $m$, yielding an average cost per operation, which is defined as the amortized cost.
10. The aggregate method of amortized analysis applied to dynamic arrays with doubling:
   * $$
     t(i) = \begin{cases}
     2^{k}+1 &\text{if } i = 2^{k} \\
     1&\text{otherwise}
     \end{cases}
     $$
   * $t(i)$ defines the time it takes to perform the i-th `addition` (0 indexed).
   * The first case of $t(i)$ defines the time taken when the array’s capacity is exceeded and has to doubled. Because of the doubling, this case happens on every power of 2 ($2^{k}$). The time taken is $2^{k}+1$ because:
     * $2^{k}$ has to be copied to the new array and
     * The i-th element has to be `added` into the new array.
   * The second case of $t(i)$ defines the time taken when the array capacity is not exceeded. This is constant time because only a single `addition` is performed.
   *  $t(i)$ example on a dynamic array initialized with a capacity of $1$:

        | i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
        |---|---|---|---|---|---|---|---|---|---|---|
        | $t(i)$ | $1$ | $3$ | $3$ | $1$ | $5$ | $1$ | $1$ | $1$ | $9$ | $1$ |
        | Capacity | $1$ | $2$ | $4$ | $4$ | $8$ | $8$ | $8$ | $8$ | $16$ | $16$ |

   * $$
     Amortized \space cost = \frac{\sum_{i=0}^{n}t(i)}{n}
     $$
   * In both cases of the function, there is a $1$. So summation from $0$ to $n$ results in an $n$. We are left with $2^{i}$ when $i = 2^{k}$. Hence,
   $$
   \sum_{i=0}^{n}t(i) = n + \sum_{i=0}^{\log_2 n}2^{i}
   $$
   * The second operand is the partial sum of a geometric series. Applying the formula:
   $$
   \sum_{i=0}^{n}r^{i} = \frac{1 - r^{n+1}}{1 - r}\\
   = \frac{1 - 2^{(\log_2 n) + 1}}{1 - 2} = \frac{- 2^{(\log_2 n) + 1} + 1}{-1}\\
   = 2^{(\log_2 n) + 1} - 1\\
   = 2^{\log_2 n} \cdot 2^{1} - 1
   $$
   * $\log_2 n$ is the number to which $2$ must be raised to obtain $n$. Raising that number then to $2$ results in $n$. Hence, the last expression can be simplified to:
   $$
   = n \cdot 2^{1} - 1\\
   = 2n - 1
   $$
   * The summation can be re-expressed again as:
   $$
   \sum_{i=0}^{n}t(i) = n + 2n - 1
   $$
   * The $-1$ is inconsequencial in the time analysis, hence the summation can be simplified into:
   $$
   \sum_{i=0}^{n}t(i) \leq 3n
   $$
   * > **Interpretation**: A sequence of $n$ `add` operations costs at most $3n$, hence each `add` in the sequence costs at most $3$ (constant time) on average, which is the amortized cost according to the aggregate method.<br/>
     > **Conclusion**: This proves that the amortized cost of insertion to a dynamic array with doubling is <span style="color:#42ba96">$O(1)$</span>.
11. The key idea behind amortized analysis is that the cost of a particular operation can be partially paid for by the cost of other operations that are performed later. It avoids the limitations of worst-case analysis, which can overestimate the performance of a data structure if the worst-case scenario is unlikely to occur frequently.

### Pointers and linked structures
[![Singly linked list](assets/singly_linked_list.svg)](https://en.wikipedia.org/wiki/Linked_list#/media/File:Singly-linked-list.svg)
1. **Pointers** represent the address of a location in memory. Pointers are the connections that hold the nodes (i.e. elements) of linked data-structures together.
2. In C:
   * `*p` denotes the item that is pointed to by pointer `p`
   * `&x` denotes the address of (i.e. pointer to) a particular variable `x`.
   * A special `NULL` pointer value is used to denote unassigned pointers.
3. All linked data-structures share certain properties:
   * Each node contains one or more data field.
   * Each node contains a pointer field to at least one other node.
   * Finally, we need a pointer to the head of the data-structure, so we know where to access it.
   Example linked-list displaying these properties:
   ```c
    
   typedef struct list {
       data_type data; /* Data field */
       struct list *next; /* Pointer field */
   
   } list;
   ```
4. The **linked-list** is the simplest linked structure.
5. **Singly linked-list** has a pointer to only the successor whereas a **doubly linked-list** has a pointer to both the predecessor and successor.
6. Searching for data `x` in a linked-list recursively:
   ```c
    
   list *search_list(list *listz, data_type x) {
       if (listz == NULL) {
           return(NULL);
       }
   
       // If `x` is in the list, it's either the first element or located in the rest of the list.
       if (listz->data == x) {
           return(listz);
       } else {
           return(search_list(listz.next, x));
       }
   }
   ```
7. Inserting into a singly linked-list at the head:
   ```c
    
   list *insert_list(list **listz, data_type x) {
      list *p; /* temporary pointer */
      p = malloc(sizeof(list));
      p->data = x;
      p->next = *listz;
      // `**listz` denotes that `listz` is a pointer to a pointer to a list node. This line copies `p` to the place pointed to by `listz`, which is the external variable maintaining access to the head of the list.
      *listz = p;
   }
   ```
8. Deletion from a list:
   ```c
    // Used to find the predecessor of the item to be deleted.
   list *item_ahead(list *listz, list *x) {
      if ((listz == NULL) || (listz->next == NULL) {
          return(NULL);
      }
   
   
      if ((listz->next) == x) {
          return(listz);
      } else {
          return(item_ahead(listz->next, x));
      }
   }
   
   // This is called only if `x` exists in the list.
   void *delete_list(list **listz, list **x) {
      list *p; /* element pointer */
      list *pred; /* predecessor pointer */
   
      p = *listz;
      pred = item_ahead(*listz, *x);
   
      // Given that we assume `x` exists in the list, `pred` is only null when the first element is the target.
      if (pred == NULL) { /* splice out of list */
         // Special case: resets the pointer to the head of the list when the first element is deleted.
         *listz = p->next;
      } else {
         pred->next = (*x)->next
      }
   
      free(*x) /* free memory used by node */
   }
   ```
9. The advantages of linked structures over static arrays include:
   * Overflow on linked structures never occurs unless the memory is actually full.
   * Insertion and deletion are simpler than for static arrays. With static arrays, insertions and deletions into the middle requires manually shifting elements.
   * With large records, moving pointers is easier and faster than moving the items themselves.
10. Both arrays and lists can be thought of as recursive objects:
    * Lists — Chopping the first element off a linked-list leaves a smaller linked-list.
    * Arrays — Splitting the first $k$ elements off of an $n$ element array gives two smaller arrays, of size $k$ and $n - k$, respectively.
    * This insight leads to simpler list processing, and efficient divide-and-conquer algorithms like quick-sort and binary search.

### Stacks
[![Stack](assets/stack.webp)](https://www.programiz.com/dsa/stack)

1. **Stacks** are an ADT that supports retrieval by last-in, first-out (LIFO).
2. Primary operations are:
   * `push(x)` — Inserts item `x` at the top of the stack.
   * `pop` — Return and remove the top item of the stack.

### Queues
[![Queue](assets/queue.svg)](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)#/media/File:Data_Queue.svg)

1. **Queues** are an ADT that supports retrieval by first-in, first-out (FIFO).
2. Primary operations are:
   * `enqueue(x)` — Inserts item `x` at the back of the queue.
   * `dequeue` — Return and remove the front item from the queue.
3. Stacks and queues can be effectively implemented using arrays or linked-list.


### Dictionaries
![Dictionary](assets/dictionary.svg)

1. A **dictionary** is an abstract data type that stores a collection of `(key, value) pairs`, such that each possible `key` appears at most once in the collection.
2. The primary operations of a dictionary are:
   * `put(key, value)`
   * `remove(key)`
   * `get(key)`
3. These are two simple but less common implementations of a dictionary:
   * An **association list** is a linked list in which each node comprises a key and a value:
     * The time complexity of get and remove is <span style="color:#df4759">$O(n)$</span>.
     * The time complexity of put is <span style="color:#42ba96">$O(1)$</span> — if the list is unsorted.
   * Direct addressing into an **array**:
     * Potential keys are numbers from the universe $M \subseteq U$
     * A value with key $k \in M$ can be kept under index $k$ in a $\lvert M \rvert$-element array.
     * The time complexity of put, get and remove is <span style="color:#42ba96">$O(1)$</span>.
     * The space complexity is $\lvert U \rvert$. Hence, this structure is impractical when $\lvert U \rvert >> n$; where $n$ is the number of values inserted.
4. These are the two common data-structures used to implement a dictionary:
   * **Hash tables**.
   * **Self-balancing binary search tree**.
5. Binary search tree based maps are in-order and hence can satisfy range queries (find all values between two bounds) whereas a hash-map can only find exact values.

### Binary search tree (BST)
1. A **binary tree** is a tree data-structure in which each node has at most two children, referred to as the left child and the right child.
2. A binary tree can be viewed as a linked-list with two pointers per node.
3. A **rooted tree** is a tree in which one node has been designated the root.
4. A **rooted binary tree** is recursively defined as either being:
   * Empty or
   * Consisting of a node called the root, together with two **rooted binary trees** called the left and right subtrees.
5. A **binary search tree** is a rooted binary tree data-structure such that for any node $x$, all nodes in the left subtree of $x$ have keys $<x$ while all nodes in the right subtree of $x$ have keys $>x$.
6. Binary search trees’ height range from $\log_2 n$ (when balanced) to $n$ (when degenerate).
7. The time complexity of operations on the binary search tree is linear with respect to the height of the tree $O(h)$.
8. Hence, in a balanced binary search tree, the nodes are laid out so that each comparison skips about half of the remaining tree, the lookup performance is proportional to that of binary logarithm <span style="color:#ffc107">$O(\log n)$</span>.
9. An implementation of a binary tree:
   ```c
    
   typedef struct tree {
       data_type data; /* Data field */
       struct tree *parent; /* Pointer to parent */
       struct tree *left; /* Pointer to left chid */
       struct tree *right; /* Pointer to right child */
   } tree;
   ```
10. Searching in a binary search tree:
11. 

### Priority queue
1. A **priority queue** is an abstract data-type similar to a regular queue or stack data-structure. Each element in a priority queue has an associated `priority`.
2. In a priority queue, elements with high priority are served before elements with low priority.
3. Priority queues are often implemented using **heaps**.
4. A priority queue can also be inefficiently implemented as an unsorted list or a sorted list.
5. A priority queue can be used for sorting: insert all the elements to be sorted into a priority queue, and sequentially remove them.
6. The primary operations of a priority queue are:
   * `Add` an element with a given priority,
   * `Delete`  an element,
   * Get the the highest priority element and remove it (`Pull`),
   * Get the the highest priority element without removing it (`Peek`).
7. Stacks and queues can be implemented as particular kinds of priority queues, with the priority determined by the order in which the elements are inserted.

### Hash tables
[![Hash table](assets/hash_table.svg)](https://en.wikipedia.org/wiki/Hash_table#/media/File:Hash_table_3_1_1_0_1_0_0_SP.svg)
1. **Hash tables** are a data-structure that efficiently implements a dictionary. They exploit the fact that looking an element up in an array takes constant time once you have its index.
2. The basic idea is to pick a hash function $h$ that maps every possible key $x$ to a small integer $h(x)$. Then we store $x$ and its value in an array at index $h(x)$; the array itself is essentially the hash table.
3. A **hash function** $h$ maps the universe $U$ of keys to array indices within the hash table.
   $$
   h : U → \{ 0, …, n - 1 \}
   $$
4. Properties of a good hash function:
   * **Efficient** — Computing $h(x)$ should require a constant number of steps per bit of $x$.
   * **Uniform** — $h$ should ideally map elements randomly and uniformly over the entire range of integers.
5. A hash function for an arbitrary key $x$ (like a string) is typically defined as:
   $$
   h(x) = toInteger(x) \bmod n
   $$
6. This is the polynomial function that Java uses to convert strings to integers:
   $$
   s[0]*31^{n-1} + s[1]*31^{n-2} + ... + s[n-1]
   $$
   Which translates into the following code:
   ```java
    int hashcode = 0;
    for (int i = 0; i < s.length(); i++) {
        hashcode = (hashcode * 31) + s.charAt(i);
    }
   ```
7. A collision occurs when:
   $$
   h(j) = h(k) \land j \neq k
   $$
8. Collisions can be minimized but cannot be eliminated (see Pigeon hole principle). It’s impossible to eliminate collisions without knowing the $U$ ahead of time.
9. The two common methods for collision resolution:
   * **Separate chaining** — the values of the hash-table’s array is a linked-list.
     * Inserting adds the key and its value to the head of the linked-list at $h(x)$ index in <span style="color:#42ba96">$O(1)$</span> time. Keys that collided hence form a chain.
     * Searching involves going to $h(x)$ index and iterating through the linked-list until a key equality check passes.
   [![Hash table separate chaining](assets/hash_table_separate_chaining.svg)](https://en.wikipedia.org/wiki/Hash_table#/media/File:Hash_table_5_0_1_1_1_1_1_LL.svg)
   * **Open addressing** — every key and its value is stored in the hash-table’s array itself, and the resolution is performed through `probing`.
     * Inserting goes to $h(x)$ index. If it is occupied, it proceeds on some probe sequence until an unoccupied index is found.
     * Searching is done in the same sequence, until either the key is found, or an unoccupied array index is found, which indicates an unsuccessful search.
     * Linear probing is often used — it simply checks the next indices linearly: $h(x) + 1$, $h(x) + 2$. But there is quadratic probing and other probing sequences.
   ![Hash table open addressing](assets/hash_table_open_addressing.svg)
10. Search algorithms that use hashing consist of two separate parts: hashing and collision resolution.
11. Other uses of hashing (or a hash table):
    * Plagiarism detection using Rabin-Karp string matching algorithm
    * English dictionary search
    * Finding distinct elements
    * Counting frequencies of items
12. Time complexity in big O notation

    | Operation	| Average | Worst case |
    |-----------|---------|------------|
    | Search | $Θ(1)$ | <span style="color:#df4759">$O(n)$</span> |
    | Insert | $Θ(1)$ | <span style="color:#df4759">$O(n)$</span>|
    | Delete | $Θ(1)$ | <span style="color:#df4759">$O(n)$</span> |
13. Space complexity is <span style="color:#df4759">$O(n)$</span>.