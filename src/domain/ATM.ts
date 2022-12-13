import BankServiceImpl from "./BankServiceImpl";
import CashLockerImpl from "./CashLockerImpl";

export default class ATM {
  private bankService: BankServiceImpl;
  private cashService: CashLockerImpl;

  constructor(bankService: BankServiceImpl, cashService: CashLockerImpl) {
    this.bankService = bankService;
    this.cashService = cashService;
  }
}
