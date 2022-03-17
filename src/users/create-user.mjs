import fs from 'fs/promises';

export default function(req, res) {
  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', async() => {
    const jsonData = {};
    const data = Buffer.concat(chunks).toString().split('&');
    data.forEach(dt => {
        const temp = dt.split('=');
        jsonData[temp[0]] = temp[1];
    });
    const readed = await fs.readFile('user-list.json');
    const temp = JSON.parse(Buffer.concat([readed]).toString());
    temp.push(jsonData);
    await fs.writeFile('user-list.json', JSON.stringify(temp), 'utf-8');
    res.writeHead(301, { Location: '/users' });
    res.end();
  });
}