import BankService from "../src/domain/BankService";

describe("ATM Controller Test", () => {
  test("ATM has BankServiceImpl, bankService has 'validatePinNumber'", () => {
    const bankService = new BankService();
    expect(bankService.validatePinNumber(123)).toEqual(true);
  });
});
