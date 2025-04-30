
import { pool } from '../config/db';

export interface EmployeeData {
        id: number;
        firstname: string;
        lastname: string;
        national_id: string;
        telephone: string;
        email: string;
        department: string;
        position: string;
        laptop_manufacturer: string;
        model: string;
        serial_number: string; 
}

export async function createEmployee(data: EmployeeData){

    const {id, firstname, lastname, national_id, telephone, email, department, position, laptop_manufacturer, model, serial_number} = data;
    await pool.execute(`INSERT INTO employees (id, firstname, lastname, national_id, telephone, email, department, position, laptop_manufacturer, model, serial_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id, firstname, lastname, national_id, telephone, email, department, position, laptop_manufacturer, model, serial_number]);

}

export async function getEmployees(page: number, limit: number){
    const offset = ( page - 1 ) * limit;
    const [rows] = await pool.execute(`SELECT * FROM employees LIMIT ? OFFSET ?`, [limit, offset]);
    return rows;

}