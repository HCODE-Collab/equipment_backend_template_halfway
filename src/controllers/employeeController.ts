
import { Request, Response } from "express";
import { createEmployee, getEmployees } from "../models/Employee";


export async function createEmployeeHandler(req: Request, res: Response){
 try {
    await createEmployee(req.body);
    res.status(201).json({message: "Employee Created Successfully"});
    
 } catch (error) {
    res.status(500).json({error: "Internal Serve Error!"})
    
 }

}
export async function getEmployeesHandler(req: Request, res: Response){
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const employees = await getEmployees(page, limit)
    res.json(employees)

}