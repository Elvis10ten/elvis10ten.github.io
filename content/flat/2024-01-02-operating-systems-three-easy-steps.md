#[WIP] Operating Systems: Three easy steps - Notes


## Introduction

1. Von Neumann model of computing
2. Virtualization: The OS takes a physical resource (such as
the processor, or memory, or a disk) and transforms it into a more general,
powerful, and easy-to-use virtual form of itself.
3. System call: In computing, a system call is the programmatic way in which a computer program requests a service from the kernel of the operating system on which it is executed.
4. The OS as a resource manager
5. The OS standard libraries
6. Virtualizing the CPU
7. OS policies
8. Virtual address space
9. Address-space randomization
10. Stack-smashing attacks
11. An OS takes physical resources, such as a CPU, memory, or disk, and virtualizes them. It handles tough and tricky issues related to concurrency. And it stores files persistently, thus making them safe over the long-term.
12. Procedure calls vs system calls.
13. Kernel mode/User mode.

# The Abstraction: The Process

1. A process is a running program
2. CPU time sharing
3. OS Mechanism: Low-level methods or protocols that implement a needed piece of functionality.
4. Context switch
5. **Time sharing:** is a basic technique used by an OS to share a resource. By
allowing the resource to be used for a little while by one entity, and then
a little while by another, and so forth, the resource in question (e.g., the
CPU, or a network link) can be shared by many.
6. **Space sharing:** The counterpart of time sharing is space sharing, where a resource is divided (in space) among those who wish to use it.

For example, disk space is naturally a space shared resource; once a block is assigned to a file, it is normally not assigned to another file until the user deletes the original file.
7. Scheduling policy
8. Process machine state
9. Process address space
10. Instruction pointer/Program pointer
11. Stack and frame pointer
12. 
    
    ![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled.png)
    
13. Modern operating systems provide Process interfaces to do the following:
i. **Create**: Create a new Process.
ii. **Destroy**: Forcefully, stop a Process.
iii. **Wait**: Wait for a Process to stop running.
iv. **Miscellaneous control**: Additional control over a process like suspending/resuming a Process.
v. **Status**: Status info about a process like how long it has run, current state, etc.
14. Process Creation Details:
    
    **Loading:**
    i. The OS loads the code and any static data (e.g, initialized variables) into memory, into the address space of the process.
    ii. Programs initially reside on disk (HDD or SSD) in some executable format.
    iii. The process of loading code and static data requires disk IO.
    iv. Early or simple OS load programs **eagerly** (all at once before running the program). Modern OS performs the process **lazily**, ie, by loading pieces of code or data only as they are needed during program execution.
    
    **Initialization:**
    1. The OS allocates memory for the process **runtime stack**. C programs use the stack for local variables, function parameters, & return addresses.
    2. The OS will also likely initialize the stack with **arguments**; specifically, it will fill in the parameters to the **main()** function, i.e., **argc** and the **argv** array.
    
    3. The OS may also allocate some memory for the program’s **heap**. In C
    programs, the heap is used for explicitly requested dynamically-allocated
    data; programs request such space by calling **malloc()** and free it explicitly
    by calling **free()**.
    
    The heap will be small at first; as the program runs, and requests more memory
    via the **malloc()** library API, the OS may get involved and allocate
    more memory to the process to help satisfy such calls.
    
    4. The OS may do some IO initialization.
    
    For example, in **UNIX systems**, each process by default has **three open file descriptors**, for **standard input**, **output**, & **error**; these descriptors let programs easily read input from the terminal and print output to the screen.
    
    ![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%201.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%201.png)
    
15. Primary process states:
i. **Running**: a process is running on a processor.
ii. **Ready**: a process is ready to run but for some reason, the OS has chosen not to run it at this given moment.
iii. **Blocked**: a process has performed some kind of operation that makes it not ready to run until some other event takes place.

A common example: when a process initiates an I/O request to a disk, it becomes blocked and thus some other process can use the processor.
16. A process can be moved between the ready and running states at the discretion of the OS.

Being moved from ready to running means the process has been **scheduled**;
    
    Being moved from running to ready means the process has been
    **de-scheduled**.
    
    Once a process has become **blocked** (e.g., by initiating an
    I/O operation), the OS will keep it as such until some event occurs (e.g.,
    I/O completion); at that point, the process moves to the **ready** state again.
    
    ![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%202.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%202.png)
    
17. Resource utilization
18. A process list
19. The **register context** will hold, for a stopped process, the contents of its **registers**. When a process is stopped, its **registers** will be saved to this memory location;

By restoring these **registers** (i.e., placing their values back into the actual **physical registers**), the OS can **resume** running the process.
20. **The xv6 Proc Structure**

```c

// the information xv6 tracks about each process
// including its register context and state
struct proc {
	char *mem; // Start of process memory
	uint sz; // Size of process memory
	char *kstack; // Bottom of kernel stack
	// for this process
	enum proc_state state; // Process state
	int pid; // Process ID
	struct proc *parent; // Parent process
	void *chan; // If !zero, sleeping on chan
	int killed; // If !zero, has been killed
	struct file *ofile[NOFILE]; // Open files
	struct inode *cwd; // Current directory
	struct context context; // Switch here to run process
	struct trapframe *tf; // Trap frame for the
	// current interrupt
};
```

```c
// the different states a process can be in
enum proc_state {
	UNUSED, EMBRYO, SLEEPING, RUNNABLE, RUNNING, ZOMBIE
};
```

```c
// the registers xv6 will save and restore
// to stop and subsequently restart a process
struct context {
	int eip;
	int esp;
	int ebx;
	int ecx;
	int edx;
	int esi;
	int edi;
	int ebp;
};
```

21. **Process Control Block (PCB)**, a fancy way of talking about a C structure that contains information about each process (also sometimes called a **process descriptor**).

22. An OS can have additional process states as evident from the xv6 structure.

Sometimes an OS will have an **initial** state that the process is in when it is being created.

Also, a process could be placed in a **final** state where it has **exited** but has not yet been cleaned up (in UNIX-based systems, this is called the **zombie** state).

This final state can be useful as it allows other processes (usually the **parent** that created the process) to examine the **return code** of the process and see if the just-finished process executed successfully (usually, programs return **zero** in **UNIX-based systems** when they have
accomplished a task successfully, and **non-zero** otherwise).

When finished, the **parent** will make one final call (e.g., **wait()**) to wait for the
completion of the **child**, and to also indicate to the OS that it can clean up
any relevant data structures that referred to the **now-extinct process**.

23. Mechanisms and Policies

24. The **process** is the major OS **abstraction** of a running program. At
any point in time, the process can be described by its state: the contents
of memory in its **address space**, the contents of **CPU registers**
(including the **program counter** and **stack pointer**, among others),
and information about I/O (such as open files which can be read or
written).

25. A **process list** contains information about all processes in the system.

Each entry is found in a **process control block (PCB)**, which is just a structure that contains
information about each process (also sometimes called a **process descriptor**).

# Interlude: Process API

1. Unix **fork** system call
2. The **child** process created by the fork system call is almost an exact copy of the calling **parent** process.
3. The **wait()** system call waits for the **child process** to exit.
4. The **exec()** system call is useful to run programs different from the **calling program**.
5. Lampson law: Neither abstraction or simplicity is a substitute for getting it right.

# Mechanism: Limited Direct Execution

![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%203.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%203.png)

1. Trap instructions.
2. **User mode:** code that runs in user mode is restricted in what it can do.
3. **Kernel mode:** which the operating system (or kernel) runs in. In this mode, code that runs can do what it likes, including privileged operations such as issuing I/O requests and executing
all types of restricted instructions.
4. System calls allow the kernel to carefully expose certain key pieces of functionality to user programs.
5. To execute a **system call**, a program must execute a special **trap instruction**.

This instruction simultaneously jumps into the **kernel** and raises the privilege level to **kernel mode**; Once in the **kernel**, the system can now perform whatever privileged operations are needed (if allowed) and thus do the required work for the calling process.

When finished, the **OS** calls a special **return-from-trap instruction**, which, returns
into the calling u**ser program** while simultaneously reducing the **privilege**
level back to **user mode**.
6. Trap table
7. The OS configures the trap table at boot time. Instructing the hardware what code to run when certain events occur (system calls, hard disk interrupts, etc).
8. Trap handlers
9. fs
    
    ![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%204.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%204.png)
    
    ![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%205.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%205.png)
    
10. System-call number
11. The user code places the desired **system-call number** in a register or on a specified location on the stack;

the **OS**, when handling the system call inside the **trap handler**, examines this number, ensures it is valid, and, if it is, executes the corresponding code.

This level of **indirection** serves as a form of **protection**; user code cannot specify an **exact address** to jump to, but rather must request a particular **service** via **number**.
12. Kernel stack
13. Corporative approach of process switching: Using system calls or the yield() system call. The OS gains control of the system by waiting for a system call from the process or for an illegal operation from the process.
14. Timer interrupts
15. A **timer device** is configured to raise an **interrupt** every **x milliseconds**; when the interrupt is raised, the currently running process is halted, and a pre-configured **interrupt handler** in the OS runs.

An OS regains control of the CPU this way.
16. During boot, the OS configures what code to run during a timer interrupt, and starts the timer.
17. A **context switch** is conceptually simple: the OS saves a few **register values** for the currently-executing process (onto its kernel stack, for example) and restore a few for the soon-to-be-executing process (from its kernel stack).
18. 
    
    ![Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%206.png](Operating%20Systems%20Three%20easy%20steps%2055daca293631414e801ceb1b1b9097d1/Untitled%206.png)
    

### KEY CPU VIRTUALIZATION TERMS (MECHANISMS)

1. The CPU should support at least two modes of execution: a restricted **user mode** and a privileged (non-restricted) **kernel mode**.
2. Typical user applications run in **user mode**, and use a **system call** to trap into the kernel to request operating system services.
3. The **trap instruction** saves the register state carefully, changes the hardware status to **kernel mode**, and jumps into the OS to a pre-specified destination: **the trap table**.
4. When the OS finishes servicing a system call, it returns to the user program via another special **return-from-trap instruction**, which reduces privilege and returns control to the instruction after the trap that jumped into the OS.
5. The **trap tables** must be set up by the OS at boot time, and make sure that they cannot be readily modified by user programs. All of this is part of the **limited direct execution protocol** which runs programs efficiently but without loss of OS control.
6. Once a program is running, the OS must use hardware mechanisms to ensure the user program does not run forever, namely the **timer interrupt**. This approach is a **non-cooperative approach** to **CPU** scheduling.
7. Sometimes the OS, during a **timer interrupt** or **system call**, might wish to switch from running the current process to a different one, a low-level technique is known as a **context switch**.

# Scheduling: Introduction

1. Turnaround time = Time of completion - Time of arrival
2. Scheduling metric
3. Performance metric
4. Fairness metric; As measured (for example) by Jain's fairness index.
5. Performance and fairness are often at odds in scheduling.
6. FIFO Scheduling Algorithm
7. Convoy effect: where a number of relatively-short potential consumers of a resource get queued, behind a heavyweight resource consumer.
8. Shortest Job First (SJF) Scheduling Algorithm
9. Shortest Time To Completion First (STCF) Scheduling Algorithm: A preemptive SJF. Any time a new job enters the system, the STCF scheduler determines which of the remaining jobs (including the new job) has the least time left, and schedules that one.
10. Response time metric.
Response time = Time of first run - Time of arrival
11. Round Robin Scheduling Algorithm: Instead of running jobs to completion, RR runs a job for a
time slice (sometimes called a scheduling quantum) and then switches to the next job in the run queue.
12.