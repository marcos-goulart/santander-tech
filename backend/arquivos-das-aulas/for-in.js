const user = {
  name: "JoSe mARia",
  email: "JOSE.Mi@gmail.com",
  age: 23,
  address: "X Street"
}

for (const key in user) {
  if(key === "name") {
    const names = user[key].split(" ")
    user[key] = ""
    for (name of names) {
      const normalizeName = name.toLowerCase()
      const [primeiraLetra, ...restoDoNome] = normalizeName
      
      user[key] = user[key] + " " + primeiraLetra.toUpperCase() + restoDoNome.join("")
      user[key] = user[key].trim()
    }
  }
  if(key === "email") {
    user[key] = user[key].toLowerCase()
  }
}

console.log(user);
