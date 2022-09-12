import stream from "stream";
import { promisify } from "util";

export default async function handler(req, res) {
  const url = "https://tanzil.net/trans/?transID=bn.hoque&type=txt";
  const response = await fetch(url);

  print(response.json);
}
