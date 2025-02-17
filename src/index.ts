import * as express from "express";
import * as dotenv from "dotenv";
import sequelize from "./config/database";
import noteRoutes from "./routes/noteRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/notes", noteRoutes);

const port = 3000;

sequelize.sync({ force: true }).then(() => {
    console.log("Banco de dados conectado!");
    app.listen(port, () =>  console.log(`Server rodando em http://localhost:${port}`));
}).catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
});
