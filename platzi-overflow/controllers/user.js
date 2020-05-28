'use strict'

const { users } = require('../models/index')

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

const validateUser = async (req, h) => {
  let result
  try {
    result = await users.validateUser(req.payload)
  } catch (error) {
    console.error(error)
    return h.response('Problemas validando el usuario').code(500)
  }

  return result
}

module.exports = {
  createUser: createUser,
  validateUser: validateUser
}