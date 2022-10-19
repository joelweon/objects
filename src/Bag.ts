import {Invitation} from "./Invitation";
import {Ticket} from "./Ticket";

/**
 * 관람객 소지품 - 초대장, 티켓, 현금
 * 이벤트 당첨: 초대장, 현금(선택)
 * 이벤트 미당첨: 티켓, 현금(필수)
 * */
export class Bag {
  private amount;
  private invitation;
  private ticket;

  constructor(amount: number, invitation: Invitation = null) {
    this.amount = amount
    this.invitation = invitation
  }
  
  hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      this.removeInvitation();
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }

  private hasInvitation() {
    return this.invitation;
  }

  private removeInvitation() {
    this.invitation = null;
  }

  private hasTicket() {
    return this.ticket;
  }

  private setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  private minusAmount(amount: number) {
    this.amount -= amount;
  }

  private plusAmount(amount: number) {
    this.amount += amount;
  }

}