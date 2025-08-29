const fastify = require('fastify')({
  logger: true // Enable logger
});
const AutoLoad = require('fastify-autoload');
const path = require('path');

server.register(AutoLoad, {
    dir: path.join(__dirname, 'api', 'routes')
});
const createServer = (options) => {
  // Run web server
  try {
    fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  server.log.info('Server Started');
}

module.exports = {createServer}