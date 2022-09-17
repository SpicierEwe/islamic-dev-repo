export default async function handler(req, res) {
  console.log(req.body);

  await fetch("https://islamic-dev-repo-default-rtdb.firebaseio.com/.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: req.body.name }),
  });

  res.status(200).send(req.body);
}
