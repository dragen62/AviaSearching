import React from "react";
import Form from "./components/form";
import Info from "./components/info";
import TicketsList from "./components/ticketList";

const API_KEY = 'b5b4489dfeae21f1c97508b7df14534e';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketsList: [ ]
    }
  }

  ChangeValue(ticketsList) {
    this.setState({
      ticketsList: ticketsList['data']
    })
  }

  gettingTickets = async (event) => {
    event.preventDefault();
    const origin_city = event.target.elements.origin_city.value;
    const destination_city = event.target.elements.destination_city.value;
    const departure_at = event.target.elements.departure_at.value;
    const return_at = event.target.elements.return_at.value;
    const api_url = await fetch(`https://cors-anywhere.herokuapp.com/api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin_city}&destination=${destination_city}&departure_at=${departure_at}&return_at=${return_at}&unique=false&sorting=price&direct=false&cy=rub&limit=30&page=1&token=${API_KEY}`);
    const data = await api_url.json();
    console.log(data['data']);
  }

  render () {
    return(
      <div>
      <Info/>
      <Form ChangeValue={this.ChangeValue.bind(this)} getTickets={this.gettingTickets}/>
    </div>
    );
  }
}

export default App;