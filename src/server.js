import { createServer } from 'http';
import app from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    const server = createServer(app);
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
};

startServer();
