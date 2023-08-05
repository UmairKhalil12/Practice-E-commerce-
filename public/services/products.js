import fs from "fs"; 
import path from "path"; 

const filePath = path.join(process.cwd(), "public", "static" , "data", "products.json");

export function getAll() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data); 
}

export function getById(id) {
    const data = getAll();
    const dataById = data.find( items => items.id === Number(id)); 
    return dataById; 

}

export function save(title, description , price) { 
    const data = getAll(); 
    data.push({
        id : data.length + 1,
        title ,description , price
    });
    fs.writeFileSync(filePath , JSON.stringify(data)); 
}


