# ATM Controller Requirements

## **BankService**

```ts
interface BankServiceImpl {
  validatePinNumber: (pinNumber: number) => boolean;
}
```

## ATM Controller

- [ ] ATM has **BankService**.

- [ ] ATM has **CashLocker**.

- [ ] insert **UserAccount**(BankCard, BankBook... is **BankAccount**)

- [ ] check correct PIN number with **BankService**.

- [ ] select Account.

- [ ] ATM work
  - [ ] confirm balance.
  - [ ] deposit money with **BankService, CashLocker**.
  - [ ] withdraw money with **BankService, CashLocker**.
  - [ ] end working
  - [ ] rework
