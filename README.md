# Simple ATM Controller

## Getting Started

#### 1. clone this repository

`git clone [this repository url]`

#### 2. install dependencies

`npm install`

#### 3. run test

`npm run test`

---

### ATM Controller Requirements

#### **BankService**

```ts
interface BankServiceImpl {
  validatePinNumber: (pinNumber: number) => boolean;
}
```

#### **CashLockerService**

```ts
interface CashLockerServiceImpl {
  deposit: (money: number) => void;
  withdraw: (money: number) => void;
}
```

### ATM Controller

- [x] ATM has **BankService**.

- [x] ATM has **CashLocker**.

- [x] insert **UserAccount**

- [x] check correct PIN number with **BankService**.

- [x] select Account.

- [x] ATM work
  - [x] confirm balance.
  - [x] deposit money with **BankService, CashLocker**.
  - [x] withdraw money with **BankService, CashLocker**.
  - [x] end working
