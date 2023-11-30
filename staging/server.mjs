import { createServer } from 'http';
import { createReadStream, statSync, existsSync } from 'fs';
import { join, dirname, extname } from 'path';

// Get the directory of the current module
const currentDir = dirname(new URL(import.meta.url).pathname);

const port = process.env.STAGING_PORT || 8888;

function serveStaticFile(req, res, filePath) {
    if (!existsSync(filePath)) {
        // Handle the case where the file does not exist with a 404 response
        res.writeHead(404);
        res.end('Not Found');
        return;
    }

    let mimeType;

    // Set the Content-Type header for HTML files
    if (extname(filePath) === '.html') {
        mimeType = 'text/html';
    }

    const stream = createReadStream(filePath);

    stream.on('error', function () {
        res.writeHead(500); // Handle other errors with a 500 response if needed
        res.end('Internal Server Error');
    });

    const stat = statSync(filePath);

    res.writeHead(200, {
        'Content-Length': stat.size,
        'Content-Type': mimeType || 'application/octet-stream', // Use a default if MIME type is not set
    });

    stream.pipe(res);
}

const server = createServer(function (req, res) {
    let url = req.url === '/' ? '/index.html' : req.url;

    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    const filePath = join(currentDir, url);

    if (filePath.indexOf(currentDir) !== 0) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    serveStaticFile(req, res, filePath);
});

server.on('error', (error) => {
    console.error('Server error:', error);
    process.exit(1);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
