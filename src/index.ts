import * as express from "express";
import helmet from "helmet";
import * as dotenv from "dotenv";
const { rateLimit } = require ("express-rate-limit");
import * as swaggerUi from "swagger-ui-express";
import * as swaggerJSDoc from "swagger-jsdoc";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";
import noteRoutes from "./routes/noteRoutes";
import folderRoutes from "./routes/folderRoutes";

dotenv.config();

const app = express();

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.4",
        info: {
            title: "EncryptoPad",
            version: "0.1",
            description: "API para o sistema EncryptoPad de anotações criptografadas.",
        },
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [ { BearerAuth: [], }, ],
    },
    apis: ["./routes/*.ts"],
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100
});

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", userRoutes);
app.use("/notes", noteRoutes);
app.use("/folders", folderRoutes);

const port = process.env.PORT || 3000;
  
app.get("/", (req, res) => {
  res.send("API rodando!");
});

sequelize.sync({ force: true }).then(() => {
    console.log("Banco de dados conectado!");
    app.listen(port, () => console.log(`Server rodando em http://localhost:${port}`));
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
