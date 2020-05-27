'use strict'

const users = require('../models/index').users

const createUser = async (req, h) => {
  let result
  try {
    result = await users.create(req.payload)
    console.log(`==========> ${result}`)
  } catch (error) {
    console.error(error)
    return h.response('Problemas creando el usuario').code(500)
  }

  return h.response(`Usuario creado ID: ${result}`)
}

module.exports = {
  createUser: createUser
}