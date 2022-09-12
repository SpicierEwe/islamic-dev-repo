async function handler(req, res) {
  //   const { id } = req.query;
  const download = async (url) => {
    return await fetch(url).then((resp) => {
      console.log(resp);
      console.log(url);
      return resp.blob();
    });
  };

  const downloadMany = async (urls) => {
    return Promise.map(urls, async (url) => {
      return await download(url);
    });
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
}
