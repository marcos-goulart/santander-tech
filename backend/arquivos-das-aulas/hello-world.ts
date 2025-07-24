import { config } from "dotenv";
import express from "express";
import { readFileSync } from "fs"
import path from "path";

interface IUser {
  name: string,
  idade: number
}

config()
const app = express();
app.use(express.static(path.join(__dirname, "public")))
const url = "http://localhost";
const port = 3300;
const users: IUser[] = [
  {
    name: "fulano",
    idade: 20
  },
  {
    name: "ciclano",
    idade: 21
  }
]

app.get("/api", (request, response) => {
  const homePagePath = path.join(__dirname, "home.html")
  const homePage = readFileSync(homePagePath)
  return response.status(200).send(homePage);
});

app.get("/api/users", (request, response) => {
  return response.send(users)
})

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});