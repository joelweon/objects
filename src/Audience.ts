import {Bag} from "./Bag";
import {Ticket} from "./Ticket";

/**
 * 가방을 소지한 관람객
 * */
export class Audience {
  private readonly bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  // getBag() {
  //   return this.bag;
  // }

  // 관람객은 초대장, 현금을 본인의 가방에서 확인한다
  // 외부에서는 관람객이 가방이 있는지를 알 필요가 없어진다.
  buy(ticket: Ticket) {
    if (this.bag.hasInvitation()) {
      this.bag.setTicket(ticket);
      this.bag.removeInvitation();
      return 0;
    } else {
      this.bag.setTicket(ticket);
      this.bag.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }
}