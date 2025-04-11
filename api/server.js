import { existsSync, readFileSync } from 'fs';
import { createServer } from 'http';
import { join } from 'path/posix';
// import { __dirname, PORT } from './blog';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const PORT = 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const sendblogs = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  console.log(`Received request: ${req.method} ${req.url}`);
  
  if (pathname === '/simple') {
    res.writeHead(200, { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({ message: "It works!" }));
    return;
  }

  if (pathname === '/api/getblogs') {
    try {
      if (existsSync(join(__dirname, 'public', 'blog-data.json'))) {
        const jsonData = readFileSync(join(__dirname, 'public', 'blog-data.json'), 'utf8');
        
        res.writeHead(200, {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(jsonData);
        console.log("sending blog json data");
      } else {
        throw new Error("Blog data file not found");
      }
    } catch (error) {
      console.error('api error', error);
      res.writeHead(400, {"content-type": 'text/plain'});
      res.end('error retrieving blog data');
    }
  }else{
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

sendblogs.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});