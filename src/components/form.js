import React from "react";
import TicketsList from "./ticketList";
import styles from "../styles/styles.less";

class Form extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.getTickets} 
                 className='form'
                 name="data_form">
        <div className="form__input-container">
          <input type="text" 
                    name="origin_city" 
                    placeholder="Откуда"
                    className="form__input input"/>
        <input type="text" 
                    name="destination_city" 
                    placeholder="Куда"
                    className="form__input input"/>
          <input type="date" 
                    name="departure_at" 
                    placeholder="Куда"
                    className="form__input input"/>
          <input type="date" 
                    name="return_at" 
                    placeholder="Куда"
                    className="form__input input"/>
        </div>
        <button className="form__sumbit-btn input">Получить</button>
      </form>
    );
  }
}

export default Form;