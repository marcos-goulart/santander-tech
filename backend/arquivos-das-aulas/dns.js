// eslint-disable-next-line @typescript-eslint/no-require-imports
const dns = require("node:dns")



// dns.resolve4(searchUrl, (err, addresses) => {
//   if (err) {
//     console.log("url nao encontrado");
//     return
//   }
//   console.log(addresses);
// })

async function bootstrap() {
  const searchUrl = "google.com"
  const address = await dns.promises.resolve4(searchUrl)
  console.log(address);

  const nameServers = await dns.promises.resolveNs(searchUrl)
  console.log(nameServers);

  const ipNs = await dns.promises.resolve4(nameServers[1])

  const resolver = new dns.Resolver()
  resolver.setServers(ipNs)

  console.time("melhor url pesquisa");
  resolver.resolve4(searchUrl, (error, addresses) => {
    if (error) {
      console.error('Nao foi possivel encontrar ipv4')
    }
    console.timeEnd("melhor url pesquisa")
    console.log(addresses);

  })
}

bootstrap()