import BankServiceImpl from "../src/domain/BankServiceImpl";

export default class BankService implements BankServiceImpl {
  validatePinNumber(pinNumber: number) {
    return true;
  }
}
