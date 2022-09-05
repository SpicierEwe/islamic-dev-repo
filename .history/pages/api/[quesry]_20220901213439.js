export default function handler(req, res) {
  const { query } = req.query;
  res.status()(`Post: ${query}`);
}
