const { expect } = require('@playwright/test');
const fs = require('fs');

class baseClass
{
  constructor(page) 
  {
    this.page = page;
  }
async getData() 
{
   const allRequests = []
  const response = await fetch('https://api.jikan.moe/v4/anime/21/full');
  const data = await response.json();
  allRequests.push({
    url: 'https://api.jikan.moe/v4/anime/21/full',
    method: 'GET',
    statusCode: response.status,
    timestamp: new Date().toISOString(),
    responseBody: data,
  });
   fs.writeFileSync(
    './api-requests.json',
    JSON.stringify(allRequests, null, 2), // pretty-print with 2-space indent
    'utf-8'
  );

  console.log(data);
}
async checkTitle()
{
  try {
  const data = fs.readFileSync('api-requests.json', 'utf8');
  const jsonData = JSON.parse(data);

  // Assuming the structure: array[0].responseBody.data.title
  const title = jsonData[0].responseBody.data.title;
  console.log('Title:', title);
}  
catch (error) 
{
  console.error('Error reading or parsing JSON:', error);
}
}
async statusCode()
{
    try {
    const data = fs.readFileSync('api-requests.json', 'utf8');
    const jsonData = JSON.parse(data);
    const statusCode = jsonData[0].statusCode;
    expect(statusCode).toBe(200);
    console.log('Status assertion passed:', statusCode);
     }
     catch(error)
    {
      console.log(error)
    }
}
}
module.exports=baseClass
