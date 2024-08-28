import Cors from 'cors';

const cors = Cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Accept', 'Accept-Language', 'Accept-Encoding'],
});

export default async function handler(req, res) {
  await cors(req, res, () => {
    // Your API logic here
    res.status(200).json({ message: 'Hello from CORS-enabled API!' });
  });
}