export default function handler(req, res) {
  console.log(req.body);

  fetch("https://islamic-dev-repo-default-rtdb.firebaseio.com/", {
    mothod: "POST",
    body: JSON.stringify(req.body),
  });

  res.status(200).send(req.body);
}
