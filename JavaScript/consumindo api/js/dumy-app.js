async function getUsers() {
    const response = await fetch("https://dummyapi.io/data/v1/user?created=1", {
        headers: {
            "app-id": ""
        }}
    )
    const users = await response.json()

    console.log(users)
}

getUsers()

async function getUser() {
    const response = await fetch("https://dummyapi.io/data/v1/user/",
        {
            headers: {
                "app-id": ""
            }
        }
    )
    const user = await response.json()
    console.log(user)
}

getUser()

async function createUser() {
    const userData = {
        firstName: "Marcos",
        lastName: "Goulart",
        email: "marcos.goulart@outlook.com"
    }

    try {
        await fetch("https://dummyapi.io/data/v1/user?create", {
            method: "POST",
            headers: {
                "app-id": "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
    } catch (error) {
        console.error(error)
    }
}

createUser()