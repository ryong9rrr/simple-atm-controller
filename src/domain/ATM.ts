import BankServiceImpl from "./BankServiceImpl";
import CashLockerImpl from "./CashLockerImpl";
import UserAccountServiceImpl from "./UserAccountServiceImpl";

interface ConstructorProps {
  bankService: BankServiceImpl;
  cashLockerService: CashLockerImpl;
}

export default class ATM {
  private bankService: BankServiceImpl;
  private cashLockerService: CashLockerImpl;
  private userAccount: UserAccountServiceImpl | null = null;

  constructor({ bankService, cashLockerService }: ConstructorProps) {
    this.bankService = bankService;
    this.cashLockerService = cashLockerService;
  }

  private setUserAccount(userAccount: UserAccountServiceImpl | null) {
    this.userAccount = userAccount;
  }

  endWork() {
    this.setUserAccount(null);
  }

  getCurrentUserAccount() {
    return this.userAccount;
  }

  insert(userAccount: UserAccountServiceImpl) {
    const isAuth = this.bankService.validatePinNumber(
      userAccount.getPinNumber(),
    );
    if (!isAuth) {
      throw new Error("PIN number is not authorized.");
    }
    this.setUserAccount(userAccount);
  }

  selectAccount(accountId: string) {
    if (!this.userAccount) {
      throw new Error("The account does not exist.");
    }

    const selectedAccount = this.userAccount.getUserAccount(accountId);
    if (!selectedAccount) {
      throw new Error("The account does not exist.");
    }

    return selectedAccount;
  }
}
