const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        createServer(handler).listen(PORT);
    })
    .catch(ex => {
        console.log(ex.stack);
        process.exit(1);
    });
