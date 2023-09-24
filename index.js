import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`App listening on port : `,process.env.PORT)
});

// Define a middleware to add headers for CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define a middleware to parse JSON request bodies
app.use(express.json());

// Define a route for the root path
app.get("/", async (req, res) => {
    res.status(200).send('Listening successfully');
});

app.get("/all", async (req, res)=>{
    console.log(__dirname);
    res.sendFile(__dirname +'/warehouse.json')
});