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

  hasInvitation() {
    return this.invitation;
  }

  removeInvitation() {
    this.invitation = null;
  }

  hasTicket() {
    return this.ticket;
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }

}