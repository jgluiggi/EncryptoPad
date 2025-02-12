import * as express from "express";
import * as dotenv from "dotenv";
import sequelize from "./config/database";
import { UserRepository } from "./repository/userRepository";

dotenv.config();

const app = express();
app.use(express.json());

const port = 3000;

const userRepo = new UserRepository();

app.post('/users', async(req, res) => {
    try {
        const {email, username, password} = req.body;
        const user = await userRepo.createUser(email, username, password);
        res.json(user);
    } catch (error:any){
        res.status(500).json({message: "Erro ao criar o usuário", error:error.message});
    }
});

app.get('/users', async(req, res) => {
    try {
        const users = await userRepo.getAllUsers();
        res.json(users);
    } catch (error:any){
        res.status(500).json({message: "Erro ao obter os usuários", error:error.message});
    }
});

sequelize.sync({ force: true }).then(() => {
    console.log("Banco de dados conectado!");
    app.listen(port, () =>  console.log(`Server rodando em http://localhost:${port}`));
}).catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
});
