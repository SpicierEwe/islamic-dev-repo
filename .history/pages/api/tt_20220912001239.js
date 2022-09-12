import Promise from "bluebird";
import JsZip from "jszip";
import FileSaver from "file-saver";

export default async function handler(req, res) {
  //   const { id } = req.query;
  const download = async (url) => {
    return await fetch(url).then((resp) => {
      console.log(resp);
      console.log(url);
      return resp.blob();
    });
  };

  const downloadMany = (urls) => {
    return Promise.all(urls.map((url) => download(url)));
  };

  const exportZip = (blobs) => {
    const zip = JsZip();
    blobs.forEach((blob, i) => {
      zip.file(`file-${i}.txt`, blob);
    });
    zip.generateAsync({ type: "blob" }).then((zipFile) => {
      const currentDate = new Date().getTime();
      const fileName = `combined-${currentDate}.zip`;
      return FileSaver.saveAs(zipFile, fileName);
    });
  };

  const downloadAndZip = (urls) => {
    return downloadMany(urls).then(exportZip);
  };

  var urls = [
    "http://localhost:3000/69a74759-c9e6-4ab7-9518-ad59ea89aea6",
    "https://tanzil.net/trans/?transID=ar.jalalayn&type=txt",
  ];

  res.send(downloadAndZip(urls));
}
