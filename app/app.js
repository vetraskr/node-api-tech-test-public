import express from 'express';
import { basename } from 'path';

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});


// Export the app for testing and start the server only when run directly
export default app;

// Determine if this file is the entry point in ESM
const isMainModule = basename(process.argv[1] || '') === 'app.js';

if (isMainModule) {
    app.listen(8080, function () {
        console.log('App listening on port 8080!')
    });
}
