export default interface CashLockerServiceImpl {
  deposit: (money: number) => void;
  withdraw: (money: number) => void;
}
