import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>Teste</fieldset>
          <input type="text" data-testid="checkout-fullname" placeholder="Nome" />
          <input type="text" data-testid="checkout-email" placeholder="Email" />
          <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
          <input type="text" data-testid="checkout-phone" placeholder="Telefone" />
          <input type="text" data-testid="checkout-cep" placeholder="CEP" />
          <input type="text" data-testid="checkout-address" placeholder="Endereço" />
        </form>
      </div>
    );
  }
}

export default Checkout;
