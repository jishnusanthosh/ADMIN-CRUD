import express from 'express';
import DBConnection from './utils/db.js';
import dotenv from 'dotenv';
import routers from './routes/routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

// MongoDB Connection
DBConnection();

// Middleware: CORS
app.use(cors());

// Middleware: Body Parser
app.use(express.json());

// Routes
app.use('/api', routers);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
