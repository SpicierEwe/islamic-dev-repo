export default async function handler(req, res) {
  // console.log(req.body);

  try {
    await fetch("https://islamic-dev-repo-default-rtdb.firebaseio.com/.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }),
    });
  } catch (err) {
    res.status(200).json({ message: err.statusCode });
    // console.log(err);
  }
  res.status(200).json({ message: "success" });
}
