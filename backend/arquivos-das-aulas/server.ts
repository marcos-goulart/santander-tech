import express from "express";
import { config } from "dotenv";
import path from "path";
import { userRoutes } from "./routes/UserRoutes";
import cors from 'cors';

config();
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));
app.use(cors)
const url = "http://localhost";
const port = 3300;

// const dbJson = readFileSync(dbJsonPath)
// const users: User[] = JSON.parse(dbJson.toString()).users
 
app.get("/api", (request, response) => {
  return response.status(200).send("<h1>Api Home</h1>");
});

app.use(userRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});
