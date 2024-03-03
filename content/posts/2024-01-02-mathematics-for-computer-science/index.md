---
title: "[WIP] Mathematics for Computer Science - Notes"
slug: "/2024-01-02-mathematics-for-computer-science"
date: 2024-01-02
canonicalUrl: "https://elvischidera.com/2024-01-02-mathematics-for-computer-science"
banner: ./assets/banner.jpeg
tags:
- notes
---

## Chapter 1: What is a proof?
1. A **proposition** is a statement that is either true or false. e.g.
> **Fermat’s last theorem**: is a proposition that states there are no positive integers $x$, $y$, and $z$ such that $x^n + y^n = z^n$.
> <br/>j
> <br/>
> The proposition was shared by Format in 1630 and was only proven in 1994.
1. The symbol $:=$ means **equal by definition**. It implies that the equality is based on a specific definition or set of rules rather than just numerical equivalence.
2. It’s always ok simply to write $=$ instead of $::=$. Something that is equal by definition is a form of equality.
3. You can't check a claim about an infinite set by checking a finite sample of its elements, no matter how large the sample.
4. A **conjecture** is a statement that is believed to be true based on limited evidence but has not been proven. e.g.
> **Goldbach’s conjecture**: Every even integer greater than 2 is the sum of two prime numbers.

1. $\forall n \in ℕ . p(n) is prime$
Here the symbol $\forall$ is read “for all.”
The symbol **ℕ** stands for the set of nonnegative integers.
The symbol $\in$ is read as “is a member of".
1. A **predicate** is a proposition whose truth depends on the value of one or more variables. e.g “n is a perfect square”.
2. Like propositions, predicates are named with letters, often with function notation.  The output is either true or false depending on the input. This is in contrast to ordinary functions where the output is a numerical value. e.g. $p(n) ::= n is a perfect square$.
3. Important true propositions are called **theorems**.
4. A **lemma** is a preliminary proposition useful for proving later propositions.
5.  A **corollary** is a proposition that follows in just a few logical steps from a theorem.
6.  Euler (pronounced “oiler”).
7.  **Logical deductions** or **inference rules** are used to prove new propositions using previously proved ones.
8.  The notation for inference rules is:

When the statements above the line (antecedents) are proved, then the statement below the line (the conclusion or consequent) is considered to also be proved.
1.  **Implies** is a logical term used to express a relationship between two statements. In the context of $p \implies q$, it means "if $p$ is true, then $q$ must also be true." 
2.  Some inference rules:
    * **Transitive property of implication**: if "p implies q" is true, and "q implies r" is also true, then you can infer that "p implies r" is true as well.
      $$
      (p \implies q) \land (q \implies r) \implies (p \implies r)
      $$
    * **Contraposition**: It states that if a statement "not p" implies "not q" then "q" implies "p." In simpler terms, if the absence of $p$ implies the absence of $q$, then the presence of $q$ implies the presence of $p$.
      $$
      (NOT(p) \implies NOT(q)) \implies (p \implies r)
      $$

3.  An **antecedent** is the first half of a hypothetical proposition, whenever the if-clause precedes the then-clause. E.g. If $P$, then $Q$. $P$ is the antecedent.
4.  A **consequent** is the second half of a hypothetical proposition. In the standard form of such a proposition, it is the part that follows "then". In an implication, if $P$ implies $Q$, then $P$ is called the antecedent and $Q$ is called the consequent.

The statement $\neg q \implies \neg p$ is called the **contraposition** of $p \implies q$. A result of symbolic logic is that p --> q is equivalent to the implication ~q --> ~p, i.e. p --> q = ~q --> ~p. e.g. If it is raining, then I'll stay indoors is equivalent to the contraposition, If I am not indoors, then it is not raining.

In symbolic logic, the tilde (~) is used to indicate the negation of a statement.
* If p is the statement, It is raining, then ~p is It is not raining.

### 🧑‍⚖️ Proofs
An **axiom** or **postulate** is a proposition that is <mark>taken to be true</mark>, to serve as a premise or starting point for further reasoning and arguments. For instance, Euclid begun with five assumptions (axioms) about geometry, which seemed undeniable based on direct experience, e.g. “There is a straight line segment between every pair of points”.

A **proof** is a sequence of <mark>logical deductions</mark> from <mark>axioms</mark> or <mark>previously proved statements</mark> (like theorems) that concludes with the proposition of interest.

The **axiomatic method**, invented by Euclid, is the standard procedure for establishing truth in mathematics using axioms and proofs.

#### 📜 Proof terminologies
1. Important true propositions are called **theorems**.
2. A **lemma** is a preliminary proposition useful for proving later propositions.
3. A **corollary** is a proposition that follows in just a few logical steps from a theorem.

#### 🧱 Types of proofs
##### 1. 🎯 Direct proof
To prove $p \implies q$ directly, assume $p$ is true, then use <mark>axioms</mark>, <mark>definitions</mark>, <mark>rules of inference</mark>, and <mark>logical equivalences</mark> to prove $q$ is also true.

A useful technique in constructing direct proofs is working backwards:
* Examine the conclusion $q$ and try to determine what statements <mark>would imply it</mark>.
* Ask the same question about that statement and so on.
* Combined with working forwards (what does $p$ <mark>imply</mark>?), you can work towards the middle.

e.g.
>  Prove “If a number is divisible by $6$, then it is also divisible by $3$”
> 
> **Proof**:
> * Assume $x$ is divisible by $6$ (💬 Assume $p$).
> * $x = k \cdot 6$ (for some $k$ in $\mathbb{Z}$, by definition of division).
> * $x = k \cdot (2 \cdot 3)$ (known fact about numbers).
> * $x = (k \cdot 2) \cdot 3$ (associative property of multiplication).
> * $x = m \cdot 3$ (where $m = k \cdot  2$ is an integer).
> * $x$ is divisible by $3$ $\blacksquare$ (💬 Demonstrated that $q$ logically follows).

-----

##### 2. 🙃 Proof by contraposition (a type of indirect proof)

To prove $p \implies q$ by **contraposition**, assume $q$ is false, then use <mark>axioms</mark>, <mark>definitions</mark>, <mark>rules of inference</mark>, and <mark>logical equivalences</mark> to prove $p$ is also false. This is essentially a **direct proof** that $\neg q \implies \neg p$.

The best approach in doing a proof by contrapositive is to restate the original problem in the form, If $p$, then $q$. The contrapositive is then, If not $q$, then not $p$.

e.g.
>  Prove “If $x$ is divisible by $6$, then x is divisible by $3$”
> 
> **Proof**:
> * Assume $x$ is not divisible by $3$ (💬 Assume $\neg q$). 
> * $x \neq k \cdot 3$ ($\forall k \in \mathbb{Z}$)
> * $x \neq 2m \cdot 3$ ($\forall m \in \mathbb{Z}$)
> * $x \neq m \cdot 6$ ($\forall m \in \mathbb{Z}$)
> * $x$ is not divisible by $6$ $\blacksquare$ (💬 $\neg p$).

-----

##### 3. 🙅 Proof by contradiction (also a type of indirect proof)

This method works by assuming your implication is not true, then deriving a contradiction. Recall that if $p$ is false then $p \implies q$ is always true, thus the only way our implication can be false is if $p$ is true and $q$ is false.

In practice then, we assume our premise is true but our conclusion is false and use this to derive a contradiction: either a violation of a law or a previously established result. Having derived the contradiction you can then conclude that your assumption (that $p \implies q$ is false) was false and so the implication is true.

e.g.
>  Prove “If $x + x = x$ then $x = 0$”
> 
> **Proof**:
> * Assume $x + x = x$ and $x \neq 0$.
> * Then $2x = x$ and since $x \neq 0$ we can divide both sides by $x$ to get $2 = 1$ which is a contradiction.
> * Our assumption that the implication “If $x + x = x$ then x = 0$” is false is itself false, therefore the original implication is proven to be true. $\blacksquare$

-----

##### 4. 🙄 Trivial proof
A proof is trivial if the statement $q$ in the implication $p \implies q$ is <mark>true regardless of the truth value of $p$</mark>.

e.g.
> Prove $A \neq \{\} \implies A$ is a subset of $A \cup B$ for any set $B$.

-----

##### 5. 🤷 Vacuous proof
If the statement $p$ in the implication $p \implies q$ is false then the implication is always true.

e.g.
> $A$ is a proper subset of $A \implies A$ is a proper subset of $A \cap B$ for any set $B$, where the containments here are strict.


#### 💪 Properties of a good proof
> The same rigorous thinking needed for proofs is essential in the design of critical computer systems. When algorithms and protocols only "mostly work" due to reliance on hand-waving arguments, the results can range from problematic to catastrophic
1. Concise — Not unnecessarily long.
   * When your proof need facts that are easily stated, but not readily proved, those facts can be pulled out as lemmas.
   * Also, repeated arguments can be captured in lemmas.
2. Clear — A proof is an essay, not a calculation. Keep it unambiguous and include explanations.
3. Linear & logical — Every statement logically follows from prior statements.
4. Complete — Doesn't skip intermediary steps.
5. Rigorous — Uses mathematical expressions.

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
5. 
6. A conjecture is a conclusion or a proposition which is suspected to be true due to preliminary supporting evidence, but for which no proof or disproof has yet been found.
7. $\forall \; a, \; b, \;, c, \; d \in \mathbb{Z}^+ . \; a^4 + b^4 + c^4 = d^4$
Here, $\mathbb{Z}^+$ is a symbol for the positive integers.