'use strict'

const createUser = (req, h) => {
  console.log(req.payload)
  return 'Usuario creado'
}

module.exports = {
  createUser: createUser
}