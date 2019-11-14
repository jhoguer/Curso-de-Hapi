'use strict'

const Hapi = require('hapi');

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: 'localhost'
})

async function init() {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return h.response('Hola mundo ...').code(200)
    }
  })

  server.route({
    method: 'GET',
    path: '/redirect',
    handler: (req, h) => {
      return h.response('http://platzi.com')
    }
  })

  try {
    await server.start()
  } catch (error){
    console.error(error)
    process.exit(1)
  }

  console.log(`Servidor lnazado en: ${server.info.uri}`)
}

init()