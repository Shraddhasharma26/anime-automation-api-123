const fs = require('fs');
    class localserver
    {
    async serverRun()
    {
    let allRequests = []
    let animeId = 21
    let response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/episodes`);
    let data = await response.json();
    //return data
    allRequests.push({
    url: 'https://api.jikan.moe/v4/anime/${animeId}/episodes',
    method: 'GET',
    statusCode: response.status,
    timestamp: new Date().toISOString(),
    responseBody: data,
  })
  fs.writeFileSync(
    './api-requests.json',
    JSON.stringify(allRequests, null, 2), // pretty-print with 2-space indent
    'utf-8'
  );
  console.log('Saved to api-requests.json')
  }
}
/**(async () => {
  const server = new localserver();
  const result = await server.serverRun();
  console.log(result);
})();*/
//const server = new localserver();
//const result = server.serverRun();
//console.log(result);
const server = new localserver();
server.serverRun()
  .then(result => console.log(result))
  .catch(err => console.error(err));