import { Produto } from "./01-oop";

interface EstabelecimentoInterface {
  endereco: string;
  setor: string;
  filaDeEspera: number;
  retornaNomeDosProdutos: () => string[];
  diminuiFiladeEspera(): void;
}

interface ReceitaInterface {
  remedios: string[];
  indentificacaoDoMedico: string;
}

interface Remedio extends Produto{
  receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends EstabelecimentoInterface {
  compraRemedioPrescrito: (
    receita: ReceitaInterface,
    produtosAComprar: string[],
  ) => void;
}

class Estabelecimento implements EstabelecimentoInterface {
  protected _filaDeEspera = 10;

  constructor(
    public endereco: string,
    public setor: string,
    protected produtos: Produto[],
    filaDeEspera?: number,
  ) {
    this.filaDeEspera = filaDeEspera ?? this._filaDeEspera;
  }

  retornaNomeDosProdutos(): string[] {
    return this.produtos.map((produto) => produto.nome);
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

class Farmacia extends Estabelecimento implements FarmaciaInterface {
  constructor(
    public endereco: string,
    public setor: string,
    protected produtos: Remedio[],
    filaDeEspera?: number,
  ) {
    super(endereco, setor, produtos, filaDeEspera);
  }

  public compraRemedioPrescrito(
    receita: ReceitaInterface,
    produtosAComprar: string[],
  ): void {
    const remediosDisponiveis = this.produtos.filter(
      produto => produtosAComprar.includes(produto.nome)
    );

    if (remediosDisponiveis.length === 0) {
      console.log("Infelizmente nao temos os remedios em estoque");
    }

    const remediosAutorizados = remediosDisponiveis.filter(
      produto => {
        console.log(produto);
        

        return !produto.receitaObrigatoria ? true :
        receita.remedios.includes(produto.nome)
        
      }
        
    );

    console.log(remediosDisponiveis);
    console.log(remediosAutorizados);
  }
}

const supermercado = new Estabelecimento(
  "Rua dos laranjais, 1234 - bloco D",
  "alimentacao",
  [
    { nome: "banana", valor: 0.8 },
    { nome: "beijinho", valor: 10 },
    { nome: "brigadeiro", valor: 5 },
  ],
  25,
);

const FarmaciaDoZe = new Farmacia(
  "Rua dos laranjais, 1234 - bloco D",
  "farmaceutico",
  [
    { nome: "aspirina", valor: 0.8 },
    { nome: "remedio controlado 1", valor: 10, receitaObrigatoria: true },
    { nome: "remedio controlado 2", valor: 10, receitaObrigatoria: true },
    { nome: "vitamina c", valor: 5 },
    { nome: "creme hidratante", valor: 5 },
  ],
  25,
);

console.log(supermercado);
console.log(FarmaciaDoZe);
FarmaciaDoZe.compraRemedioPrescrito({
  remedios: ["remedio controlado 1"],
  indentificacaoDoMedico: "123-456-789",
}, ["aspirina", "remedio controlado 2", "shampoo"]);
