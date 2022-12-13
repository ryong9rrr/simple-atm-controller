import BankServiceImpl from "./BankServiceImpl";
import CashLockerImpl from "./CashLockerImpl";
import UserAccountServiceImpl from "./UserAccountServiceImpl";

export default class ATM {
  private bankService: BankServiceImpl;
  private cashLockerService: CashLockerImpl;
  private userAccount: UserAccountServiceImpl | null = null;

  constructor(bankService: BankServiceImpl, cashLockerService: CashLockerImpl) {
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
}
