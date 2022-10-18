import {Ticket} from "./Ticket";

/**
 * 매표소는 티켓과 판매 금액 보관
 * */
export class TicketOffice {
  private amount = 0;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  getTicket() {
    return this.tickets.pop();
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }
}