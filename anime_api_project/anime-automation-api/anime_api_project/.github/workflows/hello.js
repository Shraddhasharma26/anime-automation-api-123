const { resolve } = require("node:dns")

class dataAPI
{
async getData() 
{
  const response = await fetch('https://api.jikan.moe/v4/');
  const data = await response.json();
  return data;
}
}

const result = new dataAPI()
result.getData().then(result => console.log(result))