export default async function handler(req, res) {
  console.log(req.body);

  fetch("https://islamic-dev-repo-default-rtdb.firebaseio.com/aaa.json", {
    mothod: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  res.status(200).send(req.body);
}
