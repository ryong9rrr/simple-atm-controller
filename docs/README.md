# ATM Controller Requirements

## **BankService**

```ts
interface BankServiceImpl {
  validatePinNumber: (pinNumber: number) => boolean;
}
```

## **CashLockerService**

```ts
interface CashLockerServiceImpl {
  deposit: (money: number) => void;
  withdraw: (money: number) => void;
}
```

## ATM Controller

- [x] ATM has **BankService**.

- [x] ATM has **CashLocker**.

- [x] insert **UserAccount**

- [x] check correct PIN number with **BankService**.

- [x] select Account.

- [ ] ATM work
  - [ ] confirm balance.
  - [ ] deposit money with **BankService, CashLocker**.
  - [ ] withdraw money with **BankService, CashLocker**.
  - [ ] end working
  - [ ] rework
