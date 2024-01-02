---
title: "[WIP] Mathematics for Computer Science - Notes"
slug: "/2024-01-02-mathematics-for-computer-science"
date: 2024-01-02
canonicalUrl: "https://elvischidera.com/2024-01-02-mathematics-for-computer-science"
banner: ./assets/banner.jpeg
tags:
  - notes
---

## Chapter 1: What is a proof

### Proposition:

1. A **proposition** is a statement (communication) that is either true or false.
2. The symbol ":=" is defined to read "equal by definition", and is used to define letters or symbols used to refer to commonly occurring objects.
Statements involving the symbol ":=" are always assumed to be true.
There is a subtle, but important difference between the symbols ":=" and "=".
For example, we may first write "a:=4". This defines the symbol 'a' to equal 4, which is then assumed to be true.
Then "a=5" and "a=4" are statements, the first of which is false and the second true.
3. In general, you can’t check a claim about an infinite set by checking a finite sample of its elements, no matter how large the sample.
4. $\forall n \in ℕ. \; p(n) \; is \; prime$
Here the symbol $\forall$ is read “for all.”
The symbol **ℕ** stands for the set of nonnegative integers.
The symbol $\in$ is read as “is a member of".
The period after the **ℕ** is just a separator between phrases.
5. Euler (pronounced “oiler”)
6. A conjecture is a conclusion or a proposition which is suspected to be true due to preliminary supporting evidence, but for which no proof or disproof has yet been found.
7. $\forall \; a, \; b, \;, c, \; d \in \mathbb{Z}^+ . \; a^4 + b^4 + c^4 = d^4$
Here, $\mathbb{Z}^+$ is a symbol for the positive integers.

### Predicates:

1. A Predicate is a proposition that may be true or false depending on the values of its variables.
2. Eg: **“n is a perfect square”** describes a predicate, since it is either true or false depending on the value of **n**.
3. Predicates are named with letters, often with function notation. Eg:
p(n) ::= "n is a perfect square"
The output is either true or false. This is in contrast to ordinary functions where the output is a numerical value.

### The Axiomatic Method

1. An axiom or postulate is a statement that is taken to be true, to serve as a premise or starting point for further reasoning and arguments.
2. A proof is a sequence of logical deductions from axioms and previously proved statements that concludes with the proposition in question.
3. There are several common terms for a proposition that has been proved. The
different terms hint at the role of the proposition within a larger body of work:

 i. Important true propositions are called theorems.
 ii. A lemma is a preliminary proposition useful for proving later propositions.
 iii. A corollary is a proposition that follows in just a few logical steps from a theorem.
4. Euclid’s axiom-and-proof approach, now called the axiomatic method.