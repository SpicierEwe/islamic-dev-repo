import Promise from "bluebird";
import JsZip from "jszip";
import FileSaver from "file-saver";

import { Buffer } from "buffer";

export default async function handler(req, res) {
  //   const { id } = req.query;

  var urls = [
    "https://tanzil.net/trans/?transID=bn.hoque&type=txt",
    "https://tanzil.net/trans/?transID=ar.jalalayn&type=txt",
  ];

  // var x = new Blob(
  //   [fetch("https://tanzil.net/trans/?transID=bn.hoque&type=txt")],
  //   { type: "text/plain" }
  // );

  // res.send(URL.createObjectURL(x));

  async function download(url, filename) {
    await fetch(url)
      .then((transfer) => {
        return transfer.blob(); // RETURN DATA TRANSFERED AS BLOB
      })
      .then((bytes) => {
        Buffer.from(bytes.arrayBuffer().then((buffer) => buffer));
      });
  }

  download("https://tanzil.net/trans/?transID=bn.hoque&type=txt", "aa.txt");
}
