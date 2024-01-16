import React from "react";

class Form extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.getTickets}>
        <input type="text" name="city" placeholder="Откуда"/>
        <button>Получить</button>
      </form>
    );
  }
}

export default Form;