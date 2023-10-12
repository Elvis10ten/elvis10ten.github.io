---
title: "Calculus"
slug: "2023-10-12-calculus"
date: 2023-10-12
canonicalUrl: "https://elvischidera.com/2023-10-12-calculus"
banner: ./assets/banner.jpeg
tags:
  - summary
  - book
---

Intro

-----

## Chapter 1: Functions and Graphs

### Review of Functions
1. A **function** `f` consists of a set of inputs, a set of outputs, and a rule for assigning each input to `exactly one` output. The set of inputs is called the **domain** of the function. The set of outputs is called the **range** of the function.
2. For any function, when we know the input, the output is determined, so we say that the `output is a function of the input`.
3. Given two sets `A` and `B`, a set with elements that are ordered pairs `(x, y)`, where `x` is an element of `A` and `y` is an element of `B`, is a relation from `A` to `B`.
4. A function is a special type of relation.
5. For a general function `f` with domain D, we often use `x` to denote the input and `y` to denote the output associated with `x`.
6. When doing so, we refer to `x` as the **independent variable** and `y` as the **dependent variable**, because it depends on `x`.
7. Using function notation, we write `y = f(x)`, and we read this equation as “y equals f of x.”
8. A function can be visualized by plotting points `(x, y)` in the coordinate plane where `y = f(x)`. The **graph of a function** is the set of all these points.
9. Every function has a domain. However, sometimes a function is described with no specific domain given. In this case, the domain is taken to be the set of all real numbers `x` for which `f(x)` is a real number.
10. When describing a set with an infinite number of elements, it is often helpful to use set-builder or interval notation:
```mathematica
    (1, 5) = { x | 1 < x > 5 }
    Interval notation and Set builder.
```
11. Piecewise functions are defined using different equations for different parts of their domain. Eg: a function `f` with a domain that is the set of all real numbers such that `f(x) = 3x + 1` for `x ≥ 2` and `f(x) = x²` for `x < 2`. 
12. Functions can be represented through:
* Tables
* Formulas
* Graphs
13. Given an algebraic formula for a function `f`, the graph of `f` is the set of points `(x, f(x))`, where `x` is in the domain of `f` and `f(x)` is in the range.
14. Those values of `x` where `f(x) = 0` are called the **zeros of a function**.
15. The zeros determine where the graph of `f` intersects the x-axis.
16. The **y-intercept** is given by `(0, f(0))`.
17. Since a function has exactly one output for each input, the graph of a function can have, at most, one y-intercept.
18. Vertical line test: Given a function `f`, every vertical line that may be drawn intersects the graph of `f` no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.
19. We say that a function `f` is **increasing on the interval `I`** if for all `x₁, x₂ ∈ I`,
    `f(x₁) ≤ f(x₂)` when `x₁ < x₂`.
20. We say that a function `f` is **strictly increasing on the interval `I`** if for all `x₁, x₂ ∈ I`,
    `f(x₁) < f(x₂)` when `x₁ < x₂`.
21. We say that a function `f` is **decreasing on the interval `I`** if for all `x₁, x₂ ∈ I`,
    `f(x₁) ≥ f(x₂)` when `x₁ < x₂`.
22. We say that a function `f` is **strictly decreasing on the interval `I`** if for all `x₁, x₂ ∈ I`,
    `f(x₁) > f(x₂)` when `x₁ < x₂`.
23. **To combine functions using mathematical operators**, write the functions with the operator and simplify. E.g:
    * Sum: (f + g)(x) = f(x) + g(x)
    * Difference: (f − g)(x) = f(x) − g(x)
    * Product: (f · g)(x) = f(x)g(x)
    * Quotient: (f / g)(x) = f(x) / g(x) for g(x) ≠ 0

### Basic Classes of Functions
1. Linear functions have the form `f(x) = ax + b`, where `a` and `b` are constants.
2. The graph of any linear function is a line.
3. The **slope** is the change in `y` for each unit change in `x`.
4. The slope measures both the **steepness** and the **direction** of a line:
   * If the slope is positive, the line points upward when moving from left to right.
   * If the slope is negative, the line points downward when moving from left to right.
   * If the slope is zero, the line is horizontal.
5. To calculate the slope of a line, we need to determine the ratio of the change in `y` versus the change in `x`. To do so, we choose any two points `(x₁, y₁)` and `(x₂, y₂)` on the line and calculate (y₂ - y₁) / (x₂ - x₁).
6. The slope is independent of the choice of points `(x₁, y₁)` and `(x₂, y₂)` on the line.
7. Consider line `L` passing through points  `(x₁, y₁)` and `(x₂, y₂)`. Let `Δy = y₂ - y₁` and `Δx = x₂ - x₁` denote the changes in `y` and `x`, respectively. The slope of the line is:
   `m = (y₂ - y₁) / (x₂ - x₁) = Δy / Δx`.
8. The relationship between slope and the formula for a linear function (`f(x) = ax + b`):
   * Evaluating the function `f` at `x = 0`, we see that `(0, b)` is a point on this line.
   * Evaluating this function at `x = 1`, we see that `(1, a + b)` is also a point on this line.
   * `Slope = [(a + b) − b] / (1 − 0) = a`.
   * **The slope-intercept form** of a linear function: We conclude that the formula `f(x) = mx + b` tells us the slope, `m`, and the y-intercept, `(0, b)`.
9. Consider a line passing through the point `(x₁, y₁)` with slope `m`. The equation `y − y₁ = m (x - x₁)` is the **point-slope form** for that linear function.
10. The **standard form of a line** is given by the equation `ax + by = c`, where `a` and `b` are both not zero. This form is more general because it allows for a `vertical line`, `x = k`.
11. A linear function is a special type of a more general class of functions: polynomials.
12. A **polynomial function** is any function that can be written in the form:
    `f(x) = aₙxⁿ + aₙ-₁xⁿ-¹ + … + a₁x + a₀`
    for some integer `n ≥ 0` and constants `aₙ`, `aₙ-₁`,…, `a₀`, where `aₙ ≠ 0`. In the case when `n = 0`, we allow for `a₀ = 0`; if `a₀ = 0`, the function `f(x) = 0` is called the **zero function**.
13. The value `n` is called the **degree of the polynomial**
14. The constant `aₙ` is called the **leading coefficient**.
15. A linear function of the form `f(x) = mx + b` is a polynomial of **degree 1** if `m ≠ 0` and **degree 0** if `m = 0`.
16. A polynomial of **degree 0** is also called a **constant function**.
17. A polynomial function of **degree 2** is called a **quadratic function** and has the form `f(x) = ax2 + bx + c`, where `a ≠ 0`.
18. A polynomial function of **degree 3** is called a **cubic function**.
19. A power function is any function of the form `f(x) = axᵇ`, where `a` and `b` are any real numbers.
20. A power function is also a polynomial function if `b` is a positive integer.
21. If `b` is even, then `f(x) = axᵇ` is an even function because `f(−x) = a(−x)ᵇ = axᵇ` if `b` is even.
22. If `b` is odd, then `f(x) = axᵇ` is an odd function because `f(−x) = a(−x)ᵇ = −axᵇ` if `b` is odd.
23. The **end behavior of a function** `f(x)`  is what happens to the values of `f(x)` as `x → ∞` and as `x → −∞`.
24. The value of `f(x)` either:
    * Approaches a finite number `c` and we say “`f(x)` approaches `c` as `x` goes to infinity,” and we write `f(x) → c` as `x → ∞`. Also, the line `y = c` is a **horizontal asymptote** for the function. E.g, `f(x) = 2 + 1/x`.
    * Approaches ±infinity and we say “f(x) approaches infinity as x approaches infinity,” and we write `f(x) → ∞` as `x → ∞`. E.g, `f(x) = 3x²`.
25. End behavior of polynomials:
    * For a **quadratic function** `f(x) = ax² + bx + c`.
      * If `a > 0`, the values `f(x) → ∞` as `x → ±∞`.
      * If `a < 0`, the values `f(x) → −∞` as `x → ±∞`.
      * Since the graph of a quadratic function is a parabola, the parabola opens upward if `a > 0`; the parabola opens downward if `a < 0`.
    * For a cubic function `f(x) = ax³ + bx2 + cx + d`.
      * If `a > 0`, then `f(x) → ∞` as `x → ∞` and `f(x) → −∞` as `x → −∞`.
      * If `a < 0`, then `f(x) → −∞` as `x → ∞` and `f(x) → ∞` as `x → −∞`.
    * The behavior for higher-degree polynomials can be analyzed similarly.
26. The **zeros of a polynomial** function are where the function intersects the x-axis. To determine where a function `f` intersects the x-axis, we need to solve the equation `f(x) = 0` for `x`:
    * For a linear function `f(x) = mx + b`, the x-intercept is given by `(−b/m, 0)`.
    * For a quadratic function, we can find the zeroes of the quadratic equation `ax² + bx + c = 0`:
      * Sometimes it's possible to factor the equation
      * Make use of the quadratic formula `x = (−b ± √(b2 − 4ac)) ÷ 2a`. The discriminant part of the formula is `b² − 4ac`.
        * If the discriminant `b² − 4ac > 0`, there are two real numbers that satisfy the quadratic equation.
        * If `b² − 4ac = 0`, there is only real number one solution.
        * If `b² − 4ac < 0`, no real numbers satisfy the quadratic equation.
    * In the case of higher-degree polynomials, it may be more complicated to determine where the graph intersects the x-axis.
27. A **mathematical model** is a method of simulating real-life situations with mathematical equations.
28. Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately.
29. Models are useful because they help predict future outcomes.
30. An **algebraic function** is one that involves addition, subtraction, multiplication, division, rational powers, and roots.
31. The two types of algebraic functions are
    * **Rational functions** are any function of the form `f(x) = p(x) / q(x)`, where `p(x)` and `q(x)` are polynomials.
    * **Root functions** are a power function of the form `f(x) = x^1/n`, where `n` is a positive integer greater than one.
32. For root functions, If `n` is even, the domain of `f(x) = x^1/n` is `[0, ∞)`.
33. For root functions, If `n` is odd, the domain of `f(x) = x^1/n` is `[-∞, ∞)` and the function is an odd function.
34. **Transcendental functions** cannot be described by basic algebraic operations. They are said to “transcend,” or go beyond, algebra.
35. The most common transcendental functions are trigonometric, exponential, and logarithmic functions.
36. A **piecewise-defined function** is defined by different formulas on different parts of its domain. An example is the absolute-value function:
    $$
    f(x) = \cases{        x       & $x\ge 0$ \cr
    -x & $x\lt 0$ \cr
    }
    $$
37. To graph a piecewise-defined function, we graph each part of the function in its respective domain, on the same coordinate system. If the formula for a function is different for `x < a` and `x > a`, we need to pay special attention to what happens at `x = a` when we graph the function. Sometimes the graph needs to include an open or closed circle to indicate the value of the function at `x = a`. An open circle is used to denote that a graph doesn’t define the function output at `x = a`. A closed circle is used for the opposite effect.
38. Given the base function `y = f(x)`, we can apply multiple function transformations to it: `y = cf(a(x + b)) + d`. When function transformations are combined, you can follow the order below to get the transformed function’s graph from the  base function’s graph:
    * **Horizontal shift** of the graph of `y = f(x)`.
    * **Horizontal scaling** of the graph of `y = f(x + b)` by a factor of `|a|`. If `a < 0`, reflect the graph about the y-axis.
    * **Vertical scaling** of the graph of `y = f(a(x + b))` by a factor of `|c|`. If `c < 0`, reflect the graph about the x-axis.
    * **Vertical shift** of the graph of `y = cf(a(x + b))`.

An enumeration of the different function transformations and their related effects on the graph of a function:

```

| Transformation of `f`; Where `c > 0` | Effect on the graph of `f`                                   |
|--------------------------------------|--------------------------------------------------------------|
| `f(x) + c`                           | Vertical shift up `c` units                                  |
| `f(x) − c`                           | Vertical shift down `c` units                                |
| `f(x + c)`                           | Shift left by `c` units                                      |
| `f(x − c)`                           | Shift right by `c` units                                     |
| cf(x)                                | Vertical stretch if `c > 1`;<br>Vertical compression if `0 < c < 1` |
| f(cx)                                | Horizontal stretch if `0 < c < 1`;<br>Horizontal compression if `c > 1` |
| −f(x)                                | Reflection about the x-axis                                  |
| f(−x)                                | Reflection about the y-axis                                  |

```

### Trigonometric Functions
1. Almost any repetitive or cyclical motion can be modeled by some combination of trigonometric functions.
2. Radians are a more natural measurement of angles compared to degrees because they are related directly to the **unit circle**, a circle with radius 1.
3. The radian measure of an angle `θ` is the arc length `s` of the associated arc on the unit circle. I.e. the angle corresponding to the arc of length 1 has radian measure 1.
4. Since an angle of `360°` corresponds to the circumference of a circle, or an arc of length `2π` (on the unit circle), we conclude that an angle with a degree measure of `360°` has a radian measure of `2π`.
5. Use the fact that 180° is equivalent to π radians as a conversion factor:
   `1 = π rad / 180° = 180° / π rad`
6. Let `P = (x, y)` be a point on the unit circle centered at the origin `O`. Let `θ` be an angle with an initial side along the positive x-axis and a terminal side given by the line segment `OP`. The trigonometric functions are then defined as:
   * `sinθ = y`
   * `cscθ = 1/y`
   * `cosθ = x`
   * `secθ = 1/x`
   * `tanθ = y/x`
   * `cotθ = x/y`

     If `x = 0`, `secθ` and `tanθ` are undefined. If `y = 0`, then `cotθ` and `cscθ` are undefined.
7. For a point `P = (x, y)` on a circle of radius `r` with a corresponding angle `θ`, the coordinates `x` and `y` satisfy:
   * `cosθ = x / r`
   * `x = r / cosθ`
   * `sinθ = y / r`
   * `y =r / sinθ`L

![](Calculus/30e647ffdbb4ccb4aaaa2056d1a63be9c6754d8f.png)

8. The **ratios of the side lengths of a right triangle** can be expressed in terms of the trigonometric functions *evaluated at either of the acute angles of the triangle*. Let `θ` be one of the acute angles. Let `A` be the length of the adjacent leg, `O` be the length of the opposite leg, and `H` be the length of the hypotenuse. By inscribing the triangle into a circle of radius `H`, we see that `A`, `H`, and `O` satisfy the following relationships with θ:
   * `sinθ = O / H`
   * `cosθ = A / H`
   * `tanθ = O / A`
   * `cscθ = H / O`
   * `secθ = H / A`
   * `cotθ = A / O`

9. A trigonometric identity is an equation involving trigonometric functions that is true for all angles `θ` for which the functions are defined. We can use the identities to help us solve or simplify equations.
10. The main trigonometric identities are:
    * **Reciprocal identities**:
      * `tanθ = sinθ / cosθ`
      * `cotθ = cosθ / sinθ`
      * `cscθ = 1 / sinθ`
      * `secθ = 1 / cosθ`
    * **Pythagorean identities**:
      * sin²θ + cos²θ = 1
      * 1 + tan²θ = sec²θ
      * 1 + cot²θ = csc²θ
    * **Addition and subtraction formulas**:
      * sin(α ± β) = sinα cosβ ∓ cosα sinβ
      * cos(α ± β) = cosα cosβ ∓ sinα sinβ
    * **Double-angle formulas**:
      * sin(2θ) = 2sinθ cosθ
      * cos(2θ) = 2cos²θ − 1 = 1 − 2sin²θ = cos²θ −sin²θ
11. The trigonometric functions are **periodic functions**.
12. The period of a function `f` is defined to be the smallest positive value `p` such that `f(x + p) = f(x)` for all values `x` in the domain of `f`.
13. The sine, cosine, secant, and cosecant functions have a period of `2π`. Since, the angle `θ` and `θ +2π` correspond to the same point on the unit circle.
14. Since the tangent and cotangent functions repeat on an interval of length `π`, their period is `π`.
[Figure1.34]
15. Transformations can be applied to trigonometric functions. E.g. `f(x) = A sin(B(x − α)) + C`where:
    * The constant `α` causes a horizontal or **phase shift**.
    * The factor `B` changes the **period**. This transformed sine function will have a period `2π / |B|`.
    * The factor `A` results in a vertical stretch by a factor of `|A|`. We say `|A|` is the **amplitude of f**.
    * The constant `C` causes a **vertical shift**.
    Figure1.35
16. The graph of `y = cosx` is the graph of `y = sinx` shifted to the left `π / 2` units: `cosx = sin(x + π/2)`.
17. Similarly, we can view the graph of `y = sinx` as the graph of `y = cosx` shifted right `π/2` units: `sinx = cos(x − π/2)`.

### Inverse functions
1. A function maps elements in the domain of `f` to elements in the range of `f`. The inverse function maps each element from the range of `f` back to its corresponding element from the domain of `f`.
2. Given a function `f` with domain `D` and range `R`, its **inverse function** (if it exists) is the function `f⁻¹` with domain `R` and range `D` such that `f⁻¹(y) = x` if `f(x) = y`. In other words, for a function `f` and its inverse `f⁻¹`:
   * `f⁻¹(f(x)) = x` for all `x` in `D`, and
   * `f(f⁻¹(y)) = y` for all `y` in `R`.
3. `f⁻¹` is read as **f inverse**. The `-1` is not used as not used as an exponent.
4. The range of `f` becomes the domain of `f⁻¹` and the domain of `f` becomes the range of `f⁻¹`.
5. A function `f` is a **one-to-one function** if `f(x1) ≠ f(x2)` when `x1 ≠ x2`.
6. The **horizontal line test**: A function `f` is one-to-one if and only if every horizontal line intersects the graph of `f` no more than once.
7. A strategy to find the inverse function of function `f`:
   * Solve the equation `y = f(x)` for `x`.
   * Interchange the variables `x` and `y` and write `y = f⁻¹(x)`. This is because by convention, `x` represent the independent variable and `y` represent the dependent variable. Representing the inverse function in this way is also helpful when graphing a function `f` and its inverse `f⁻¹` on the same axes.
8. The relationship between the graph of a function `f` and the graph of its inverse:
   * Consider the graph of `f` and a point `(a, b)` on the graph.
   * Since `b = f(a)`, then `f⁻¹(b) = a`.
   * Therefore, when we graph `f⁻¹`, the point `(b, a)` is on the graph.
   * As a result, the graph of `f⁻¹`  is a reflection of the graph of `f` about the line `y = x`.
9. For a non one-to-one function `f` we can choose a subset of the domain of `f` such that the function is one-to-one. This subset is called a **restricted domain**. By restricting the domain of `f`, we can define a new function `g` such that the domain of `g` is the restricted domain of `f` and `g(x) = f(x)` for all `x` in the domain of `g`. Then we can define an inverse function for `g` on that domain.
10. The inverse sine function, denoted `sin⁻¹` or `arcsin`, and the inverse cosine function, denoted `cos⁻¹` or `arccos`, are defined on the domain `D = {x| − 1 ≤ x ≤ 1}` as follows:
    * `sin⁻¹(x) = y` if and only if `sin(y) = x` and `−π/2 ≤ y ≤ π/2`;
    * `cos⁻¹(x) = y` if and only if `cos(y) = x` and `0 ≤ y ≤ π`.
11. The inverse tangent function, denoted `tan⁻¹` or `arctan`, and inverse cotangent function, denoted `cot⁻¹` or `arccot`, are defined on the domain `D = {x| − ∞ < x < ∞}` as follows:
    * `tan⁻¹(x) = y` if and only if `tan(y) = x` and `− π 2 < y< π 2`;
    * `cot⁻¹(x) = y` if and only if `cot(y) = x` and `0 < y < π`.
12. The **inverse cosecant function**, denoted `csc⁻¹` or `arccsc`, and **inverse secant function**, denoted `sec⁻¹` or `arcsec`, are defined on the domain `D = {x |x| ≥ 1}` as follows:
    * `csc⁻¹(x) = y` if and only if `csc(y) = x` and `− π 2 ≤ y≤ π 2`, `y ≠ 0`;
    * `sec⁻¹(x) = y` if and only if `sec(y) = x` and `0 ≤ y ≤ π, y ≠ π/2`.
13. The sine function is one-to-one on an infinite number of intervals, but the standard convention is to restrict the domain to the interval `[−π/2, π/2]`. By doing so, we define the inverse sine function on the domain `[−1, 1]` such that for any x in the interval `[−1, 1]`, the inverse sine function tells us which angle θ in the interval `[−π/2, π/2]` satisfies `sinθ = x`.
14. When evaluating an inverse trigonometric function, the output is an angle.

### Exponential and logarithmic functions
1. Any function of the form `f(x) = bˣ`, where `b > 0`, `b ≠ 1`, is an **exponential function** with **base** `b` and **exponent** `x`.
2. The domain of the exponential function is `(−∞, ∞)` and the range is `(0, ∞)`. 
3. For `b > 1`, `f(x) = bˣ`  is increasing on `(−∞, ∞)` and `bˣ → ∞` as `x → ∞`, whereas `bˣ → 0` as `x → −∞`.
4. For `0 < b < 1`, `f(x) = bˣ`  is decreasing on `(−∞, ∞)` and `bˣ → 0` as `x → ∞`, whereas `bˣ → 0` as `x → −∞`.
5. Exponential functions have constant bases and variable exponents.
6. Note that a function of the form `f(x) = xᵇ` for some constant `b` is not an **exponential function** but a **power function**.
7. An exponential function grows faster than a power function.
8. Properties of exponents:
   * If `x` is a positive integer, then `bˣ = b · b ⋯ b` (with `x` factors of `b`).
   * If `x` is a negative integer, then `bˣ = 1/bˣ`.
   * If  `x` is zero,  then `bˣ = 1`.
   * If `x` is a rational number (`x = c/d`; where `c` and `d` are integers), then `bˣ = ᵈ√bᶜ`.
9. **Laws of Exponents** (For any constants a > 0, b > 0, and for all x and y,)
   * `bˣ · bʸ = bˣ⁺ʸ`
   * `bˣ / bʸ = bˣ⁻ʸ`
   * `(bˣ)ʸ = bˣʸ`
   * `(ab)ˣ = aˣbˣ`
   * `aˣ / bˣ = (a/b)ˣ`
10. The function `f(x) = eˣ` is called the **natural exponential function**.
11. `e ≈ 2.718282`.
12. ￼ The function `f(x) = eˣ` is the only exponential function with tangent line at `x=0` that has aslope of `1`.
13. As we see later in the text, having this property makes the natural exponential function the most simple exponential function to use in many instances.
14. The inverse of exponential functions are logarithm functions.
15. These come in handy when we need to consider any phenomenon that varies over a wide range of values, such as pH in chemistry or decibels in sound levels.
16. For any `b > 0`, `b ≠ 1`, the logarithmic function with base `b`, denoted logb, has domain `(0, ∞)` and range `(−∞, ∞)`, and satisfies `logb(x) = y` if and only if `bʸ = x`.
17. since y = logb(x) and y = bx are inverse functions, logb(bx) = xandb logb(x) = x.
18. The most commonly used logarithmic function is the function loge. Since this function uses natural e as its base, it is called the natural logarithm. Here we use the notation ln(x) or lnx to mean loge(x). 
19. Properties of Logarithms If a,b,c>0,b≠1, and r is any real number, then 1. logb(ac)=logb(a)+logb(c) (Product property) 2. logb⎛ ⎝ a c⎞ ⎠=logb(a)−logb(c) (Quotient property) 3. logb(ar)=rlogb(a) (Power property)
20. The common logarithm is log10 or log.
21. Change-of-Base Formulas Let a > 0, b > 0, and a ≠ 1, b ≠1. 1. ax =bxlogba for any real number x. If b = e, this equation reduces to ax = e xlogea = exlna. 2. logax = logbx logba for any real number x > 0. If b = e, this equation reduces to logax = lnx Proof lna .
22. The hyperbolic functions are defined in terms of certain combinations of ex and e−x. These functions arise naturally in various engineering and physics applications, including the study of water waves and vibrations of elastic membranes. Another common use for a hyperbolic function is the representation of a hanging chain or cable, also known as a catenary.
23. 