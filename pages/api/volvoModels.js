
import data from '../../public/cars.json';

export default async function handler(req, res) {
  try {
    const { bodyType } = req.query;
    console.log(bodyType);
    const filteredData = bodyType ? data.filter(car => car.bodyType.toLowerCase().includes(bodyType.toLowerCase())) : data;

    res.status(200).json(filteredData);
  } catch (error) {
    console.error('Error fetching Volvo models:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
