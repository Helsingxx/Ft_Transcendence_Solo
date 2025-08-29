module.exports = async function (fastify, opts) {
    fastify.get('/', async function handler (request, reply) {
    return { some_variable: 'some value of variable' }
  });

  fastify.get('/about', async function handler (request, reply) {
    return { info: 'Super puper information is saved here' }
  });
}