import Promise from "bluebird";
import JsZip from "jszip";
import FileSaver from "file-saver";

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

  function download(url, filename) {
    fetch(url, {
      mode: "no-cors",
      /*
        * ALTERNATIVE MODE {
        mode: 'cors'
        }
        *
        */
    });
  }

  download("https://tanzil.net/trans/?transID=bn.hoque&type=txt", "aa.txt");
}
