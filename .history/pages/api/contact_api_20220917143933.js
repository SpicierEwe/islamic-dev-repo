export default async function handler(req, res) {
  console.log(req.body);

  fetch("https://islamic-dev-repo-default-rtdb.firebaseio.com/");

  res.status(200).send(req.body);
}