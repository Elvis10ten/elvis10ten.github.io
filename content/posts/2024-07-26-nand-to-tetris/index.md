---
title: "[WIP] The Elements of Computing Systems: Building a Modern Computer from First Principles"
slug: "/2024-07-26-nand-to-tetris"
date: 2024-07-26
canonicalUrl: "https://elvischidera.com/2024-07-26-nand-to-tetris"
banner: ./assets/banner.jpg
tags:
  - notes
---

## Chapter 1: Boolean logic
### Binary variables
A binary variable can represent two possible states: `0` and `1`; `off` and `on`; `false` and `true`; `no` and `yes`; etc.

$2^n$ states can be represented by $n$ binary variables.

| $b_2$ | $b_1$ | $b_0$ |
| ----- | ----- | ----- |
| 0     | 0     | 0     |
| 0     | 0     | 1     |
| 0     | 1     | 0     |
| 0     | 1     | 1     |
| 1     | 0     | 0     |
| 1     | 0     | 1     |
| 1     | 1     | 0     |
| 1     | 1     | 1     |
### Boolean functions
A boolean function (aka boolean operator) is a function that operates on boolean variables and returns a boolean value.

The total number of boolean functions for $n$ binary variables is $2^{2^n}$:
* There are $2^n$ input combinations.
* Each of these input combinations can be mapped to either `0` or `1`.
* The total number of boolean functions is thus: $2^{2^n}$
* e.g. There are `16` boolean distinct functions for `2` binary variables.

# The elements of computing systems

## Chapter 1: Boolean logic
Every digital device is based on a set of chips designed to store and process binary information. These chips are all made of **elementary logic gates**. Elementary logic gates can be physically realized using many different hardware technologies, but their logical behavior, or abstraction, is consistent across implementations.

### Boolean algebra
**Boolean algebra** manipulates two-state binary values that are typically labeled true/false, 1/0, on/off, etc.

A **boolean function** or **operator** is a function that operates on binary inputs and returns binary outputs.

### Logic gates
A **gate** is a physical device that implements a simple Boolean function. Electricity is commonly used to realize gates and represent binary data. However, they can realized by other means: optically, biologically, etc.

Fig1.4

The book uses gates and chips interchangeably.

Since all logic gates have the same input and output data type (i.e. binary), they can be combined, creating composite gates of arbitrary complexity. e.g. `Xor = Or( And(a, Not(b)), And(Not(a), b) )`.

Fig1.6

Any given logic gate can be viewed from two perspective:
1. **External**: Basically, the interface of the gate, outlining its input pins, output pins, and its behavior.
2. **Internal**: Basically, the implementation of the gate. There can be multiple implementations of a gate’s interface. The goal is to find an implementation that is correct (functional requirement) and efficient (performance requirement).

Fig1.5

### Hardware description language (HDL)
Hardware description language is a formalism used by hardware designers to design chip architecture.

>  The designer specifies the chip logic by writing an HDL program, which is then subjected to a rigorous battery of tests. The tests are carried out virtually, using computer simulation: A special software tool, called a **hardware simulator**, takes the HDL program as input and creates a software representation of the chip logic. Next, the designer can instruct the simulator to test the virtual chip on various sets of inputs. The simulator computes the chip outputs, which are then compared to the desired outputs.

The hardware simulator can also simulate and quantify the performance characteristics (energy consumption, computational speed, cost) of a chip.

### Gates specification
The specifications of the logic gates needed to build the chips of our computer system is given below.

#### Primitive gates
##### Nand gate
Shorthand for **Not-And** because its equivalent to `Not(And(a, b))`.

Various subsets of logical operators can be used for expressing any Boolean function, and `{ And, Or, Not }` is one such subset. Nand is a primitive operator because it can be used to express any of those three basic operators.

Truth table:
| a   | b   | Nand(a, b) |
|:---:|:---:|:----------:|
| 0   | 0   | 1          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 0          |

API:
|           |                                                       |
|-----------|-------------------------------------------------------|
| Chip name | `Nand`                                                |
| Input     | `a`, `b`                                              |
| Output    | `out`                                                 |
| Function  | `if ((a == 1) and (b==1)) then out = 0, else out = 1` |

#### Classical logical gates
These gates implement classical logical operators.

##### Not (aka inverter) gate
This gate outputs the opposite value of its input’s value.

Truth table:
| a | Not(a) |
|-------|---------|
|   0   |    1    |
|   1   |    0    |

API:
|           |                                           |
|-----------|-------------------------------------------|
| Chip name | `Not`                                     |
| Input     | `in`                                      |
| Output    | `out`                                     |
| Function  | `if (in == 0) then out = 1, else out = 0` |

##### And gate
Returns $1$ when both its inputs are $1$, and $0$ otherwise.

Truth table:
| a   | b   | And(a, b) |
|:---:|:---:|:---------:|
| 0   | 0   | 0         |
| 0   | 1   | 0         |
| 1   | 0   | 0         |
| 1   | 1   | 1         |

API:
|           |                                                       |
|-----------|-------------------------------------------------------|
| Chip name | `And`                                                 |
| Input     | `a`, `b`                                              |
| Output    | `out`                                                 |
| Function  | `if ((a == 1) and (b==1)) then out = 1, else out = 0` |

##### Or gate
Returns $1$ when at least one of its inputs is $1$, and $0$ otherwise.

Truth table:
| a   | b   | Or(a, b) |
|:---:|:---:|:--------:|
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

API:
|           |                                                         |
|-----------|---------------------------------------------------------|
| Chip name | `Or`                                                    |
| Input     | `a`, `b`                                                |
| Output    | `out`                                                   |
| Function  | `if ((a == 0) and (b == 0)) then out = 0, else out = 1` |

##### Xor (aka exclusive or) gate
Returns $1$ when exactly one of its input is $1$, and $0$ otherwise.

Truth table:
| a   | b   | Xor(a, b) |
|:---:|:---:|:---------:|
| 0   | 0   | 0         |
| 0   | 1   | 1         |
| 1   | 0   | 1         |
| 1   | 1   | 0         |

API:
|           |                                          |
|-----------|------------------------------------------|
| Chip name | `Xor`                                    |
| Input     | `a`, `b`                                 |
| Output    | `out`                                    |
| Function  | `if (a != b) then out = 1, else out = 0` |

#### Control flow gates
These gates provide means for controlling flows of information.

##### Multiplexer
A multiplexer is a three-input gate. Two input bits, named `a` and `b`, are interpreted as **data bits**, and a third bit, named `sel`, is interpreted as a **selection bit**. The multiplexer uses `sel` to select and output the value of either `a` or `b`.

Fig1.9

Truth table:
| a | b | sel | out |
|---|---|-----|-----|
| 0 | 0 |  0  |  0  |
| 0 | 0 |  1  |  0  |
| 0 | 1 |  0  |  0  |
| 0 | 1 |  1  |  1  |
| 1 | 0 |  0  |  1  |
| 1 | 0 |  1  |  0  |
| 1 | 1 |  0  |  1  |
| 1 | 1 |  1  |  1  |

API:
|           |                                            |
|-----------|--------------------------------------------|
| Chip name | `Mux`                                      |
| Input     | `a`, `b`, `sel`                            |
| Output    | `out`                                      |
| Function  | `if (sel == 0) then out = a, else out = b` |

##### Demultiplexer
A demultiplexer performs the opposite function of a multiplexer: it takes a single input value and routes it to one of two possible outputs, according a selector bit that selects the destination output.

Fig1.10

| in | sel | a | b |
|----|-----|---|---|
|  0 |  0  | 0 | 0 |
|  0 |  1  | 0 | 0 |
|  1 |  0  | 1 | 0 |
|  1 |  1  | 0 | 1 |

API:
|           |                                                              |
|-----------|--------------------------------------------------------------|
| Chip name | `DMux`                                                       |
| Input     | `in`, `sel`                                                  |
| Output    | `a`, `b`                                                     |
| Function  | `if (sel == 0) then {a, b} = {in, 0}, else {a, b} = {0, in} ` |

#### Multi-bit versions of basic gates
This section describes several 16-bit logic gates that will be needed for constructing our target computer platform. HDL programs treat multi-bit values like single-bit values, except that the values can be indexed in order to access individual bits. For example, if `in` and `out` represent 16-bit values, then `out [3] = in[5]` sets the 3rd bit of `out` to the value of the 5th bit of in. The bits are indexed from right to left, the rightmost bit being the 0’th but and the leftmost bit being the 15’th bit (in a 16-bit setting).

##### 16-bit Not gate
Applies the Boolean operation `Not` to every one of the input bits.

API:
|           |                                     |
|-----------|-------------------------------------|
| Chip name | `Not16`                             |
| Input     | `in[16]`                            |
| Output    | `out[16]`                           |
| Function  | `for i = 0..15 out[i] = Not(in[i])` |

##### 16-bit And gate
Applies the Boolean operation `And` to every one of the input bits.

API:
|           |                                          |
|-----------|------------------------------------------|
| Chip name | `And16`                                  |
| Input     | `a[16]`, `b[16]`                         |
| Output    | `out[16]`                                |
| Function  | `for i = 0..15 out[i] = And(a[i], b[i])` |

##### 16-bit Or gate
Applies the Boolean operation `Or` to every one of the input bits.

API:
|           |                                         |
|-----------|-----------------------------------------|
| Chip name | `Or16`                                  |
| Input     | `a[16]`, `b[16]`                        |
| Output    | `out[16]`                               |
| Function  | `for i = 0..15 out[i] = Or(a[i], b[i])` |

##### 16-bit Multiplexer gate
Operates exactly as the basic multiplexer, except that its input and output are 16-bits wide.

API:
|           |                                                              |
|-----------|--------------------------------------------------------------|
| Chip name | `Mux16`                                                      |
| Input     | `a[16]`, `b[16]`, `sel`                                      |
| Output    | `out[16]`                                                    |
| Function  | `if (sel == 0) then for i = 0..15 out[i] = a[i], else for i = 0..15 out[i] = b[i]` |

#### Multi-way versions of basic gates
Logic gates that operate on one or two inputs have natural generalization to multi-way variants that operate on more than two inputs.

##### Multi-way 16-bit demultiplexer gate
An m-way n-bit demultiplexer routes its single n-bit input to one of its m n-bit outputs. The other outputs are set to 0. The selection is specified by a set of k selection bits, where $k = log_2{m}$.

Our target computer platform requires two variants of this chip: a 4-way 1-bit demultiplexer and an 8-way 1-bit demultiplexer.

API:
|           |                                                              |
|-----------|--------------------------------------------------------------|
| Chip name | `DMux4Way`                                                   |
| Input     | `in`, `sel[2]`                                               |
| Output    | `a`, `b`, `c`, `d`                                           |
| Function  | `if (sel == 00) then {a, b, c, d} = {1, 0, 0, 0},<br><br>else if (sel == 01) then {a, b, c, d} = {0, 1, 0, 0},<br><br>else if (sel == 01) then {a, b, c, d} = {0, 0, 1, 0},<br><br>else if (sel == 11) then {a, b, c, d} = {0, 0, 0, 1}<br>` |

|           |                                                              |
|-----------|--------------------------------------------------------------|
| Chip name | `DMux8Way`                                                   |
| Input     | `in`, `sel[3]`                                               |
| Output    | `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`                       |
| Function  | `if (sel == 000) then {a, b, c, …, h} = {1, 0, 0, 0, 0, 0, 0, 0},<br><br>else if (sel == 001) then {a, b, c, …, h} = {0, 1, 0, 0, 0, 0, 0, 0},<br><br>if (sel == 010) then {a, b, c, …, h} = {0, 0, 1, 0, 0, 0, 0, 0},<br><br>…<br><br>if (sel == 111) then {a, b, c, …, h} = {0, 0, 0, 0, 0, 0, 0, 1}<br>` |