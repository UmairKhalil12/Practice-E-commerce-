
import fs from "fs"; 
import path from "path"; 
import {compare, hash} from "bcryptjs";


const filePath = path.join(process.cwd(), "public", "static" , "data", "users.json");

export function getAll() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data); 
}

export function getById(id) {
    const data = getAll();
    const dataById = data.find( items => items.id === Number(id)); 
    return dataById; 

}

export function getByEmail(email) {
    const data = getAll();
    const dataByEmail = data.find(items => items.email.toLowerCase() === email.toLowerCase()); 
    return dataByEmail; 
}

export async function verifyPassword(hashedPassword ,password) {
    const isValid = await compare(password ,hashedPassword);  
    return isValid; 
}

export async function save(email , password) {
    const found = getByEmail(email);
    if(found){
        throw new Error ("User already exists!");
    }

    const data = getAll(); 
    const hashedPassword = await hash(password ,12);  
    data.push({
        id : data.length + 1,
        email , 
        password: hashedPassword
    });
    fs.writeFileSync(filePath , JSON.stringify(data)); 
}


