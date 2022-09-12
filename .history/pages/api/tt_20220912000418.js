async function handler(req, res) {
  //   const { id } = req.query;
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();

  res.status(200).json(data);
}
