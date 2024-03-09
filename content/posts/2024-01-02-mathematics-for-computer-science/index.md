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
### 🥷 Symbols
| Symbol         | Meaning                                                      |
|----------------|--------------------------------------------------------------|
| $\mathbb{Z}^+$ | Positive integers                                            |
| $:=$           | **Equal by definition**: It implies that the equality is based on a specific definition or set of rules rather than just numerical equivalence.<br/><br/>It’s always ok simply to write $=$ instead of $::=$. Something that is equal by definition is a form of equality. |
| $\forall$      | For all                                                      |
| $ℕ$            | Non-negative integers                                        |
| $\in$          | Element of                                                   |

### 🙊 Propositions
A **proposition** is a statement that is either true or false. e.g. Fermat’s last theorem is a proposition that states there are no positive integers $x$, $y$, and $z$ such that $x^n + y^n = z^n$. The proposition was shared by Fermat in 1630 and was only proven in 1994.

> 💡 You can't check a claim about an infinite set by checking a finite sample of its elements, no matter how large the sample.

A **conjecture** is a proposition that is believed to be true based on limited evidence but has not been proven. e.g. Goldbach’s conjecture states that every even integer greater than 2 is the sum of two prime numbers.

A **predicate** is a proposition whose truth depends on the value of one or more variables. e.g “n is a perfect square”.

Like propositions, predicates are named with letters, often with function notation.  The output is either true or false depending on the input. This is in contrast to ordinary functions where the output is a numerical value. e.g. $p(n) ::= n \; is \; a \; perfect \; square$.

> 💡 Euler is pronounced “oiler”.

### 🧩 Logical operators
**Logical operators** or connectives are used to combine or modify logical propositions. These are the common logical connectives:

#### 🫠 1. Negation (NOT)
**Symbol**: $\neg$

**Negation** is a unary logical connective that takes a proposition $P$ to another proposition “not $P$”, standing for “$P$ is not true”. It is interpreted intuitively as being `true` when $P$ is `false`, and `false` when $P$ is `true`.

| P   | ¬P  |
|-----|-----|
| 1   | 0   |
| 0   | 1   |

#### 🪢 2. Conjunction (AND)
**Symbol**: $\land$

A **conjunction** is a (binary) logical connective on two propositions that produces a value of `true` <mark>if and only if</mark> both propositions are `true`.

| A   | B   | A $\land$ B |
|-----|-----|-------------|
| 0   | 0   | 0           |
| 0   | 1   | 0           |
| 1   | 0   | 0           |
| 1   | 1   | 1           |

#### 💁 3. (Inclusive) Disjunction (OR)
**Symbol**: $\lor$

A **disjunction** is a (binary) logical connective on two propositions that produces a value of `true` <mark>if either one</mark> of the propositions is `true`.

| A   | B   | A $\lor$ B |
|-----|-----|------------|
| 0   | 0   | 0          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 1          |

#### 👉 4. Implication (if…then)
**Symbol**: $\implies$

A **material** **implication** or **material** **conditional** is a (binary) logical connective on two propositions that produces a value of `true` unless its first proposition (antecedent) is `true` and its second proposition (consequent) is `false`.

The only circumstance in which a conditional is `false` is if the consequent ($Q$) does not follow when the antecedent ($P$) is `true`. The material conditional is only concerned with the hypothetical relationship between $P$ and $Q$, not their actual truth values.

> ✏️ I have always scratched my head as to why the conditional was defined to be true if the antecedent is false.
> 
> One explanation is that if the antecedent is `false`, then the relationship (implication) doesn't matter. But then this begs the question: Why not define it to be `false`?
> 
> One argument against that is that it would make the implication operator have the same truth table as the conjunction operator. But why is that a problem?
> 
> The argument that sits well with me so far is: The logical connectives must be truth-functional, i.e. its truth value is determined exclusively by the truth values of its arguments. Hence, we must define them to have a stable value. When $P$ is `false`, we have two viable options: return `false` or return `true`. We are using the latter option because of legacy reasons and because it “plays nicely” with the rest of the subject.

The material conditional ($P \implies Q$) can be expressed in various ways:
1. If $P$, then $Q$.
2. $P$ implies $Q$.
3. $P$ only if $Q$.
4. $Q$ if $P$.
5. $Q$ whenever $P$.

| P | Q | P → Q |
|---|---|-------|
| 0 | 0 |   1   |
| 0 | 1 |   1   |
| 1 | 0 |   0   |
| 1 | 1 |   1   |

####  👉👈 5. Equivalence (if and only if)
**Symbol**: $\iff$

"$P$ if and only if $Q$" can be decomposed into "$P$ if $Q$" and "$P$ only if $Q$":
* "$P$ if $Q$" — This is simply a different way of saying "If $Q$ then $P$" (i.e. $Q \implies P$).
* "$P$ only if $Q$" — which means $P$ can be true only if $Q$ is `true`, which is to say that when $Q$ is `false`, $P$ must also be `false`. Notice that it does not tell us anything about the truth value of $P$ if $Q$ is true.

If we know that P is true, then we know Q must also be true; however, if we know Q is true, we do not necessarily know anything about the truth value of P.

Consider the example: "The light bulb will go on only if the light switch works." If the light bulb goes on, then the switch must have worked, since failure of the switch would have meant darkness; however, if the light switch works, you don't necessarily know that the light bulb will go on, since there could be something wrong in the wiring or the bulb itself that keeps it from illuminating.

This is translated into FOL as P > Q.

So P if and only if Q resolves into P > Q and Q > P, which is to say that

P iff Q is logically equivalent to (P > Q) & (Q > P) .



| P | Q | P ≡ Q |
|---|---|-------|
| 1 | 1 |   1   |
| 1 | 0 |   0   |
| 0 | 1 |   0   |
| 0 | 0 |   1   |

### Inference rules
An inference is a set of premises together with a conclusion.

**Logical deductions** or **inference rules** are used to prove new propositions using axioms or previously proved propositions.

a sound argument is an argument that is valid and all of its premises are true (and as a consequence its conclusion is true as well). An argument is valid if, assuming its premises are true, the conclusion must be true.

*(premises)*
All men are mortal.
Socrates is a man.
*(conclusion)*
Therefore, Socrates is mortal.

However, an argument can be valid without being sound. For example:
All birds can fly.
Penguins are birds.
Therefore, penguins can fly.

The standard form for inference rules is:
$$
\frac{\text{Premise 1} \quad \text{Premise 2}}{\text{Conclusion}}
$$

When the statements above the line (the premises or antecedents) are proved, then the statement below the line (the conclusion or consequent) is considered to also be proved.

16. Some inference rules:
    * **Transitive property of implication**: if "p implies q" is true, and "q implies r" is also true, then you can infer that "p implies r" is true as well.
      $$
      (p \implies q) \land (q \implies r) \implies (p \implies r)
      $$
    * **Contraposition**: It states that if a statement "not p" implies "not q" then "q" implies "p." In simpler terms, if the absence of $p$ implies the absence of $q$, then the presence of $q$ implies the presence of $p$.
      $$
      (NOT(p) \implies NOT(q)) \implies (p \implies r)
      $$
* 
17. An **antecedent** is the first half of a hypothetical proposition, whenever the if-clause precedes the then-clause. E.g. If $P$, then $Q$. $P$ is the antecedent.
18. A **consequent** is the second half of a hypothetical proposition. In the standard form of such a proposition, it is the part that follows "then". In an implication, if $P$ implies $Q$, then $P$ is called the antecedent and $Q$ is called the consequent.

The statement $\neg q \implies \neg p$ is called the **contraposition** of $p \implies q$. A result of symbolic logic is that p --> q is equivalent to the implication ~q --> ~p, i.e. p --> q = ~q --> ~p. e.g. ``If it is raining, then I'll stay indoors'' is equivalent to the contraposition, ``If I am not indoors, then it is not raining''.

In symbolic logic, the tilde (~) is used to indicate the negation of a statement.
* If p is the statement, ``It is raining'', then ~p is ``It is not raining''.

When an implication is translated by a hypothetical (or conditional) judgment, the antecedent is called the hypothesis (or the condition) and the consequent is called the thesis.

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
>  **Proposition**: “If a number is divisible by $6$, then it is also divisible by $3$”
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
>  **Proposition**: “If $x$ is divisible by $6$, then x is divisible by $3$”
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
>  **Proposition**: If $x + x = x$ then $x = 0$
> 
> **Proof**:
> * Assume $x + x = x$ and $x \neq 0$.
> * Then $2x = x$ and since $x \neq 0$ we can divide both sides by $x$ to get $2 = 1$ which is a contradiction.
> * Our assumption that the implication “If $x + x = x$ then $x = 0$” is false is itself false, therefore the original implication is proven to be true. $\blacksquare$

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

#### 🧱 8. Proof by cases
Some implications come in the form, $p_1 \lor p_2 \lor ... \lor p_n \implies q$. Often these cases will be derived in the course of the proof. In this case you must prove that EACH of the separate implications, $p_i \implies q$ is true.

#### 👉👈 7. Proving an if and only if (iff)
##### 🤝 Method 1: Prove each statement implies the other
The statement $P \iff Q$ is equivalent to the the two statements:
* $P \implies Q$ and
* $Q \implies P$

Hence, $P \iff Q$ can be proved by proving the two implications.

e.g.
> **Proposition**: “$P \iff Q$”
> 
> **Proof**:
> First, we show $P \implies Q$
> Use any of the types of proof above to prove this.
> 
> Finally, we show $Q \implies P$
> Use any of the types of proof above to prove this.
> 
> This proves the proposition because $P \iff Q = (P \implies Q) \land (Q \implies P) \blacksquare$

##### ⛓️ Method 2: Construct a chain of Iffs
To prove $P \iff Q$ is true, prove $P$ is equivalent to a second statement which is equivalent to a third statement and so forth until you reach $Q$.

This method can lead to short & elegant proofs, but it requires more ingenuity than the first.

e.g.
> **Proposition**: The standard deviation of a sequence of values $x_1$, … , $x_n$ is zero iff all the values are equal to the mean ($\bar{x}$).
> 
> **Proof**:
> We construct a chain of “iff” implications, starting with the statement that the standard deviation is zero:
> $$
> \sqrt{\frac{ (x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + ... + (x_n - \bar{x})^2}{n}} = 0
> $$
> 
> Now, since zero is the only number whose square root is zero, the equation above holds iff:
> $(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + ... + (x_n - \bar{x})^2 = 0$
> 
> Squares of real numbers are always non-negative, so every term on the left-hand side of the equation above is non-negative. This means the above equation holds iff:
>  `Every term on the left-hand side of the equation is zero.`
> 
> But a term $(x_i - \bar{x})^2$  is zero iff $x_i = \bar{x}$, so the above statement is true iff:
> Every $x_i$ equals the mean ($\bar{x}$) $\blacksquare$

#### 💪 Properties of a good proof
> The same rigorous thinking needed for proofs is essential in the design of critical computer systems. When algorithms and protocols only "mostly work" due to reliance on hand-waving arguments, the results can range from problematic to catastrophic

1. **Concise** — Not unnecessarily long.
   * When your proof need facts that are easily stated, but not readily proved, those facts can be pulled out as lemmas.
   * Also, repeated arguments can be captured in lemmas.
2. **Clear** — A proof is an essay, not a calculation. Keep it unambiguous and include explanations.
3. **Linear & logical** — Every statement logically follows from prior statements.
4. **Complete** — Doesn't skip intermediary steps.
5. **Rigorous** — Uses mathematical expressions.