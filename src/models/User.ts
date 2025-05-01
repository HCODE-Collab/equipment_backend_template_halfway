
import { pool } from '../config/db'; 

export interface User{
    id: number;
    email: string;
    password: string;
}

export async function createUser(email: string, password: string){
    await pool.execute(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password]);
}

export async function getUserByEmail(email: string): Promise<User | null>{
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    const result = rows as User[];
    return result.length > 0 ? result[0] : null;

}