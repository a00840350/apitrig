import express from 'express';
import geometryRoutes from './routes/geometry';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/geometry', geometryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});