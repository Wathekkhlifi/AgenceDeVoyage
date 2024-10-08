import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import clientRoutes from './routes/clientRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: 'GET,POST,PUT,DELETE',
}));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/agenceDeVoyage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/clients', clientRoutes);

const PORT = process.env.PORT || 8800; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
