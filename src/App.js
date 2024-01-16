import React from "react";
import Form from "./components/form";
import Info from "./components/info";
import TicketsList from "./components/ticketList";

const API_KEY = 'b5b4489dfeae21f1c97508b7df14534e';

class App extends React.Component {
  gettingTickets = async (event) => {
    event.preventDefault();
    const api_url = await fetch(`https://cors-anywhere.herokuapp.com/api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&departure_at=2024-07&return_at=2024-08&unique=false&sorting=price&direct=false&cy=rub&limit=30&page=1&one_way=true&token=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
  }

  render () {
    return(
      <div>
      <Info/>
      <Form getTickets={this.gettingTickets}/>
      <TicketsList />
    </div>
    );
  }
}

export default App;