import * as fs from "fs/promises";
import path from 'path';
import { MongoClient } from 'mongodb';

const MONGODB_URI    = "mongodb+srv://<USERNAME>:<PASSWORD>@tbl-language.fyjgnj1.mongodb.net/";
const client         = new MongoClient(MONGODB_URI);

// Read Language file [x].json
export const readLanguageFile = async(lang = "en.json") => {
    try {
        const __dirname = path.resolve(path.dirname(''));
        const data      = await fs.readFile(__dirname + `/language/${lang}`, { encoding: 'utf8' });
        //console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

// Mongo Database with loading languages 
export const databaseLoadLanguage = async(lang = "en") => {
    try {
        await client.connect();
        const database  = client.db('language');
        const language  = database.collection('tbl_System_Language');
        const data      = await language.find({"lang": lang}).toArray();
        //console.log(data);
        return data[0]
    } catch (error) {
        console.log("DB Connection Error = ", error);
    }
}