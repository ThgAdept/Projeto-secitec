import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";
import { readdirSync } from "fs";

interface createUserBody{
    email: string;
    name: string;
    password: string;
}

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
});

app.post("/create", async (req, res) => {
    const body: createUserBody = req.body;

    const { name, email, password} = body;

    const user = await  prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })

    res.status(200).json(user);
});

app.listen(3333, () => {
    console.log("rodando")
})