# KBRA In-Person Interview Question

Asked June 20th, 2017 at KBRA Dresher Office, PA

---

### **Question:**

Create two functions:
1. **RomanToNum** : converts Roman Numerals from 1-100 to their respective number value
2. **NumToRoman** : converts numbers from 1-100 to their respective Roman Numeral representation.

It should be written in pure JavaScript and be tested using Jasmine to pass the following tests (examples, not exact) :

- expect(RomanToNum("IV")).toBe(4)
- expect(RomanToNum("VI")).toBe(6)
- expect(RomanToNum("X")).toBe(10)

- expect(RomanToNum("IV")).toBe(42)
- expect(RomanToNum("IV")).toBe(69)
- expect(RomanToNum("IV")).toBe(99)

- expect(NumToRoman(4)).toBe("IV")
- expect(NumToRoman(44)).toBe("XLIV")
- expect(NumToRoman(98)).toBe("XCIX")

You can use [this chart](http://literacy.kent.edu/Minigrants/Cinci/romanchart.htm) as reference.

---

### **Solution:**

[StackOverflow Example](https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript)

1. **RomanToNum**

- Assume the input parameter is "romanInput".

- Create a map using I, IV, V, IX, X, XL, L, XC, and C (every time the starting letters of the numbers change, create a new breakpoint).

- Assign the value of each of the keys to their respective number value (1, 4, 5, 9, 10, 40, 50, 90, 100). 

- Now do a while loop that breaks when the romanInput is empty. Inside the while loop, have an accumulator variable that starts at 0.

- In the while loop, check the romanInput if it starts with one of the keys from your RomanToNum Map. (Start with highest values)

- If there's a match, set romanInput to a substring that cuts out that part of the string.

- Based on which key matched, add that sum to your accumulator.

- This method will wittle down your romanInput and take the sum of all parts and return the RomanToNum value as output

2. **NumToRoman**

- Do the same thing for NumToRoman, but swap the key and value usage

---

If you have any questions, feel free to message me at tehjawn@gmail.com or crystalfruit.john@gmail.com.
