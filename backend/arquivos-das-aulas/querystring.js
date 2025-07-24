// eslint-disable-next-line @typescript-eslint/no-require-imports
const querystring = require("node:querystring")
// eslint-disable-next-line @typescript-eslint/no-require-imports
const url = require("node:url")

const baseUrl = "https://siteviagem.com.br"

const uri = querystring.stringify({
  destino: "Rio de Janeiro",
  periodo: "verao"
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

const parseUri = querystring.parse(uri)
console.log(uri);
console.log(parseUri);
console.log(parseUri.destino);
console.log(url.parse(fullUrl));


const uri2 = querystring.escape("São paulo")
console.log(uri2);
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2);

