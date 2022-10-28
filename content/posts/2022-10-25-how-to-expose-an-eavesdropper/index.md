---
title: "How to Expose an Eavesdropper — Paper Summary"
slug: "/2022-10-25-how-to-expose-an-eavesdropper"
date: 2022-10-25
canonicalUrl: "https://elvischidera.com/2022-10-25-how-to-expose-an-eavesdropper/"
banner: ./assets/banner.jpeg
tags:
  - summary
  - paper
---

Authors: Ronald L. Rivest and Adi Shamir

Date: 1984

Link: [PDF](https://dl.acm.org/doi/pdf/10.1145/358027.358053)

-----

1. The paper present a protocol for establishing **secure communications** over an **insecure communications channel** in the absence of trusted third parties or authenticated keys.
2. The protocol is an improvement over the simpler protocol in which the communicating parties exchanged their public encryption keys and used them to encrypt messages.
3. The protocol forces a potential eavesdropper — if they wants to understand the communication — to reveal their existence by modifying and seriously garbling the communication.
4. **Eavesdropper**: someone who wants to monitor the communication between two parties without **tampering** with the data and without exposing his **existence**.
5. An eavesdropper has to be as **transparent** as possible to minimize detection: They can tamper with the the **ciphertext** stream (by deleting, delaying, substituting, or inserting ciphertexts), but they can’t tamper with the **cleartext** received by the communicating parties.
6. In the context of a public-key crypto-system, a successful eavesdropper must actively participate in the key exchange protocol.
7. A well-known and serious problem with **unauthenticated public-key exchange protocols** is that the communication between two parties, <font color="#0B8BAA">A</font> and <font color="#ac28f6">B</font>, can be transparently monitored by an eavesdropper, <font color="#d53032">C</font>, who inserts into the communication line an encryption/decryption device as follows:
     > When <font color="#0B8BAA">A</font> wants to communicate with <font color="#ac28f6">B</font>, <font color="#d53032">C</font> replaces both the public key, <font color="#0B8BAA">KA</font>, that <font color="#0B8BAA">A</font> sends to <font color="#ac28f6">B</font>B and the public key, <font color="#ac28f6">KB</font>, that <font color="#ac28f6">B</font> sends to <font color="#0B8BAA">A</font> by his own public key, <font color="#d53032">KC</font> (or by a pair of keys, <font color="#d53032">KC'</font> and <font color="#d53032">KC''</font>, if the keys contain an identifying prefix). Whenever <font color="#0B8BAA">A</font> sends an encrypted message <font color="#d53032">EKC(</font><font color="#0B8BAA">MA</font><font color="#d53032">)</font> to <font color="#ac28f6">B</font>, <font color="#d53032">C</font> intercepts it, decrypts it in order to read <font color="#0B8BAA">MA</font>, and then reencrypts it as <font color="#ac28f6">EKB(</font><font color="#0B8BAA">MA</font><font color="#ac28f6">)</font> before sending it to <font color="#ac28f6">B</font>. Messages, <font color="#ac28f6">MB</font>, sent by <font color="#ac28f6">B</font> to <font color="#0B8BAA">A</font> are handled in a similar way.
8. **Key authentication** is the process of assuring that the key of "person A" held by "person B" does in fact belong to "person A" and vice versa.
9. The protocol proposed in this paper forces the eavesdropper C to act in a non-transparent way — i.e: modifying the cleartext. Thus, it only works (i.e: capable of exposing an eavesdropper) if A and B share knowledge of each other that C is not able to emulate. E.g. Tone of voice, patterns in text, etc.
10. **The "Interlock" protocol**: After <font color="#0B8BAA">A</font> and <font color="#ac28f6">B</font> have exchanged their public keys, they exchange a pair of data blocks, <font color="#0B8BAA">MA</font> and <font color="#ac28f6">MB</font>, as follows:
    * <font color="#0B8BAA">A</font> encrypts <font color="#0B8BAA">MA</font> under <font color="#ac28f6">KB</font> but sends <font color="#ac28f6">B</font> only the first half of the bits of the resulting ciphertext <font color="#ac28f6">EKB(</font><font color="#0B8BAA">MA</font><font color="#ac28f6">)</font>.
    * <font color="#ac28f6">B</font> encrypts <font color="#ac28f6">MB</font> under <font color="#0B8BAA">KA</font> and sends <font color="#0B8BAA">A</font> the first half of <font color="#0B8BAA">EKA(</font><font color="#ac28f6">MB</font><font color="#0B8BAA">)</font>.
    * <font color="#0B8BAA">A</font> sends <font color="#ac28f6">B</font> the second half <font color="#ac28f6">EKB(</font><font color="#0B8BAA">MA</font><font color="#ac28f6">)</font>.
    * <font color="#ac28f6">B</font> sends <font color="#0B8BAA">A</font> the second half of <font color="#0B8BAA">EKA(</font><font color="#ac28f6">MB</font><font color="#0B8BAA">)</font>.
    * <font color="#0B8BAA">A</font> and <font color="#ac28f6">B</font> concatenate the two halves of <font color="#0B8BAA">EKA(</font><font color="#ac28f6">MB</font><font color="#0B8BAA">)</font> and <font color="#ac28f6">EKB(</font><font color="#0B8BAA">MA</font><font color="#ac28f6">)</font>, respectively, and use their secret decryption keys to read the messages.
11. Each side performs a step in this protocol only after they receives the information sent by the other side in the previous step.
12. Any attempt by C to read MA and MB will either garble or completely change the communication between A and B:
    * If C tries to use the relay attack described in (7), they can’t decrypt half of MA. They have to wait until the end to get the full MA to decrypt.
    * Because the protocol wouldn’t proceed without each previous step (12), C is forced to commit to the first half of the ciphertexts before they know the full message. They have two options:
        * Send the message MA as-is to B and MB as-is to A: However, since the eavesdropper has intercepted and changed the public keys on both sides as described in (7), neither side will be able to decrypt the message using their private keys.
        * Invent a new MA’ and MB’: By the time he discovers the true values of MA and MB in Steps 3 and 4, it is too late to change MA' and MB', since he is already committed to the first halves of their ciphertexts.
13. The key is that the transmission of the
first part effectively commits the sender to the final cleartext although the cleartext cannot be computed without the use of the second half as well.
14. Hence, other two-part methods can be used instead of transmitting the two halves of the cipher-text separately as proposed above. E.g: the first part could be a "**cryptographic checksum**" or "**one-way function**" of the ciphertext, and the second part could be the ciphertext itself.
15. If A and B want to exchange `n` blocks of information, they can repeat the interlock protocol for each pair of blocks. While a delayed relay attack can be successful in this scenario, C will be forced to deliver messages out of phase, and hence, wouldn’t be transparent to A and B.
16. One mode of operation in which the existence of an eavesdropper cannot be exposed is a one-way communication between A and B.