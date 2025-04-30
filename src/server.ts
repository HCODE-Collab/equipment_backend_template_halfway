import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoute';
import employeeRoutes from './routes/employeeRoute';
import { errorHandler } from './middleware/errorHandler'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('api/employee', employeeRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
    
})

