const routes = require('next-routes');

module.exports = routes()
    .add('/', 'home')
    .add('/items', 'items');
