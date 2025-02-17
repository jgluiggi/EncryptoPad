import * as express from "express";
import * as dotenv from "dotenv";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API rodando!");
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Banco de dados conectado!");
    app.listen(port, () => console.log(`Server rodando em http://localhost:${port}`));
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
