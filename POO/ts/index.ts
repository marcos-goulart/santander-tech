interface IPessoa{
    nome: string;
    idade: number;
    altura: number;

    dormir: () => void
}

class Pessoa implements IPessoa {
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    constructor(nome: string, idade: number, altura: number, cpf: string) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this._cpf = cpf
    }

    dormir() {
        console.log(`${this.nome} está dormindo. 😴`);
    }

    get cpf(): string{
        return this._cpf;
    }

    set cpf(newcpf: string) {
        if (newcpf.length !== 14) {
            throw new Error("CPF lenght is incorrect")
        }
        this._cpf = newcpf
    }
}

class Professor extends Pessoa{
    codigo: string

    constructor(nome: string, idade: number, altura: number, cpf: string, codigo: string ) {
        super(nome, idade, altura, cpf)
        this.codigo = codigo
    }

    ensinar () {
        console.log("ensinando")
    }
}


const pessoa = new Pessoa('Marcos', 21, 180, '123.456.789-00')
const pessoa1 = new Pessoa('Vincicius', 21, 178, '123.456.789-01')

console.log(pessoa)
console.log(pessoa.nome)

console.log(pessoa1)
pessoa1.dormir()

pessoa.nome = 'Fulano'

console.log(pessoa.nome);
console.log(pessoa.cpf);

pessoa.cpf = '10'

console.log(pessoa.cpf);

const professor = new Professor('professor', 30, 1.68, '123.456.789-00', "0009")

console.log(professor);

professor.dormir()
professor.ensinar()
