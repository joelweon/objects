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

  buy(ticket: Ticket) {
    return this.bag.hold(ticket);
  }
}