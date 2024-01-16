import React from "react";
import Ticket from "./ticket";

class TicketsList extends React.Component {

  render () {
    console.log("hello world, i'm alive");
    return (
      <div className="list__container">
        {this.props.ticketsList.map((ticket) =>
        <Ticket key={ticket.link} {...ticket} />
        )}
      </div>
    )
  }
}

export default TicketsList;