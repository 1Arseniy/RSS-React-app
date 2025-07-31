async function downloadFile(
  content: FileSystemWriteChunkType,
  fileName: string
) {
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: fileName,
      types: [
        {
          accept: { 'text/csv': ['.csv'] },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(content);
    await writable.close();
  } catch (err) {
    console.log('downloadFile', err);
  }
}

export default downloadFile;
