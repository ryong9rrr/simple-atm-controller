import CashService from "../src/domain/CashLocker";
import BankService from "../src/domain/BankService";
import ATM from "../src/domain/ATM";

describe("ATM Controller Test", () => {
  test("ATM constructor()", () => {
    expect(() => {
      new ATM(new BankService(), new CashService());
    }).not.toThrow();
  });
});
