function downloadFile(content: string) {
  const blob = new Blob([...content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  return url;
}

export default downloadFile;
