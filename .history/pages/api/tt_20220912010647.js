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
    })
      .then((transfer) => {
        return transfer.blob(); // RETURN DATA TRANSFERED AS BLOB
      })
      .then((bytes) => {
        let elm = document.createElement("a"); // CREATE A LINK ELEMENT IN DOM
        elm.href = URL.createObjectURL(bytes); // SET LINK ELEMENTS CONTENTS
        elm.setAttribute("download", filename); // SET ELEMENT CREATED 'ATTRIBUTE' TO DOWNLOAD, FILENAME PARAM AUTOMATICALLY
        elm.click(); // TRIGGER ELEMENT TO DOWNLOAD
      })
      .catch((error) => {
        console.log(error); // OUTPUT ERRORS, SUCH AS CORS WHEN TESTING NON LOCALLY
      });
  }
}
