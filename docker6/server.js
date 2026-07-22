import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});