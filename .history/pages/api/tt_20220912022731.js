import stream from "stream";
import { promisify } from "util";

export default async function handler(req, res) {
  const url = "https://tanzil.net/trans/bn.hoque";
  const response = await fetch(url);

  console.log("hiii" + response.json);
}
