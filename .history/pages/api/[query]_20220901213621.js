export default async function handler(req, res) {
  const { query } = req.query;
  res.end(`Quesry : ${query}`);
}
