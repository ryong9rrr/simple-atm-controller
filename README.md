# Simple ATM Controller

## Getting Started

#### 1. clone this repository

`git clone https://github.com/ryong9rrr/simple-atm-controller.git`

#### 2. install dependencies

`npm install`

#### 3. run test

`npm run test`

---

# ATM Controller Requirements

## BankServiceImpl

```ts
interface BankServiceImpl {
  validatePinNumber: (pinNumber: number) => boolean;
}
```

## CashLockerServiceImpl

```ts
interface CashLockerServiceImpl {
  deposit: (money: number) => void;
  withdraw: (money: number) => void;
}
```

## UserAccountServiceImpl

```ts
interface UserAccountServiceImpl {
  getPinNumber: () => number;
  getUserAccounts: () => Account[];
  getUserAccount: (accountId: string) => Account | null;
  getBalance: (account: Account) => number;
  deposit: (account: Account, money: number) => void;
  withdraw: (account: Account, money: number) => void;
}
```

## ATM Controller

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
