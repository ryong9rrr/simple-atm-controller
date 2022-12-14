import CashLockerServiceImpl from "../src/domain/CashLockerServiceImpl";

export default class CashLocker implements CashLockerServiceImpl {
  private money: number;
  constructor() {
    this.money = Math.floor(Number.MAX_SAFE_INTEGER / 2);
  }

  deposit(money: number) {
    try {
      this.money += money;
    } catch (error) {
      // if error...
      throw new Error("CashLocker is broken.");
    }
  }

  withdraw(money: number) {
    try {
      this.money -= money;
    } catch (error) {
      // if error...
      throw new Error("CashLocker is broken.");
    }
  }
}
