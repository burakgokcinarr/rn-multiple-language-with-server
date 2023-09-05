import express from "express";
import cors from "cors";
import { readLanguageFile, databaseLoadLanguage } from "./utility/Utility.js";
const app   = express();

app.use(cors());
app.use(express.json());

const SERVER_PORT    = 5010;
const FILE_EXTENSION = "json"

app.listen(SERVER_PORT, () => {
    console.log("Server is now running: ", SERVER_PORT);
});

// Dil Değerlerini server tarafta .json dosyasından getir.
app.get('/language', async(req, res) => {
    const lang     = req.query.lang + `.${FILE_EXTENSION}`;
    const readData = await readLanguageFile(lang);
    
    res.send(readData);
})

// Dil Değerlerini server tarafta mongoDB üzerinden getir.
app.get('/languagedb', async(req, res) => {
    const lang     = req.query.lang;
    const readData = await databaseLoadLanguage(lang);
    
    res.send(readData.translated);
})

