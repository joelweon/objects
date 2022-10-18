import {Bag} from "./Bag";

/**
 * 가방을 소지한 관람객
 * */
export class Audience {
  private readonly bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  getBag() {
    return this.bag;
  }
}