import {Ticket} from "./Ticket";
import {Audience} from "./Audience";

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

  sellTicketTo(audience: Audience) {
    const fee = audience.buy(this.getTicket());
    this.plusAmount(fee);
  }

  private getTicket() {
    return this.tickets.pop();
  }

  private plusAmount(amount: number) {
    this.amount += amount;
  }

  private minusAmount(amount: number) {
    this.amount -= amount;
  }
}