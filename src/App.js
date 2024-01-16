import React from "react";
import Form from "./components/form";
import Info from "./components/info";
import TicketsList from "./components/ticketList";

class App extends React.Component {
  render () {
    return 
    <>
      <Info />
      <Form />
      <TicketsList />
    </>
  }
}

export default App;