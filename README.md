<p align="center">
  <img src="https://i.gyazo.com/4fa6564e41a8dbb832a1f407f8464a9d.png" width="350"/>
</p>

# KBRA

A Coding Challenge for Kroll Bond Rating Agency Completed by John Nguyen

### [View the simplified version on CodePen](https://codepen.io/tehjawn/pen/KqgoQN?editors=1111)

---

## 4 Step Setup

*Requirements* : [NodeJS v^6.0.0](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

**1. Download Repository**

> [Download](https://github.com/tehjawn/kbra/archive/master.zip) **-or-** git clone https://github.com/tehjawn/kbra.git

**2. Navigate to Local Folder**

> Navigate to directory via command line or terminal

**3. Install Dependencies**

> npm install

**4. Run Dev Server**

> npm start

---

## Challenge Description

#### User Story

> As a clock enthusiast, I want to know how many times a clock tower will ring its bell between two given times so that I can plan to sing along.

#### Background

> A clock tower will ring its bell every hour, on the hour, a number of times equal to the number indicated by the hours hand.

*Example*

- At 3pm, the clock tower will ring the bell three times. At midnight, it will ring the bell 12 times.

#### Technical Specification

> Write a class with a method called "countBells" that will accept a start time and end time. Both times will be in twenty-four hour notation, such as 12:00 for noon and 15:30 for half-past three in the afternoon.

> Your function should return a integer representing the number of times the clock tower will ring its bell between the two provided times.

*Notes*

- If either time is on the hour (ex. 14:00) then you should count the bell rings that would occur at that hour.

- If both times are equal, treat it as if twenty-four hours will pass and not that the two times are the same time on the same day.

#### Test Cases

1. INPUT $startTime = '2:00'; $endTime = '3:00'; OUTPUT 5

2. INPUT $startTime = '14:00'; $endTime = '15:00'; OUTPUT 5

3. INPUT $startTime = '14:23'; $endTime = '15:42'; OUTPUT 3

4. INPUT $startTime = '23:00'; $endTime = '1:00'; OUTPUT 24

---

#### Resources

- [KBRA Website](https://www.krollbondratings.com/)
- [Live on CodePen](https://codepen.io/tehjawn/pen/KqgoQN?editors=1111)
- [John Nguyen Resume](https://drive.google.com/file/d/0B4L2bHrQgHD4SFd1UVp4TDNZZm8/view)
- [John Nguyen on LinkedIn](https://www.linkedin.com/in/john-nguyen-10a4938b/)