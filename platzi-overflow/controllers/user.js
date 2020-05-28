'use strict'

const { users } = require('../models/index')
const Boom = require('@hapi/boom')

// Crear Usuario
const createUser = async (req, h) => {
  let result
  try {
    result = await users.create(req.payload)
  } catch (error) {
    return h.view('register', {
      title: 'Registro',
      error: 'Error creando el usuario'
    })
  }

  return h.view('register', {
    title: 'Registro',
    success: 'Usuario creado exitosamente'
  })
}

// Salir
const logout = (req, h) => {
  return h.redirect('/login').unstate('user')
}

// Validar Usuario
const validateUser = async (req, h) => {
  let result
  try {
    result = await users.validateUser(req.payload)
    if (!result) {
      return h.view('login', {
        title: 'Login',
        error: 'Email y/o contraseña incorrecta'
      })
    }
  } catch (error) {
    return h.view('login', {
      title: 'Login',
      error: 'Problemas validando el usuario'
    })
  }

  return h.redirect('/').state('user', {
    name: result.name,
    email: result.email
  })
}

// Si falla la Validacion
const failValidation = (req, h, err) => {
  const templates = {
    '/create-user': 'register',
    '/validate-user': 'login'
  }

  return h.view(templates[req.path], {
    title: 'Error de validaciion',
    error: 'Por favor complete los campos requeridos'
  }).code(400).takeover()
}

module.exports = {
  createUser: createUser,
  failValidation: failValidation,
  logout: logout,
  validateUser: validateUser,
}