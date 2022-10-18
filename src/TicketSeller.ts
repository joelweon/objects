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

  // getTicketOffice() {
  //   return this.ticketOffice;
  // }

  sellTo(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketOffice.getTicket();
      audience.getBag().setTicket(ticket);
      audience.getBag().removeInvitation();
    } else {
      const ticket = this.ticketOffice.getTicket();
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketOffice.plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}