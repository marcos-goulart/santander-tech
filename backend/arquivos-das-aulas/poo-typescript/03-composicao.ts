/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<[nome: string, idadeEmMeses: number]>;

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase) {
  return class extends superClasse {
    public nome: string = "";

    constructor(...args: any) {
      super(args[0]);
    }
    voa() {
      console.log(`${this.nome} voou`);
    }
  };
}

interface AnimalInterface {
  nome: string;
  idadeEmMeses: number;
  comer: () => void;
}

class Animal implements AnimalInterface {
  public nome: string
  public idadeEmMeses: number;
  constructor({nome, idadeEmMeses} :
    {nome: string,
    idadeEmMeses: number}
  ) {
    this.nome = nome
    this.idadeEmMeses = idadeEmMeses

  }

  comer(): void {
    console.log(`${this.nome} se alimentoui`);
  }
}

const cachorro = new Animal({nome: "mel", idadeEmMeses: 10});
const mosca = new (MixinVoa(Animal))({nome: "mosca", idadeEmMeses: 0.1});
// const pato = new AnimalVoador("carlos", 5, false);

cachorro.comer();
mosca.comer();
mosca.voa();
