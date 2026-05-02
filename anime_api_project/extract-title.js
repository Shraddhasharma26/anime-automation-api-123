const fs = require('fs');

try {
  const data = fs.readFileSync('api-requests.json', 'utf8');
  const jsonData = JSON.parse(data);

  // Assuming the structure: array[0].responseBody.data.title
  const title = jsonData[0].responseBody.data.title;
  console.log('Title:', title);
} catch (error) {
  console.error('Error reading or parsing JSON:', error);
}