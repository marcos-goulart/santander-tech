async function obterDadosDoCep() {
    try {
        const response = await fetch('https://viacep.com.br/ws/01001000/json')
        const dados = await response.json()

        console.log(dados)

    } catch (error) {
        console.log(error)
    }
    
}

obterDadosDoCep()