function downloadFile(content: string[][]) {
  const titleArr = ['name', 'gender', 'status', 'image'];
  const convertToCSV = [titleArr.join(','), ...content].join('\n');

  const blob = new Blob([convertToCSV], {
    type: 'text/text/csv;charset=utf-8',
  });

  const url = URL.createObjectURL(blob);
  return url;
}

export default downloadFile;
