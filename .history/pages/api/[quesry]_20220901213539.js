export default async function handler(req, res) {
  const { query } = req.query;
  res.status(200).json({ query });
}
