/**
 * 소극장
 * 관람객을 입장시키는 역할
 * */
import {TicketSeller} from "./TicketSeller";
import {Audience} from "./Audience";

class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  // 더이상 ticketOffice를 알지 않아도 된다.
  // Theater는 ticketSeller가 sellTo 메시지를 이해하고 응답할 수 있다는 사실만 알고 있다.
  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}