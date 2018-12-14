import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// TODO: info about bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// TODO: read about express Router
const router = express.Router();

// Accessed at GET http://localhost:8080/api
router.get('/', (req, res) => {
  res.json({ message: 'Hello.' });
});

// TODO: Add other routes

// Prefix all routes with /Api
app.use('/api', router);
app.listen(port);

console.log(`Server listening on port: ${port}`); // eslint-disable-line
