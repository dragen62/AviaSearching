import React from "react";
import { useState } from "react";
import Info from "./components/Info";

const API_KEY = 'b5b4489dfeae21f1c97508b7df14534e';

let list = [];

export default function App()  {
  const [state, setState] = useState({text:'Default value of the state'});

  const gettingTickets = async (event) => {
    event.preventDefault();
    const origin_city = event.target.elements.origin_city.value;
    const destination_city = event.target.elements.destination_city.value;
    const departure_at = event.target.elements.departure_at.value;
    const return_at = event.target.elements.return_at.value;
    const api_url = await fetch(`https://cors-anywhere.herokuapp.com/api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin_city}&destination=${destination_city}&departure_at=${departure_at}&return_at=${return_at}&unique=false&sorting=price&direct=false&cy=rub&limit=30&page=1&token=${API_KEY}`);
    const data = await api_url.json();
    list = data['data'];
  };

    return(
      <>
      <div>
      <Info/>
      <form onSubmit={gettingTickets} 
                 className='form'
                 name="data_form"
                 >
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
        <button className="form__sumbit-btn input"
                      onClick={() => setState({
                        text: '',
                       })}>Получить</button>
      </form>
      <div className="list__container">
        {list.map((ticket) =>
        <div className="list__element">
          <div className="list__airline">
            {ticket.airline} 
            <img  className="list__icon" src={`http://pics.avs.io/100/30/${ticket.airline}.png`}></img>
          </div>

          <div className="list__time">
            {ticket.departure_at}
          </div>

          <div className="list__airport">
            <p>Отправка: {ticket.origin_airport}</p>
            <p>Прилёт: {ticket.destination_airport}</p>
          </div>
          
        </div>
        )}
      </div>
    </div>
    
    </>
    );
  }