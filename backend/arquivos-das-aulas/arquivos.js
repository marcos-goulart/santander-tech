const path = require("node:path");
const fs = require("node:fs");
const dotenv = require("dotenv")

const filePath = path.join(process.cwd(), "backend", "aula", "texto.txt");
const fileOutPath = path.join(process.cwd(), "backend", "aula", "texto-com-linhas.txt");
console.log("caminho: ", filePath);

console.time("manipular arquivos")
fs.readFile(filePath, {}, (erro, dados) => {
  if (erro) {
    console.error(`Erro na leitura do arquivo no caminho ${filePath}`);
    return;
  }
  const texto = dados.toString()
  const linhas = texto.split("\n")

  const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => `${index+1} - ${linha}`)

  fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro) => {
    if (erro) {
      console.error(`Erro na escrita do arquivo no caminho ${fileOutPath}`);
    }
    console.log("Arquivo salvo no bucket ", process.env.S3_BUCKET);
    
    console.timeEnd("manipular arquivos")

  })
});
