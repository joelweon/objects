import {TicketOffice} from "./TicketOffice";
import {Audience} from "./Audience";

/**
 * 초대장 -> 티켓 으로 교환
 * 티켓 판매
 * */
export class TicketSeller {
  private readonly ticketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    this.ticketOffice.sellTicketTo(audience);
  }
}