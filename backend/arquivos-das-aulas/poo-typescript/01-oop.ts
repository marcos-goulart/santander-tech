export type Produto = {
  nome: string;
  valor: number;
};

// class Estabelecimento {
//   private endereco: string;
//   private setor: string;
//   private produtos: Produto[];

//   constructor(endereco: string, setor: string, produtos: Produto[]) {
//     this.endereco = endereco;
//     this.setor = setor;
//     this.produtos = produtos;
//   }
// }

class EstabelecimentoBase {
  private _filaDeEspera = 10;

  constructor(
    public endereco: string,
    public setor: string,
    private produtos: Produto[],
    filaDeEspera?: number,
  ) {
    this.filaDeEspera = filaDeEspera ?? this._filaDeEspera;
  }

  retornaNomeDosProdutos() {
    this.produtos.map((produto) => produto.nome);
  }

  get filaDeEspera() {
    return this._filaDeEspera;
  }

  set filaDeEspera(fila: number) {
    if (fila <= 0) {
      return;
    }

    this._filaDeEspera = fila;
  }

  diminuiFiladeEspera() {
    if (this._filaDeEspera === 0) {
      return;
    }
    this._filaDeEspera -= 1;
  }
}

const padaria = {
  endereco: "Rua dos laranjais, 1234 - bloco D",
  tipo: "alimentacao",
  produtos: [
    { nome: "pao", valor: 0.8 },
    { nome: "arroz", valor: 10 },
    { nome: "leite", valor: 5 },
    { nome: "doces", valor: 1.5 },
    { nome: "carne moida", valor: -20 },
  ],
  retornaNomeDosProdutos() {
    this.produtos.map((produto) => produto.nome);
  },
  _filaDeEspera: 10,
  get filaDeEspera() {
    return this._filaDeEspera;
  },
  set filaDeEspera(fila: number) {
    if (fila <= 0) {
      return;
    }

    this._filaDeEspera = fila;
  },
};

const padaria2 = {
  endereco: "Rua dos laranjais, 1234 - bloco D",
  tipo: "alimentacao",
  produtos: [
    { nome: "pao", valor: 0.8 },
    { nome: "arroz", valor: 10 },
    { nome: "leite", valor: 5 },
    { nome: "doces", valor: 1.5 },
    { nome: "carne moida", valor: -20 },
  ],
};

const padaria3 = new EstabelecimentoBase(
  "Rua dos laranjais, 1234 - bloco D",
  "alimentacao",
  [
    { nome: "banana", valor: 0.8 },
    { nome: "beijinho", valor: 10 },
    { nome: "brigadeiro", valor: 5 },
  ],
  -3,
);

const padaria4 = new EstabelecimentoBase(
  "Rua dos morangos, 1234 - bloco D",
  "alimentacao",
  [],
  27,
);

console.log(padaria);
console.log(padaria.retornaNomeDosProdutos());
console.log(padaria2);
console.log(padaria3.retornaNomeDosProdutos());
padaria3.diminuiFiladeEspera();
padaria3.diminuiFiladeEspera();
padaria3.diminuiFiladeEspera();
padaria3.diminuiFiladeEspera();
console.log(padaria3.endereco);
console.log(padaria3.filaDeEspera);
console.log(padaria4.filaDeEspera);

