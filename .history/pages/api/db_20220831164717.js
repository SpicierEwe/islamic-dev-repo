// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.methos === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(403).json({ status: "forbidden" });
  }
}
