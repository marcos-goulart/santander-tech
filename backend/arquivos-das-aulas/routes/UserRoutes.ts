import { Router } from "express";
import { randomUUID } from "crypto";
import dbJson from ".././server.json"
import { writeFileSync } from "fs";
import path from "path";

type User = {
  id: string
  name: string
  age: number
};

type ICreateUserDTO = Omit<User, "id">;

const dbJsonPath = path.resolve(process.cwd(), "server.json")
const users: User[] = dbJson.users
const userRoutes = Router()

userRoutes.get("/api/users", (request, response) => {
  return response.send(users);
});

userRoutes.post("/api/users", (request, response) => {
  const { name, age }: ICreateUserDTO = request.body;

  if (!name || age < 0) {
    const errMessage = "O usuário a ser criado precisa de nome e idade";
    return response.status(400).send(errMessage)
  }

  const user = { id: randomUUID(), name, age }

  users.push(user);

  writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users}));

  return response.send(user);
});

userRoutes.delete("/api/users/:id", async (request, response) => {
  const { id } = request.params

  if (!id) {
    const errMessage = "O usuário a ser deletado precisa de um id";
    return response.status(400).send(errMessage)
  }

  const findUser = users.find(user => user.id === id)

  if (!findUser) {
    const errMessage = `Usuário com o id ${id} não foi encontrado`;
    return response.status(400).send(errMessage)
  }

  const updateUsers = users.filter(user => user.id !== id)

  writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users: updateUsers}));

  return response.status(204).json()
});

export { userRoutes }