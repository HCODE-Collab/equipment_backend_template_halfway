
import { NextFunction, Request, Response } from "express";
import { createEmployee, getEmployees } from "../models/Employee";


export async function createEmployeeHandler(req: Request, res: Response, next: NextFunction): Promise<void>  {
 try {
    await createEmployee(req.body);
    res.status(201).json({message: "Employee Created Successfully"});
    
 } catch (error) {
   next(error);
   //  res.status(500).json({error: "Internal Serve Error!"})
    
 }

}
export async function getEmployeesHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const employees = await getEmployees(page, limit)
    res.status(200).json({employees})
    } catch (error) {
      next(error);
      
      
    }
    

}