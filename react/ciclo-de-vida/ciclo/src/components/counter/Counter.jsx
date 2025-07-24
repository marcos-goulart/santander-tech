import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log("Contruindo a classe Counter");
  }

  UNSAFE_componentWillMount() {
    console.log("Componente Counter vai ser montado");
  }
  componentDidMount() {
    console.log("Componente Counter foi montado");

    document.addEventListener('scroll', this.consoleScroll)
  }
  shouldComponentUpdate() {
    if (this.state.contador === 2) return false
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.log("Componente Counter vai ser atualizado");
  }
  componentDidUpdate() {
    console.log("Componente Counter foi atualizado");
  }
  componentWillUnmount() {
    console.log("Componente Counter vai ser desmontado");

    document.removeEventListener('scroll', this.consoleScroll)
  }

  consoleScroll() {
    console.log("Rolando a página")
  }

  render() {
    console.log("renderizando o componete Counter");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() =>
            this.state.contador({ contador: this.state.contador - 1 })
          }
        >
          Diminuir
        </button>
        <button
          onClick={() =>
            this.state.contador({ contador: this.state.contador + 1 })
          }
        >
          Aumentar
        </button>
      </div>
    );
  }
}
