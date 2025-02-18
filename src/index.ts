import * as express from "express";
import * as dotenv from "dotenv";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerJSDoc from "swagger-jsdoc";
import sequelize from "./config/database";
import noteRoutes from "./routes/noteRoutes";

dotenv.config();

const app = express();

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "EncryptoPad",
            version: "0.1",
            description: "API para o sistema EncryptoPad de anotações criptografadas.",
            },
    },
    apis: ["./routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/notes", noteRoutes);

const port = 3000;

sequelize.sync({ force: true }).then(() => {
    console.log("Banco de dados conectado!");
    app.listen(port, () =>  console.log(`Server rodando em http://localhost:${port}`));
}).catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
});
