import Promise from "bluebird";
import JsZip from "jszip";
import FileSaver from "file-saver";

export default async function handler(req, res) {
  //   const { id } = req.query;

  var urls = [
    "https://tanzil.net/trans/?transID=bn.hoque&type=txt",
    "https://tanzil.net/trans/?transID=ar.jalalayn&type=txt",
  ];

  var x = await (
    await fetch("https://tanzil.net/trans/?transID=bn.hoque&type=txt")
  ).blob;

  res.send(URL.createObjectURL(x));
}
