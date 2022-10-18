import {TicketOffice} from "./TicketOffice";

/**
 * 초대장 -> 티켓 으로 교환
 * 티켓 판매
 * */
export class TicketSeller {
  private readonly ticketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  getTicketOffice() {
    return this.ticketOffice;
  }
}