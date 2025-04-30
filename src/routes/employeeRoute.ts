
import express from 'express';
import { getEmployeesHandler, createEmployeeHandler } from '../controllers/employeeController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();


